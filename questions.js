// Original questions from provided files
const originalQuestions = [
    {
        question: "Which one of the following actions CANNOT be achieved by batch processing?",
        options: [
            "Rotate large amount of photos from landscape to portrait.",
            "Compressing a series of JPEG images into a ZIP file.",
            "Resizing large amount of images to a certain size.",
            "Converting a series of BMP images to JPEG."
        ],
        correctAnswer: "Compressing a series of JPEG images into a ZIP file.",
        explanation: "Batch processing is used for applying the same actions to multiple files, like rotating, resizing, or converting formats. Compressing images into a ZIP file is a different kind of operation that creates a new archive rather than modifying individual images."
    },
    {
        question: "What is analogous colours?",
        options: [
            "It means they are side by side in the colour wheel.",
            "It means they are transparent in the colour wheel.",
            "It means they contrast each other in the colour wheel.",
            "It means they are opposite each other in the colour wheel."
        ],
        correctAnswer: "It means they are side by side in the colour wheel.",
        explanation: "Analogous colors are groups of colors that are adjacent to each other on the color wheel, with one being the dominant color, which tends to be a primary or secondary color, and others that support. They create harmonious designs that are pleasing to the eye."
    },
    {
        question: "Which one of the following can be used to turn a photo of a green car to an orange one?",
        options: [
            "Tone Balance",
            "Emboss",
            "Sharpening",
            "Hue & Saturation"
        ],
        correctAnswer: "Hue & Saturation",
        explanation: "Hue & Saturation adjustments allow you to change the color (hue) of objects in an image without affecting other properties. This makes it possible to change a green car to orange while maintaining the original texture and lighting."
    },
    {
        question: "Which one of the following is TRUE about Lossy Compression?",
        options: [
            "GIF is an example of Lossy compression.",
            "Remove image information that cannot be observed by human eye.",
            "JPEG is NOT an example of Lossy compression.",
            "Remove image information that can be observed by human eye."
        ],
        correctAnswer: "Remove image information that cannot be observed by human eye.",
        explanation: "Lossy compression works by removing data that is less noticeable to human perception. It reduces file size by eliminating this 'unnecessary' information that most people wouldn't be able to detect, allowing for smaller file sizes while maintaining visual quality that appears acceptable to viewers."
    },
    {
        question: "Which of the following statements is FALSE about the raster file format?",
        options: [
            "Raster file formats are composed of individual pixels arranged in a grid.",
            "Raster file formats can be easily scaled up without losing quality.",
            "Common raster file formats include JPEG, PNG, and BMP.",
            "Raster file formats are typically used for detailed and complex images like photographs."
        ],
        correctAnswer: "Raster file formats can be easily scaled up without losing quality.",
        explanation: "Raster images lose quality when scaled up because they're made of a fixed number of pixels. When enlarged, the software must create new pixels through interpolation, which results in blurriness or pixelation. Vector graphics, not raster, can be scaled without quality loss."
    },
    {
        question: "What is a RAW image file format?",
        options: [
            "It contains original or unprocessed image information.",
            "It refers to unedited jpeg format in Photoshop.",
            "It contains edited layers in a raster image format.",
            "It refers to the format taken by all cameras."
        ],
        correctAnswer: "It contains original or unprocessed image information.",
        explanation: "RAW files contain all the unprocessed data from your camera's sensor. Unlike processed formats like JPEG, they preserve all the original information captured, giving photographers maximum control during post-processing for adjustments to exposure, white balance, and other settings."
    },
    {
        question: "Which one of the following tasks MUST be performed first when applying batch processing?",
        options: [
            "Select all the files to be processed.",
            "Edit all the files to be processed.",
            "Record the actions to be processed.",
            "Open all the files to be processed."
        ],
        correctAnswer: "Record the actions to be processed.",
        explanation: "When using batch processing, you must first record or define the sequence of actions that will be applied to multiple files. This creates a template of operations that can then be applied to all selected files consistently."
    },
    {
        question: "Which adjustment tool should we apply to edit a pie of green strawberries into red strawberries?",
        options: [
            "Tone Balance.",
            "Cropping.",
            "Hue and saturation.",
            "Hue and balance."
        ],
        correctAnswer: "Hue and saturation.",
        explanation: "Hue and saturation adjustments allow you to change specific colors in an image. By adjusting the hue, you can shift green colors to red, making it ideal for changing the color of objects like strawberries while maintaining their texture and shadows."
    },
    {
        question: "What term is used to describe any 2 colors that are opposite to each other in the color wheel?",
        options: [
            "Complementary colors.",
            "Warm colors.",
            "Analogous colors.",
            "Nature colors."
        ],
        correctAnswer: "Complementary colors.",
        explanation: "Complementary colors are pairs of colors that are positioned opposite each other on the color wheel. When placed side by side, they create maximum contrast and can make each other appear more vibrant. Examples include red and green, blue and orange, or purple and yellow."
    },
    {
        question: "Which file format supports animations?",
        options: [
            ".jpeg",
            ".ai",
            ".gif",
            ".xis"
        ],
        correctAnswer: ".gif",
        explanation: "GIF (Graphics Interchange Format) is one of the older file formats that supports animation. It allows multiple frames to be stored in a single file and displayed in sequence, creating simple animations. GIFs support transparency and are widely used on the web for simple animations."
    },
    {
        question: "To draw a painting that portrays calm and relaxing, which shades of color is best suited for this mood?",
        options: [
            "Red",
            "Yellow",
            "Black",
            "Blue"
        ],
        correctAnswer: "Blue",
        explanation: "Blue is often associated with calmness, serenity, and relaxation. It has a soothing effect and is known to lower blood pressure and heart rate. Cool colors like blue are commonly used in designs intended to evoke peaceful and tranquil feelings."
    },
    {
        question: "If you are instructed to create a painting to represent power and energy, which colors will you choose?",
        options: [
            "white and grey",
            "black and brown",
            "orange and red",
            "black and grey"
        ],
        correctAnswer: "orange and red",
        explanation: "Orange and red are warm colors that evoke feelings of energy, passion, and power. Red is associated with intensity and excitement, while orange represents enthusiasm and creativity. Together, they create a vibrant palette that communicates strength and dynamism."
    },
    {
        question: "Which of the following factors will not affect audio quality?",
        options: [
            "Bit depth",
            "Bitrate",
            "Length",
            "Sample rate"
        ],
        correctAnswer: "Length",
        explanation: "The length of an audio file affects its total file size but not its quality. Audio quality is determined by factors like bit depth (which affects dynamic range), bitrate (amount of data per second), and sample rate (frequency of samples), which all impact how accurately the sound is reproduced."
    },
    {
        question: "Which one of the following audio is a compressed format?",
        options: [
            "AIFF",
            "WAV",
            "MP3",
            "PCM"
        ],
        correctAnswer: "MP3",
        explanation: "MP3 (MPEG Audio Layer III) is a compressed audio format that uses lossy compression to significantly reduce file size while maintaining reasonable audio quality. WAV, AIFF, and PCM are uncompressed formats that preserve all audio data but result in larger file sizes."
    },
    {
        question: "What is the monitor size of an Ultra HD '4K' screen?",
        options: [
            "1280 by 720",
            "3840 by 2160",
            "1920 by 1080",
            "720 by 480"
        ],
        correctAnswer: "3840 by 2160",
        explanation: "Ultra HD or 4K resolution refers to a display resolution of 3840 pixels × 2160 pixels (8.3 megapixels, aspect ratio 16:9). This is four times the pixel count of Full HD (1920×1080) and provides much sharper and more detailed images."
    },
    {
        question: "Which one of the following platforms prefers 16:9 video aspect ratio?",
        options: [
            "Facebook",
            "IGTV",
            "Youtube",
            "lnstagram"
        ],
        correctAnswer: "Youtube",
        explanation: "YouTube is optimized for 16:9 aspect ratio videos, which is the standard widescreen format for most modern displays. Videos with different aspect ratios will display with black bars (letterboxing or pillarboxing) to maintain the original proportions when viewed on YouTube."
    },
    {
        question: "Which of the following term of copyright protection's duration protects up till 50 years from the end of the year of making the broadcast or cable programme?",
        options: [
            "Sound recordings",
            "Published Editions of Literary, Dramatic, Musical and Artistic Works",
            "Literary works",
            "Broadcasts and Cable Programmes"
        ],
        correctAnswer: "Broadcasts and Cable Programmes",
        explanation: "Copyright protection for broadcasts and cable programs typically extends for 50 years from the end of the year in which the broadcast was made. This is different from other works like literary or musical creations, which generally have longer protection periods."
    },
    {
        question: "Animation using frame by frame movement of a toy figurine is called",
        options: [
            "2D traditional animation",
            "Stop motion animation",
            "Sand animation",
            "Drawn on film animation"
        ],
        correctAnswer: "Stop motion animation",
        explanation: "Stop motion animation is a technique where objects (like toy figurines) are physically moved in small increments between individually photographed frames. When the frames are played back in sequence, it creates the illusion of movement. Famous examples include Wallace and Gromit and Coraline."
    },
    {
        question: "Which one of the following uses lossy compression?",
        options: [
            "PSD",
            "TIFF",
            "JPEG",
            "GIF"
        ],
        correctAnswer: "JPEG",
        explanation: "JPEG (Joint Photographic Experts Group) uses lossy compression, which permanently discards some image data to achieve smaller file sizes. While this results in some quality loss, especially with repeated saving, it's widely used for photographs where the compression artifacts may not be noticeable."
    },
    {
        question: "Which of the following file formats is typically used for high-quality print graphics and supports both raster and vector data?",
        options: [
            "JPEG",
            "PNG",
            "PDF",
            "GIF"
        ],
        correctAnswer: "PDF",
        explanation: "PDF (Portable Document Format) can contain both raster and vector elements while maintaining high quality. It's designed to preserve the exact look of documents regardless of the software, hardware, or operating system used to view them, making it ideal for print publishing."
    },
    {
        question: "In digital media, what does the term 'bit depth' refer to?",
        options: [
            "The number of pixels in an image.",
            "The number of colors an image can display.",
            "The resolution of an image.",
            "The compression ratio of an image."
        ],
        correctAnswer: "The number of colors an image can display.",
        explanation: "Bit depth refers to the number of bits used to represent the color of a single pixel. It determines the maximum number of colors that can be displayed in an image. For example, an 8-bit image can display up to 256 colors, while a 24-bit image can display approximately 16.7 million colors."
    },
    {
        question: "Which file format is commonly used for lossless compression of audio files?",
        options: [
            "MP3",
            "WAV",
            "AAC",
            "OGG"
        ],
        correctAnswer: "WAV",
        explanation: "WAV (Waveform Audio File Format) is an uncompressed or losslessly compressed audio format that preserves all of the original audio data. While WAV files are larger than compressed formats like MP3, they maintain complete audio fidelity, making them ideal for audio production and archiving."
    },
    {
        question: "What does the term 'pixel' refer to in digital imaging?",
        options: [
            "A small dot on a printed page",
            "The unit of measurement for resolution",
            "The smallest element of an image displayed on a screen",
            "The file format used to store images"
        ],
        correctAnswer: "The smallest element of an image displayed on a screen",
        explanation: "A pixel (short for 'picture element') is the smallest addressable element in a raster image or display. Each pixel is a sample of an original image, where more samples typically provide more accurate representations of the original. The intensity of each pixel is variable; in color imaging systems, each pixel has three components such as red, green, and blue."
    },
    {
        question: "Which color model is used for printing purposes and stands for Cyan, Magenta, Yellow, and Key (black)?",
        options: [
            "RGB",
            "CMYK",
            "HSL",
            "YUV"
        ],
        correctAnswer: "CMYK",
        explanation: "CMYK (Cyan, Magenta, Yellow, Key/Black) is the color model used in color printing. Unlike RGB which is additive and used for digital displays, CMYK is a subtractive color model where inks absorb (subtract) certain wavelengths of light. The 'K' stands for 'Key' or black, which is used to improve shadow detail and color depth in printed materials."
    },
    {
        question: "Which of the following file formats is commonly used for storing vector graphics?",
        options: [
            "PNG",
            "JPG",
            "SVG",
            "GIF"
        ],
        correctAnswer: "SVG",
        explanation: "SVG (Scalable Vector Graphics) is an XML-based vector image format for two-dimensional graphics. Unlike raster formats (PNG, JPG, GIF), vector graphics in SVG format can be scaled to any size without losing quality, making them ideal for logos, icons, and illustrations that need to appear at various sizes."
    },
    {
        question: "Which of the following is NOT a characteristic of lossy compression?",
        options: [
            "Reduced file size",
            "Loss of quality",
            "Irreversible compression",
            "Preserves all original data"
        ],
        correctAnswer: "Preserves all original data",
        explanation: "Lossy compression reduces file size by permanently removing certain information, especially redundancies and less noticeable details. By definition, it does not preserve all original data, which is actually the main characteristic of lossless compression methods."
    },
    {
        question: "What is the function of metadata in digital media files?",
        options: [
            "To compress the file for efficient storage",
            "To encrypt the file to prevent unauthorized access",
            "To store additional information about the file, such as author and copyright details",
            "To convert the file to a different format"
        ],
        correctAnswer: "To store additional information about the file, such as author and copyright details",
        explanation: "Metadata is 'data about data' that provides additional information about a digital media file. This can include details like the creator's name, creation date, copyright information, camera settings (for photos), keywords, descriptions, and other information that helps organize, find, and understand the content."
    },
    {
        question: "Which of the following statements is true about raster graphics?",
        options: [
            "They are resolution-independent",
            "They are based on mathematical formulas",
            "They are made up of geometric shapes",
            "They are represented by pixels"
        ],
        correctAnswer: "They are represented by pixels",
        explanation: "Raster graphics, also called bitmap graphics, are made up of pixels (tiny colored squares) arranged in a grid. Each pixel contains specific color information, and together they form the complete image. Unlike vector graphics which use mathematical formulas to create shapes, raster graphics are resolution-dependent and may lose quality when scaled."
    },
    {
        question: "Which file format is commonly used for streaming audio and video over the internet?",
        options: [
            "WAV",
            "MP4",
            "AVI",
            "FLV"
        ],
        correctAnswer: "MP4",
        explanation: "MP4 (MPEG-4 Part 14) is widely used for streaming audio and video over the internet due to its good compression efficiency and compatibility across platforms. It offers a good balance between quality and file size, making it ideal for online streaming where bandwidth considerations are important."
    },
    {
        question: "What does the acronym 'GIF' stand for in digital media?",
        options: [
            "Graphical Image File",
            "General Image Format",
            "Graphics Interchange Format",
            "Graphics Information File"
        ],
        correctAnswer: "Graphics Interchange Format",
        explanation: "GIF stands for Graphics Interchange Format. It was developed by CompuServe in 1987 and has become widely used on the web, particularly for simple animations. GIFs support a limited color palette (up to 256 colors), can be animated, and support transparency."
    },
    {
        question: "What is the purpose of dithering in digital imaging?",
        options: [
            "To reduce noise in the image",
            "To increase contrast in the image",
            "To smooth out gradients in the image",
            "To simulate additional colors in the image"
        ],
        correctAnswer: "To simulate additional colors in the image",
        explanation: "Dithering is a technique used to create the illusion of more colors than are actually available in the color palette. It works by arranging pixels of different colors in patterns that, when viewed from a distance, appear to blend into intermediate colors. This was especially important for early displays with limited color capabilities."
    },
    {
        question: "Which of the following statements is true about vector graphics?",
        options: [
            "They are resolution-dependent",
            "They are represented by pixels",
            "They are suitable for photographs",
            "They can be scaled without loss of quality"
        ],
        correctAnswer: "They can be scaled without loss of quality",
        explanation: "Vector graphics use mathematical equations to represent images rather than pixels. Because they're based on formulas rather than fixed points, they can be scaled to any size without losing quality or becoming pixelated. This makes them ideal for logos, illustrations, and text that may need to appear at various sizes."
    },
    {
        question: "Which file format is commonly used for storing high-quality images with lossless compression?",
        options: [
            "JPEG",
            "PNG",
            "GIF",
            "TIFF"
        ],
        correctAnswer: "TIFF",
        explanation: "TIFF (Tagged Image File Format) is widely used for storing high-quality images, especially in professional photography, printing, and publishing. It supports lossless compression, preserving all image data while reducing file size. TIFF also supports layers, multiple pages, and various color modes, making it versatile for professional image processing."
    },
    {
        question: "Which of the following statements is true about alpha channels in digital imaging?",
        options: [
            "They represent the brightness of each pixel in the image",
            "They store additional color information for each pixel in the image",
            "They control the transparency of each pixel in the image",
            "They define the resolution of the image"
        ],
        correctAnswer: "They control the transparency of each pixel in the image",
        explanation: "An alpha channel in digital imaging specifies the transparency level for each pixel in an image. It's essentially an additional channel alongside the color channels (like RGB) that determines how opaque or transparent each pixel appears. This allows for effects like partial transparency, soft edges, and the ability to seamlessly place images over different backgrounds."
    },
    {
        question: "Which of the following file formats supports transparency?",
        options: [
            "BMP",
            "JPEG",
            "PNG",
            "TIFF"
        ],
        correctAnswer: "PNG",
        explanation: "PNG (Portable Network Graphics) natively supports transparency through an alpha channel. This allows for images with varying levels of transparency, from fully transparent to fully opaque. Unlike JPEG which has no transparency support, PNG is ideal for web graphics that need to be displayed over different colored backgrounds."
    },
    {
        question: "Which of the following file formats is commonly used for animated graphics?",
        options: [
            "TIFF",
            "SVG",
            "GIF",
            "JPEG"
        ],
        correctAnswer: "GIF",
        explanation: "GIF (Graphics Interchange Format) is widely used for simple animations, especially on the web. It supports multiple frames that can be displayed in sequence to create animation. While limited to 256 colors per frame, its wide compatibility and support for transparency make it popular for short, simple animations and animated icons."
    },
    {
        question: "What is the purpose of color depth in digital imaging?",
        options: [
            "To adjust the brightness of an image",
            "To specify the number of colors used in an image",
            "To enhance the contrast of an image",
            "To resize the dimensions of an image"
        ],
        correctAnswer: "To specify the number of colors used in an image",
        explanation: "Color depth (also known as bit depth) refers to the number of bits used to represent the color of a single pixel. It determines the maximum number of colors that can be displayed in an image. Higher color depths allow for more colors and smoother color transitions, resulting in more realistic images but larger file sizes."
    },
    {
        question: "Which of the following statements is true about lossy compression?",
        options: [
            "It preserves all data from the original file",
            "It results in larger file sizes compared to lossless compression",
            "It is reversible compression",
            "It reduces file size by removing unnecessary data"
        ],
        correctAnswer: "It reduces file size by removing unnecessary data",
        explanation: "Lossy compression works by identifying and eliminating data that is less crucial to the perceived quality of the content. It achieves smaller file sizes by permanently discarding information deemed less important, particularly details that may not be easily noticed by human perception. This makes it ideal for applications where file size is more important than perfect reproduction."
    },
    {
        question: "What does the acronym 'JPEG' stand for in digital imaging?",
        options: [
            "Joint Photographic Experts Group",
            "Java Photo Encoding Graphics",
            "JPEG Encoded Photo Graph",
            "Jumbo Pixel Enhanced Graphics"
        ],
        correctAnswer: "Joint Photographic Experts Group",
        explanation: "JPEG stands for Joint Photographic Experts Group, which is the committee that created the standard. The JPEG format is widely used for storing and transmitting photographic images on the web and in digital cameras. It uses lossy compression to achieve smaller file sizes, making it practical for storage and sharing."
    },
    {
        question: "What does the acronym 'MP3' stand for in digital media?",
        options: [
            "Moving Picture Expert Group-3",
            "Multimedia Projector Three",
            "Motion Picture Three",
            "MPEG Audio Layer III"
        ],
        correctAnswer: "MPEG Audio Layer III",
        explanation: "MP3 stands for MPEG Audio Layer III. It's part of the MPEG-1 standard developed by the Moving Picture Experts Group. MP3 became popular as a digital audio encoding format because it could compress audio files to about 1/10th of their original size while maintaining reasonable sound quality, making digital music sharing and storage much more practical."
    },
    {
        question: "What does the term 'Frame Rate' refer to in digital video?",
        options: [
            "The resolution of the video",
            "The size of each frame in the video",
            "The number of frames displayed per second",
            "The aspect ratio of the video"
        ],
        correctAnswer: "The number of frames displayed per second",
        explanation: "Frame rate refers to the frequency at which consecutive images (frames) are displayed in an animated display. It's typically expressed as frames per second (fps). Higher frame rates can create smoother motion in videos. Common frame rates include 24 fps (film), 30 fps (standard video), and 60 fps (smooth gaming and high-action video)."
    },
    {
        question: "What does the term 'Bit Depth' refer to in digital imaging?",
        options: [
            "The number of pixels in the image",
            "The number of bits used to represent each pixel in the image",
            "The color space used in the image",
            "The size of the image file in bits"
        ],
        correctAnswer: "The number of bits used to represent each pixel in the image",
        explanation: "Bit depth refers to the number of bits used to represent the color information of each pixel in a digital image. Higher bit depths allow for more color information to be stored. For example, an 8-bit image can display up to 256 colors per channel, while a 16-bit image can display up to 65,536 colors per channel, resulting in more subtle color gradations."
    },
    {
        question: "What does the term 'Aspect Ratio' refer to in digital media?",
        options: [
            "The number of pixels in an image",
            "The size of an image in inches",
            "The ratio of the width to the height of an image or video",
            "The resolution of an image or video"
        ],
        correctAnswer: "The ratio of the width to the height of an image or video",
        explanation: "Aspect ratio describes the proportional relationship between the width and height of an image or screen. It's typically expressed as two numbers separated by a colon (e.g., 16:9, 4:3). Common aspect ratios include 16:9 for widescreen displays, 4:3 for traditional TV, and 1:1 for square formats popular on some social media platforms."
    },
    {
        question: "Which of the following is NOT a commonly used video file format?",
        options: [
            "MP4",
            "AVI",
            "FLAC",
            "MOV"
        ],
        correctAnswer: "FLAC",
        explanation: "FLAC (Free Lossless Audio Codec) is an audio file format, not a video format. It's used for lossless compression of digital audio. MP4, AVI, and MOV are all video container formats that can include both video and audio streams, along with other data like subtitles."
    },
    {
        question: "Which primary colors are typically used in the RGB color model?",
        options: [
            "Red, Green, Blue",
            "Cyan, Magenta, Yellow",
            "Red, Yellow, Blue",
            "Cyan, Green, Magenta"
        ],
        correctAnswer: "Red, Green, Blue",
        explanation: "The RGB color model uses red, green, and blue light as its primary colors. It's an additive color model where these three colors of light are added together in various combinations to reproduce a broad array of colors. RGB is used in electronic displays like TVs, computer monitors, and smartphone screens."
    },
    {
        question: "What color is obtained by mixing equal parts of red and blue in the RGB color model?",
        options: [
            "Yellow",
            "Magenta",
            "Cyan",
            "Green"
        ],
        correctAnswer: "Magenta",
        explanation: "In the RGB color model, mixing equal parts of red and blue creates magenta (also called fuchsia). In digital color representation, this would be represented as RGB(255,0,255) with maximum red, no green, and maximum blue. Magenta is one of the secondary colors in the RGB color model."
    },
    {
        question: "In the CMYK color model used for printing, what does the 'K' stand for?",
        options: [
            "Key",
            "Kyanite",
            "Kale",
            "Black"
        ],
        correctAnswer: "Key",
        explanation: "In the CMYK color model, 'K' stands for Key, which refers to the black ink. It's called 'Key' rather than 'B' to avoid confusion with Blue in discussions about color printing. The black (Key) plate provides detail and shadow in printed materials, and using a separate black ink is more economical than creating black by mixing cyan, magenta, and yellow."
    },
    {
        question: "What color is complementary to blue in the 12-division color wheel?",
        options: [
            "Orange",
            "Red",
            "Cyan",
            "Green"
        ],
        correctAnswer: "Orange",
        explanation: "On the traditional 12-division color wheel, complementary colors are those directly opposite each other. Blue's complementary color is orange. When placed side by side, complementary colors create maximum contrast and can make each other appear more vibrant. This relationship is often used in art and design to create visual interest and emphasis."
    }
];

