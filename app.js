// DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
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

// Quiz state
let currentQuestionIndex = 0;
let score = 0;
let quizQuestions = [];
const totalQuestions = 50;
let userAnswers = [];

// Function to shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize quiz
function initQuiz() {
    // Reset quiz state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    // Shuffle and select questions
    quizQuestions = shuffleArray([...allQuestions]).slice(0, totalQuestions);
    
    // Update UI
    updateQuestionCounter();
    updateScoreDisplay();
    showQuestion();
    
    // Hide other screens and show quiz screen
    startScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
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
        optionElement.addEventListener('click', () => selectOption(option));
        optionsContainer.appendChild(optionElement);
    });
    
    // Hide feedback container
    feedbackContainer.classList.add('hidden');
    
    // Update progress bar
    updateProgressBar();
}

// Handle option selection
function selectOption(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    
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
    
    const percentage = Math.round((score / totalQuestions) * 100);
    finalScore.textContent = `${score}/${totalQuestions}`;
    percentageDisplay.textContent = `${percentage}%`;
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

// Event listeners
startBtn.addEventListener('click', initQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', initQuiz);

// REVIEW FUNCTIONALITY
const reviewBtn = document.getElementById('review-btn');
const reviewScreen = document.getElementById('review-screen');
const reviewList = document.getElementById('review-list');
const backToResultsBtn = document.getElementById('back-to-results-btn');
const showAllBtn = document.getElementById('show-all-btn');
const showIncorrectBtn = document.getElementById('show-incorrect-btn');

let reviewFilter = 'all'; // 'all' or 'incorrect'

reviewBtn.addEventListener('click', () => {
    reviewFilter = 'all';
    showReviewScreen();
});
backToResultsBtn.addEventListener('click', () => {
    reviewScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
});
showAllBtn.addEventListener('click', () => {
    reviewFilter = 'all';
    showReviewScreen();
    showAllBtn.classList.add('active');
    showIncorrectBtn.classList.remove('active');
});
showIncorrectBtn.addEventListener('click', () => {
    reviewFilter = 'incorrect';
    showReviewScreen();
    showIncorrectBtn.classList.add('active');
    showAllBtn.classList.remove('active');
});

function showReviewScreen() {
    resultsScreen.classList.add('hidden');
    reviewScreen.classList.remove('hidden');
    reviewList.innerHTML = '';
    quizQuestions.forEach((q, i) => {
        const userAnswer = userAnswers[i];
        const isCorrect = userAnswer === q.correctAnswer;
        if (reviewFilter === 'incorrect' && isCorrect) return;
        const item = document.createElement('div');
        item.className = 'review-item ' + (isCorrect ? 'correct-highlight' : 'incorrect-highlight');
        item.innerHTML = `
            <div class="review-question">
                <span class="icon">${isCorrect ? '✔️' : '❌'}</span> ${i + 1}. ${q.question}
            </div>
            <div class="review-options">
                ${q.options.map(opt => {
                    let style = '';
                    if (opt === q.correctAnswer) style = 'font-weight:bold; color:#155724;';
                    else if (opt === userAnswer && !isCorrect) style = 'font-weight:bold; color:#721c24;';
                    return `<div style='${style}'>${opt}</div>`;
                }).join('')}
            </div>
            <div class="review-answer ${isCorrect ? 'correct' : 'incorrect'}">
                Your answer: ${userAnswer ? userAnswer : '<em>No answer</em>'}
            </div>
            <div class="review-answer correct">
                Correct answer: ${q.correctAnswer}
            </div>
            <div class="review-explanation">${q.explanation}</div>
        `;
        reviewList.appendChild(item);
    });
    // Set active button
    if (reviewFilter === 'all') {
        showAllBtn.classList.add('active');
        showIncorrectBtn.classList.remove('active');
    } else {
        showIncorrectBtn.classList.add('active');
        showAllBtn.classList.remove('active');
    }
} 