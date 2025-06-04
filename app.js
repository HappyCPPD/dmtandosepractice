// DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const resumeBtn = document.getElementById('resume-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackText = document.getElementById('feedback-text');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score-display');
const finalScore = document.getElementById('final-score');
const percentageDisplay = document.getElementById('percentage');
const progressBar = document.getElementById('progress-bar');
const timerDisplay = document.getElementById('timer');
const timeTaken = document.getElementById('time-taken');
const difficultySelect = document.getElementById('difficulty');
const numQuestionsSelect = document.getElementById('num-questions');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const searchReviewInput = document.getElementById('search-review');
const showCorrectBtn = document.getElementById('show-correct-btn');

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let quizQuestions = [];
let totalQuestions = 50;
let userAnswers = [];
let quizStartTime = null;
let quizTimer = null;
let elapsedSeconds = 0;
let isDarkMode = false;
let isPaused = false;

// Function to shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Set difficulty for questions
function assignDifficulty() {
    // Assign difficulty levels to questions if not already assigned
    allQuestions.forEach(q => {
        if (!q.difficulty) {
            // Simple algorithm to determine difficulty
            // More options = harder question
            // Longer question text = harder question
            // These are just heuristics, not perfect
            const optionLength = q.options.length;
            const questionLength = q.question.length;
            
            if (questionLength > 100 || q.explanation.length > 200) {
                q.difficulty = 'hard';
            } else if (questionLength > 60 || q.explanation.length > 100) {
                q.difficulty = 'medium';
            } else {
                q.difficulty = 'easy';
            }
        }
    });
}

// Filter questions by difficulty
function filterByDifficulty(difficulty) {
    if (difficulty === 'all') {
        return allQuestions;
    }
    
    return allQuestions.filter(q => q.difficulty === difficulty);
}

// Initialize quiz
function initQuiz() {
    // Reset quiz state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    elapsedSeconds = 0;
    
    // Get selected difficulty and number of questions
    const selectedDifficulty = difficultySelect.value;
    totalQuestions = parseInt(numQuestionsSelect.value);
    
    // Ensure all questions have difficulty assigned
    assignDifficulty();
    
    // Filter questions by difficulty
    const filteredQuestions = filterByDifficulty(selectedDifficulty);
    
    // Shuffle and select questions
    const shuffledQuestions = shuffleArray([...filteredQuestions]);
    
    // Create a more robust uniqueness check for questions
    const uniqueQuestions = [];
    const seenAnswerSets = new Set(); // Track answer sets to avoid substantively identical questions
    
    // Get unique questions until we have enough or run out
    for (const q of shuffledQuestions) {
        if (uniqueQuestions.length >= totalQuestions) break;
        
        // Create a unique signature for this question based on its options + correct answer
        // This catches reworded questions with the same options and correct answer
        const answerSignature = [...q.options].sort().join('|') + '::' + q.correctAnswer;
        
        if (!seenAnswerSets.has(answerSignature)) {
            seenAnswerSets.add(answerSignature);
            uniqueQuestions.push(q);
        }
    }
    
    quizQuestions = uniqueQuestions.slice(0, totalQuestions);
    
    // If we don't have enough unique questions, fill with random ones
    if (quizQuestions.length < totalQuestions) {
        console.log(`Warning: Only found ${quizQuestions.length} unique questions out of ${totalQuestions} requested.`);
        totalQuestions = quizQuestions.length;
    }
    
    // Start timer
    startTimer();
    
    // Update UI
    updateQuestionCounter();
    updateScoreDisplay();
    showQuestion();
    
    // Hide other screens and show quiz screen
    startScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    reviewScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    // Save current state to localStorage
    saveQuizState();
}

// Timer functions
function resetTimer() {
    clearInterval(quizTimer);
    quizStartTime = null;
    elapsedSeconds = 0;
    timerDisplay.textContent = "00:00";
}