// Create additional questions by rewording existing ones
const additionalQuestions = [
    {
        question: "What type of animation involves photographing physical objects as they are moved in small increments?",
        options: [
            "Claymation",
            "Stop motion",
            "Traditional cell animation",
            "Computer-generated imagery"
        ],
        correctAnswer: "Stop motion",
        explanation: "Stop motion animation is a technique where objects are physically manipulated in small increments between individually photographed frames. When played back, it creates the illusion of movement. This technique is used in films like Wallace and Gromit, Coraline, and Kubo and the Two Strings."
    },
    {
        question: "When designing a website that needs to display detailed photographs, which file format would be most appropriate?",
        options: [
            "GIF",
            "PNG",
            "JPEG",
            "SVG"
        ],
        correctAnswer: "JPEG",
        explanation: "JPEG is the most appropriate format for detailed photographs on websites because it offers good compression for photographic images while maintaining acceptable visual quality. Although it uses lossy compression, the artifacts are less noticeable in photographs than in graphics with sharp edges or text."
    },
    {
        question: "What would be the most efficient way to change the colors of 100 product images from blue to red?",
        options: [
            "Edit each image individually",
            "Use batch processing with hue and saturation adjustment",
            "Convert all images to vector format first",
            "Print and rescan all images with different settings"
        ],
        correctAnswer: "Use batch processing with hue and saturation adjustment",
        explanation: "Batch processing allows you to apply the same action (in this case, a hue and saturation adjustment to change blue to red) to multiple files automatically. This saves significant time compared to editing each image individually, especially when dealing with large numbers of similar images."
    },
    {
        question: "Why are vector graphics preferred for logos and icons?",
        options: [
            "They have smaller file sizes than raster images",
            "They support more colors than raster images",
            "They can be scaled to any size without losing quality",
            "They load faster on websites"
        ],
        correctAnswer: "They can be scaled to any size without losing quality",
        explanation: "Vector graphics are ideal for logos and icons because they use mathematical equations rather than pixels, allowing them to be scaled to any size without losing quality. This means the same logo file can be used on a business card or a billboard without becoming pixelated or blurry."
    },
    {
        question: "What happens to image quality when you significantly increase the size of a JPEG file?",
        options: [
            "The quality improves with larger dimensions",
            "The quality remains exactly the same",
            "The image becomes pixelated or blurry",
            "The file becomes corrupted"
        ],
        correctAnswer: "The image becomes pixelated or blurry",
        explanation: "When a JPEG image is significantly enlarged, it becomes pixelated or blurry because the original pixels are stretched or the software has to create new pixels through interpolation. Since JPEG is a raster format composed of a fixed number of pixels, scaling up reveals these limitations in quality."
    }
];

// Massively expanded reworded questions
const rewordedQuestions = [];
(function generateRewordedQuestions() {
    function shuffle(arr) {
        let a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    let count = 0;
    for (const q of originalQuestions) {
        // 3 rewordings per question
        for (let v = 0; v < 3; v++) {
            if (count >= 160) break;
            let reworded = { ...q };
            // Rephrase question
            let base = q.question;
            if (v === 0) {
                reworded.question = `Select the correct statement: ${base}`;
            } else if (v === 1) {
                reworded.question = `Which of these is true? ${base}`;
            } else {
                reworded.question = `Can you answer: ${base}`;
            }
            // Shuffle options
            reworded.options = shuffle(q.options);
            // Keep correct answer and explanation
            rewordedQuestions.push(reworded);
            count++;
        }
        if (count >= 160) break;
    }
})();

// Combine all questions
const allQuestions = [
  ...originalQuestions,
  ...additionalQuestions,
  ...rewordedQuestions
]; 