function startTimer() {
    quizStartTime = new Date();
    clearInterval(quizTimer);
    quizTimer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (!quizStartTime) return;
    const now = new Date();
    const totalElapsed = elapsedSeconds + Math.floor((now - quizStartTime) / 1000);
    const minutes = Math.floor(totalElapsed / 60);
    const seconds = totalElapsed % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function stopTimer() {
    if (quizStartTime) {
        const now = new Date();
        elapsedSeconds += Math.floor((now - quizStartTime) / 1000);
        quizStartTime = null;
    }
    clearInterval(quizTimer);
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;
    timeTaken.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Display current question
function showQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    // Update question text
    questionText.textContent = currentQuestion.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create option elements
    const shuffledOptions = shuffleArray([...currentQuestion.options]);
    
    shuffledOptions.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.dataset.index = index + 1; // For keyboard navigation
        optionElement.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(optionElement);
    });
    
    // Hide feedback container
    feedbackContainer.classList.add('hidden');
    
    // Update progress bar
    updateProgressBar();
    
    // Save current state
    saveQuizState();
}

// Handle option selection
function selectOption(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    
    // Check if an answer has already been selected
    if (userAnswers[currentQuestionIndex]) {
        return; // Already answered
    }
    
    // Track user answer
    userAnswers[currentQuestionIndex] = selectedOption;
    
    // Disable all options
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.add('disabled');
        
        if (option.textContent === currentQuestion.correctAnswer) {
            option.classList.add('correct');
        } else if (option.textContent === selectedOption && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    // Update score if correct
    if (isCorrect) {
        score++;
        updateScoreDisplay();
        feedbackText.innerHTML = `<span style="color: #155724;">Correct!</span> ${currentQuestion.explanation}`;
    } else {
        feedbackText.innerHTML = `<span style="color: #721c24;">Incorrect.</span> The correct answer is: <strong>${currentQuestion.correctAnswer}</strong><br><br>${currentQuestion.explanation}`;
    }
    
    // Show feedback
    feedbackContainer.classList.remove('hidden');
    
    // Save current state
    saveQuizState();
}

// Handle next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < totalQuestions) {
        updateQuestionCounter();
        showQuestion();
    } else {
        showResults();
    }
}

// Show quiz results
function showResults() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    // Stop the timer
    stopTimer();
    
    const percentage = Math.round((score / totalQuestions) * 100);
    finalScore.textContent = `${score}/${totalQuestions}`;
    percentageDisplay.textContent = `${percentage}%`;
    
    // Clear the saved state since quiz is complete
    localStorage.removeItem('quizState');
}

// Update question counter
function updateQuestionCounter() {
    questionCounter.textContent = `Question ${currentQuestionIndex + 1}/${totalQuestions}`;
}

// Update score display
function updateScoreDisplay() {
    scoreDisplay.textContent = `Score: ${score}/${currentQuestionIndex + 1}`;
}

// Update progress bar
function updateProgressBar() {
    const progress = ((currentQuestionIndex) / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
}

// Save quiz state to localStorage
function saveQuizState() {
    const quizState = {
        currentQuestionIndex,
        score,
        quizQuestions,
        totalQuestions,
        userAnswers,
        elapsedSeconds,
        difficulty: difficultySelect.value,
        numQuestions: numQuestionsSelect.value
    };
    
    localStorage.setItem('quizState', JSON.stringify(quizState));
}

// Load quiz state from localStorage
function loadQuizState() {
    const savedState = localStorage.getItem('quizState');
    
    if (savedState) {
        const state = JSON.parse(savedState);
        currentQuestionIndex = state.currentQuestionIndex;
        score = state.score;
        quizQuestions = state.quizQuestions;
        totalQuestions = state.totalQuestions;
        userAnswers = state.userAnswers;
        elapsedSeconds = state.elapsedSeconds || 0;
        
        // Set UI elements to match saved state
        if (state.difficulty) {
            difficultySelect.value = state.difficulty;
        }
        
        if (state.numQuestions) {
            numQuestionsSelect.value = state.numQuestions;
        }
        
        // Make resume button visible
        resumeBtn.classList.remove('hidden');
        
        return true;
    }
    
    return false;
}

// Resume quiz from saved state
function resumeQuiz() {
    // Start timer with saved elapsed time
    startTimer();
    
    // Update UI
    updateQuestionCounter();
    updateScoreDisplay();
    showQuestion();
    
    // Hide other screens and show quiz screen
    startScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    reviewScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
}

// Toggle dark mode
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    // Update icon
    const icon = themeToggleBtn.querySelector('i');
    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
    
    // Save preference
    localStorage.setItem('darkMode', isDarkMode);
}

// Load dark mode preference
function loadDarkModePreference() {
    const savedPreference = localStorage.getItem('darkMode');
    if (savedPreference === 'true') {
        isDarkMode = true;
        document.body.classList.add('dark-mode');
        const icon = themeToggleBtn.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

// Search in review screen
function filterReviewItems() {
    const searchTerm = searchReviewInput.value.toLowerCase();
    const reviewItems = document.querySelectorAll('.review-item');
    
    reviewItems.forEach(item => {
        const question = item.querySelector('.review-question').textContent.toLowerCase();
        const options = Array.from(item.querySelectorAll('.review-option')).map(o => o.textContent.toLowerCase());
        const explanation = item.querySelector('.review-explanation').textContent.toLowerCase();
        
        const matchesSearch = question.includes(searchTerm) || 
                              options.some(o => o.includes(searchTerm)) || 
                              explanation.includes(searchTerm);
        
        if (matchesSearch) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

// REVIEW FUNCTIONALITY
const reviewBtn = document.getElementById('review-btn');
const reviewScreen = document.getElementById('review-screen');
const reviewList = document.getElementById('review-list');
const backToResultsBtn = document.getElementById('back-to-results-btn');
const showAllBtn = document.getElementById('show-all-btn');
const showIncorrectBtn = document.getElementById('show-incorrect-btn');

let reviewFilter = 'all'; // 'all', 'incorrect', or 'correct'

reviewBtn.addEventListener('click', () => {
    reviewFilter = 'all';
    showReviewScreen();
});

backToResultsBtn.addEventListener('click', () => {
    reviewScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
});

// Show all questions in review
showAllBtn.addEventListener('click', () => {
    reviewFilter = 'all';
    showReviewScreen();
});

// Show only incorrect answers in review
showIncorrectBtn.addEventListener('click', () => {
    reviewFilter = 'incorrect';
    showReviewScreen();
});

// Show only correct answers in review
showCorrectBtn.addEventListener('click', () => {
    reviewFilter = 'correct';
    showReviewScreen();
});

function showReviewScreen() {
    resultsScreen.classList.add('hidden');
    reviewScreen.classList.remove('hidden');
    
    // Clear previous review items
    reviewList.innerHTML = '';
    
    // Create review items
    quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        
        // Filter based on selected view
        if (
            (reviewFilter === 'all') || 
            (reviewFilter === 'incorrect' && !isCorrect) || 
            (reviewFilter === 'correct' && isCorrect)
        ) {
            const reviewItem = document.createElement('div');
            reviewItem.classList.add('review-item');
            
            if (isCorrect) {
                reviewItem.classList.add('correct-highlight');
            } else {
                reviewItem.classList.add('incorrect-highlight');
            }
            
            const questionNumber = index + 1;
            const statusIcon = isCorrect ? 
                '<span class="icon correct">✓</span>' : 
                '<span class="icon incorrect">✗</span>';
                
            reviewItem.innerHTML = `
                <div class="review-question">${statusIcon} Question ${questionNumber}: ${question.question}</div>
                <div class="review-options">
                    ${question.options.map(option => {
                        let optionClass = '';
                        if (option === question.correctAnswer) {
                            optionClass = 'correct';
                        } else if (option === userAnswer && !isCorrect) {
                            optionClass = 'incorrect';
                        }
                        return `<div class="review-option ${optionClass}">${option}</div>`;
                    }).join('')}
                </div>
                <div class="review-answer ${isCorrect ? 'correct' : 'incorrect'}">
                    Your answer: ${userAnswer || 'Not answered'}
                </div>
                <div class="review-explanation">${question.explanation}</div>
            `;
            
            reviewList.appendChild(reviewItem);
        }
    });
    
    // Clear search input
    searchReviewInput.value = '';
}

// Event listeners
startBtn.addEventListener('click', initQuiz);
resumeBtn.addEventListener('click', resumeQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', initQuiz);
themeToggleBtn.addEventListener('click', toggleDarkMode);
searchReviewInput.addEventListener('input', filterReviewItems);
document.addEventListener('keydown', handleKeyboardInput);

// On page load
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved quiz state
    loadQuizState();
    
    // Load dark mode preference
    loadDarkModePreference();
    
    // Combine question arrays
    if (typeof originalQuestions !== 'undefined') {
        allQuestions = [...originalQuestions];
    }
}); 