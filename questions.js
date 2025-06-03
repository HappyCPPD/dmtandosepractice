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

// Additional manually crafted questions
const additionalQuestions = [
    {
        question: "What is the primary purpose of batch processing in digital media?",
        options: [
            "To apply the same action to multiple files simultaneously",
            "To compress multiple files into a single archive",
            "To convert files between different formats",
            "To organize files into folders"
        ],
        correctAnswer: "To apply the same action to multiple files simultaneously",
        explanation: "Batch processing allows you to apply the same action or set of actions to multiple files at once, saving time and ensuring consistency. This is particularly useful for tasks like resizing, rotating, or converting multiple images."
    },
    {
        question: "How are analogous colors defined in color theory?",
        options: [
            "Colors that are adjacent to each other on the color wheel",
            "Colors that are opposite each other on the color wheel",
            "Colors that are evenly spaced on the color wheel",
            "Colors that are in the same family but different shades"
        ],
        correctAnswer: "Colors that are adjacent to each other on the color wheel",
        explanation: "Analogous colors are groups of colors that are next to each other on the color wheel. They create harmonious and pleasing color schemes because they share similar undertones and work well together in design."
    },
    {
        question: "What is the most effective tool for changing the color of an object in an image?",
        options: [
            "Hue & Saturation adjustment",
            "Brightness & Contrast adjustment",
            "Sharpen filter",
            "Blur filter"
        ],
        correctAnswer: "Hue & Saturation adjustment",
        explanation: "Hue & Saturation adjustment is specifically designed to modify colors in an image. It allows you to change the hue (color) while maintaining the original texture and lighting of the object."
    },
    {
        question: "What is the main characteristic of lossy compression?",
        options: [
            "It permanently removes some image data to reduce file size",
            "It preserves all original image data",
            "It only works with black and white images",
            "It increases image quality while reducing file size"
        ],
        correctAnswer: "It permanently removes some image data to reduce file size",
        explanation: "Lossy compression reduces file size by permanently removing data that is less noticeable to human perception. While this results in some quality loss, it allows for significantly smaller file sizes."
    },
    {
        question: "What happens when you try to enlarge a raster image?",
        options: [
            "The image becomes pixelated or blurry",
            "The image maintains its original quality",
            "The image automatically converts to vector format",
            "The image quality improves"
        ],
        correctAnswer: "The image becomes pixelated or blurry",
        explanation: "Raster images are made of a fixed number of pixels. When enlarged, the software must create new pixels through interpolation, which results in a loss of quality and can make the image appear pixelated or blurry."
    },
    {
        question: "What is the key advantage of RAW image files?",
        options: [
            "They contain unprocessed data from the camera sensor",
            "They have smaller file sizes than JPEG",
            "They are easier to edit than other formats",
            "They are compatible with all image editing software"
        ],
        correctAnswer: "They contain unprocessed data from the camera sensor",
        explanation: "RAW files contain all the original, unprocessed data from the camera's sensor. This gives photographers maximum control during post-processing, allowing for better adjustments to exposure, white balance, and other settings."
    },
    {
        question: "What is the first step in batch processing?",
        options: [
            "Define the sequence of actions to be applied",
            "Select the files to be processed",
            "Open the files in the editing software",
            "Save the processed files"
        ],
        correctAnswer: "Define the sequence of actions to be applied",
        explanation: "Before applying batch processing, you must first define or record the sequence of actions that will be applied to the files. This creates a template of operations that can then be consistently applied to all selected files."
    },
    {
        question: "Which color adjustment tool is best for changing the color of objects in an image?",
        options: [
            "Hue and Saturation",
            "Brightness and Contrast",
            "Levels",
            "Curves"
        ],
        correctAnswer: "Hue and Saturation",
        explanation: "Hue and Saturation adjustments allow you to change specific colors in an image while maintaining the original texture and lighting. This makes it ideal for changing object colors, like turning green strawberries red."
    },
    {
        question: "What are complementary colors in color theory?",
        options: [
            "Colors that are opposite each other on the color wheel",
            "Colors that are next to each other on the color wheel",
            "Colors that are in the same family",
            "Colors that are evenly spaced on the color wheel"
        ],
        correctAnswer: "Colors that are opposite each other on the color wheel",
        explanation: "Complementary colors are pairs of colors that are positioned opposite each other on the color wheel. When placed together, they create maximum contrast and can make each other appear more vibrant."
    },
    {
        question: "Which file format is commonly used for simple animations on the web?",
        options: [
            "GIF",
            "JPEG",
            "PNG",
            "BMP"
        ],
        correctAnswer: "GIF",
        explanation: "GIF (Graphics Interchange Format) is widely used for simple animations on the web. It supports multiple frames that can be displayed in sequence to create animation, along with transparency support."
    },
    {
        question: "What is the primary difference between vector and raster graphics?",
        options: [
            "Vector graphics use mathematical equations while raster graphics use pixels",
            "Vector graphics are always smaller in file size than raster graphics",
            "Vector graphics can only be used for simple shapes",
            "Raster graphics are always higher quality than vector graphics"
        ],
        correctAnswer: "Vector graphics use mathematical equations while raster graphics use pixels",
        explanation: "Vector graphics are created using mathematical equations to define shapes, lines, and curves, allowing them to be scaled infinitely without quality loss. Raster graphics are made up of pixels, which can become pixelated when scaled up."
    },
    {
        question: "Which color model is best suited for web design?",
        options: [
            "RGB",
            "CMYK",
            "Pantone",
            "Grayscale"
        ],
        correctAnswer: "RGB",
        explanation: "RGB (Red, Green, Blue) is the color model used for digital displays and web design. It's an additive color model that works with light, making it ideal for screens and digital media."
    },
    {
        question: "What is the purpose of a color profile in digital imaging?",
        options: [
            "To ensure consistent color reproduction across different devices",
            "To reduce file size",
            "To add special effects to images",
            "To convert images to black and white"
        ],
        correctAnswer: "To ensure consistent color reproduction across different devices",
        explanation: "Color profiles help maintain consistent color appearance across different devices and software. They define how colors should be interpreted and displayed, ensuring that what you see on one device matches what you see on another."
    },
    {
        question: "Which file format is best for preserving transparency in web graphics?",
        options: [
            "PNG",
            "JPEG",
            "BMP",
            "TIFF"
        ],
        correctAnswer: "PNG",
        explanation: "PNG (Portable Network Graphics) supports alpha channel transparency, making it ideal for web graphics that need to be displayed over different colored backgrounds. It also uses lossless compression, preserving image quality."
    },
    {
        question: "What is the purpose of dithering in digital imaging?",
        options: [
            "To create the illusion of more colors than are actually available",
            "To reduce file size",
            "To increase image resolution",
            "To add special effects"
        ],
        correctAnswer: "To create the illusion of more colors than are actually available",
        explanation: "Dithering is a technique that creates the appearance of additional colors by arranging pixels of different colors in patterns. This is particularly useful when working with limited color palettes or when reducing the number of colors in an image."
    },
    {
        question: "Which of these is a characteristic of lossless compression?",
        options: [
            "The original data can be perfectly reconstructed",
            "It always results in smaller file sizes than lossy compression",
            "It works best with photographic images",
            "It permanently removes some image data"
        ],
        correctAnswer: "The original data can be perfectly reconstructed",
        explanation: "Lossless compression reduces file size without losing any data. The original file can be perfectly reconstructed from the compressed version, making it ideal for images where quality is critical."
    },
    {
        question: "What is the purpose of an alpha channel in digital imaging?",
        options: [
            "To control the transparency of pixels",
            "To store color information",
            "To compress the image",
            "To enhance image quality"
        ],
        correctAnswer: "To control the transparency of pixels",
        explanation: "An alpha channel is an additional channel that controls the transparency of each pixel in an image. It allows for varying levels of transparency, from completely opaque to completely transparent."
    },
    {
        question: "Which of these is NOT a common use for vector graphics?",
        options: [
            "Storing photographic images",
            "Creating logos",
            "Designing icons",
            "Making illustrations"
        ],
        correctAnswer: "Storing photographic images",
        explanation: "Vector graphics are not suitable for storing photographic images because they are made up of mathematical equations and cannot effectively represent the complex variations in color and detail found in photographs."
    },
    {
        question: "What is the purpose of color depth in digital imaging?",
        options: [
            "To determine how many colors can be displayed",
            "To measure the physical size of the image",
            "To calculate the file size",
            "To set the image resolution"
        ],
        correctAnswer: "To determine how many colors can be displayed",
        explanation: "Color depth (or bit depth) determines how many colors can be displayed in an image. Higher color depths allow for more colors and smoother color transitions, resulting in more realistic images."
    },
    {
        question: "Which of these is a characteristic of the CMYK color model?",
        options: [
            "It is subtractive and used for printing",
            "It is additive and used for screens",
            "It uses only three colors",
            "It is used for web design"
        ],
        correctAnswer: "It is subtractive and used for printing",
        explanation: "CMYK (Cyan, Magenta, Yellow, Key/Black) is a subtractive color model used in printing. It works by subtracting light from white, which is why it's called subtractive. It's the standard color model for most printing processes."
    },
    {
        question: "What is the purpose of image resolution?",
        options: [
            "To determine the number of pixels in an image",
            "To set the color depth",
            "To control file size",
            "To adjust image brightness"
        ],
        correctAnswer: "To determine the number of pixels in an image",
        explanation: "Image resolution refers to the number of pixels in an image, typically expressed as width × height. Higher resolution means more pixels, which generally results in better image quality but larger file sizes."
    },
    {
        question: "Which of these is a characteristic of the RGB color model?",
        options: [
            "It is additive and used for screens",
            "It is subtractive and used for printing",
            "It uses only two colors",
            "It is used for black and white images"
        ],
        correctAnswer: "It is additive and used for screens",
        explanation: "RGB (Red, Green, Blue) is an additive color model used for digital displays. It works by adding different amounts of red, green, and blue light to create colors, which is why it's called additive."
    },
    {
        question: "What is the purpose of image compression?",
        options: [
            "To reduce file size while maintaining acceptable quality",
            "To increase image resolution",
            "To add special effects",
            "To convert between color models"
        ],
        correctAnswer: "To reduce file size while maintaining acceptable quality",
        explanation: "Image compression reduces file size by removing redundant or unnecessary data. This makes images easier to store and transmit while trying to maintain acceptable visual quality."
    },
    {
        question: "Which of these is a characteristic of lossy compression?",
        options: [
            "It permanently removes some image data",
            "It always results in larger file sizes than lossless compression",
            "It works best with text and line art",
            "It can perfectly reconstruct the original image"
        ],
        correctAnswer: "It permanently removes some image data",
        explanation: "Lossy compression reduces file size by permanently removing data that is less noticeable to human perception. While this results in some quality loss, it allows for significantly smaller file sizes."
    },
    {
        question: "What is the purpose of color gamut in digital imaging?",
        options: [
            "To define the range of colors that can be displayed or printed",
            "To compress image files",
            "To adjust image brightness",
            "To convert between file formats"
        ],
        correctAnswer: "To define the range of colors that can be displayed or printed",
        explanation: "Color gamut refers to the complete range of colors that can be displayed by a device or reproduced in a color space. Different devices and color spaces have different gamuts, which is why colors might look different on different screens or in print."
    },
    {
        question: "Which of these is a characteristic of vector graphics?",
        options: [
            "They can be scaled without losing quality",
            "They are always smaller in file size than raster graphics",
            "They are best for storing photographs",
            "They use pixels to store information"
        ],
        correctAnswer: "They can be scaled without losing quality",
        explanation: "Vector graphics use mathematical equations to define shapes and lines, allowing them to be scaled to any size without losing quality. This makes them ideal for logos, icons, and illustrations that need to be displayed at various sizes."
    },
    {
        question: "What is the purpose of image metadata?",
        options: [
            "To store additional information about the image",
            "To compress the image file",
            "To enhance image quality",
            "To convert the image format"
        ],
        correctAnswer: "To store additional information about the image",
        explanation: "Image metadata stores additional information about the image, such as camera settings, date and time, location, copyright information, and other descriptive data. This information helps organize and manage image files."
    },
    {
        question: "Which of these is a characteristic of the PNG file format?",
        options: [
            "It supports transparency and uses lossless compression",
            "It is always smaller in file size than JPEG",
            "It is best for photographic images",
            "It uses lossy compression"
        ],
        correctAnswer: "It supports transparency and uses lossless compression",
        explanation: "PNG (Portable Network Graphics) supports transparency through an alpha channel and uses lossless compression, meaning it preserves all image data. This makes it ideal for graphics that need transparency and where quality is important."
    },
    {
        question: "What is the purpose of color calibration?",
        options: [
            "To ensure consistent color reproduction across devices",
            "To reduce file size",
            "To add special effects",
            "To convert between file formats"
        ],
        correctAnswer: "To ensure consistent color reproduction across devices",
        explanation: "Color calibration adjusts the color output of devices to match a standard, ensuring that colors appear consistent across different displays and printers. This is crucial for professional work where color accuracy is important."
    },
    {
        question: "Which of these is a characteristic of the JPEG file format?",
        options: [
            "It uses lossy compression and is best for photographs",
            "It supports transparency",
            "It uses lossless compression",
            "It is best for text and line art"
        ],
        correctAnswer: "It uses lossy compression and is best for photographs",
        explanation: "JPEG (Joint Photographic Experts Group) uses lossy compression and is optimized for photographic images. It achieves smaller file sizes by removing data that is less noticeable to human perception, making it ideal for web use."
    },
    {
        question: "What is the purpose of image resolution in printing?",
        options: [
            "To determine the quality and detail of the printed image",
            "To set the color depth",
            "To control file size",
            "To adjust image brightness"
        ],
        correctAnswer: "To determine the quality and detail of the printed image",
        explanation: "In printing, resolution (typically measured in DPI - dots per inch) determines how detailed the printed image will be. Higher resolution means more dots per inch, resulting in sharper, more detailed prints."
    },
    {
        question: "Which of these is a characteristic of the TIFF file format?",
        options: [
            "It supports both lossless compression and layers",
            "It is always smaller in file size than JPEG",
            "It is best for web use",
            "It only supports black and white images"
        ],
        correctAnswer: "It supports both lossless compression and layers",
        explanation: "TIFF (Tagged Image File Format) is a flexible format that supports both lossless compression and layers. It's widely used in professional photography and publishing where high quality and editing flexibility are important."
    },
    {
        question: "What is the purpose of color management in digital imaging?",
        options: [
            "To maintain consistent color appearance across different devices",
            "To reduce file size",
            "To add special effects",
            "To convert between file formats"
        ],
        correctAnswer: "To maintain consistent color appearance across different devices",
        explanation: "Color management ensures that colors appear consistent across different devices and media. It uses color profiles and calibration to maintain color accuracy from capture through editing to final output."
    },
    {
        question: "Which of these is a characteristic of the GIF file format?",
        options: [
            "It supports simple animations and transparency",
            "It is best for photographic images",
            "It uses lossless compression",
            "It supports millions of colors"
        ],
        correctAnswer: "It supports simple animations and transparency",
        explanation: "GIF (Graphics Interchange Format) supports simple animations through multiple frames and basic transparency. It's limited to 256 colors, making it best for simple graphics and animations rather than photographs."
    },
    {
        question: "What is the purpose of image optimization?",
        options: [
            "To balance file size and image quality for web use",
            "To increase image resolution",
            "To add special effects",
            "To convert between color models"
        ],
        correctAnswer: "To balance file size and image quality for web use",
        explanation: "Image optimization reduces file size while maintaining acceptable visual quality, making images load faster on websites. It involves choosing the right format, compression settings, and dimensions for the intended use."
    },
    {
        question: "Which of these is a characteristic of the BMP file format?",
        options: [
            "It is uncompressed and stores raw pixel data",
            "It is always smaller in file size than JPEG",
            "It supports transparency",
            "It is best for web use"
        ],
        correctAnswer: "It is uncompressed and stores raw pixel data",
        explanation: "BMP (Bitmap) is an uncompressed format that stores raw pixel data. This results in large file sizes but preserves all image data. It's rarely used for web or storage due to its large size."
    },
    {
        question: "What is the purpose of image resampling?",
        options: [
            "To change the number of pixels in an image",
            "To adjust color balance",
            "To add special effects",
            "To convert between file formats"
        ],
        correctAnswer: "To change the number of pixels in an image",
        explanation: "Image resampling changes the number of pixels in an image, either increasing (upsampling) or decreasing (downsampling) the resolution. This is necessary when changing image dimensions or resolution."
    },
    {
        question: "Which of these is a characteristic of the SVG file format?",
        options: [
            "It is a vector format that scales without quality loss",
            "It is always smaller than JPEG",
            "It doesn't support transparency",
            "It is only for photographs"
        ],
        correctAnswer: "It is a vector format that scales without quality loss",
        explanation: "SVG (Scalable Vector Graphics) is a vector format that can be scaled to any size without losing quality. It's ideal for logos, icons, and web graphics that need to be responsive."
    },
    {
        question: "What is the purpose of image masking?",
        options: [
            "To selectively apply effects or adjustments to specific areas",
            "To reduce file size",
            "To add special effects",
            "To convert between file formats"
        ],
        correctAnswer: "To selectively apply effects or adjustments to specific areas",
        explanation: "Image masking allows you to selectively apply effects or adjustments to specific areas of an image while protecting other areas. This is essential for non-destructive editing and complex image manipulations."
    },
    {
        question: "Which of these is a characteristic of the WebP file format?",
        options: [
            "It provides superior compression for web images",
            "It is always larger than JPEG",
            "It doesn't support transparency",
            "It is only for print use"
        ],
        correctAnswer: "It provides superior compression for web images",
        explanation: "WebP is a modern image format that provides superior compression for web images. It supports both lossy and lossless compression, transparency, and animation, making it ideal for web use."
    },
    {
        question: "What is the purpose of image liquify?",
        options: [
            "To push, pull, and distort parts of an image",
            "To reduce file size",
            "To add special effects",
            "To convert between color models"
        ],
        correctAnswer: "To push, pull, and distort parts of an image",
        explanation: "The liquify tool allows you to push, pull, and distort parts of an image. It's useful for subtle adjustments to facial features, body shapes, or creating artistic distortions."
    },
    {
        question: "What is the purpose of image compositing?",
        options: [
            "To combine multiple images into a single cohesive image",
            "To reduce file size",
            "To add special effects",
            "To convert between color models"
        ],
        correctAnswer: "To combine multiple images into a single cohesive image",
        explanation: "Image compositing involves combining multiple images into a single cohesive image. This technique is used in photo manipulation, digital art, and professional photography to create complex scenes."
    },
    {
        question: "Which of these is a characteristic of the TIFF file format?",
        options: [
            "It supports multiple layers and high-quality compression",
            "It is always smaller than JPEG",
            "It doesn't support transparency",
            "It is only for web use"
        ],
        correctAnswer: "It supports multiple layers and high-quality compression",
        explanation: "TIFF (Tagged Image File Format) supports multiple layers and high-quality compression. It's widely used in professional photography and publishing for its ability to maintain image quality."
    },
    {
        question: "What is the purpose of image dithering?",
        options: [
            "To create the illusion of more colors in limited color spaces",
            "To reduce file size",
            "To add special effects",
            "To convert between file formats"
        ],
        correctAnswer: "To create the illusion of more colors in limited color spaces",
        explanation: "Dithering creates the illusion of more colors in limited color spaces by using patterns of available colors. This technique is useful when working with limited color palettes or when reducing image color depth."
    },
    {
        question: "Which of these is a characteristic of the RAW file format?",
        options: [
            "It contains unprocessed data directly from the camera sensor",
            "It is always smaller than JPEG",
            "It doesn't support metadata",
            "It is only for web use"
        ],
        correctAnswer: "It contains unprocessed data directly from the camera sensor",
        explanation: "RAW files contain unprocessed data directly from the camera sensor. This gives photographers maximum control over the final image, allowing for extensive post-processing without quality loss."
    },
    {
        question: "What is the purpose of image cloning?",
        options: [
            "To copy and paste parts of an image to cover or replace areas",
            "To reduce file size",
            "To add special effects",
            "To convert between color models"
        ],
        correctAnswer: "To copy and paste parts of an image to cover or replace areas",
        explanation: "Image cloning allows you to copy and paste parts of an image to cover or replace areas. This is useful for removing unwanted elements or duplicating parts of an image."
    },
    {
        question: "Which of these is a characteristic of the BMP file format?",
        options: [
            "It is an uncompressed raster format that maintains original quality",
            "It is always smaller than JPEG",
            "It doesn't support transparency",
            "It is only for web use"
        ],
        correctAnswer: "It is an uncompressed raster format that maintains original quality",
        explanation: "BMP (Bitmap) is an uncompressed raster format that maintains original image quality. However, this comes at the cost of larger file sizes compared to compressed formats."
    },
    {
        question: "What is the purpose of image blending modes?",
        options: [
            "To control how layers interact with each other",
            "To reduce file size",
            "To add special effects",
            "To convert between file formats"
        ],
        correctAnswer: "To control how layers interact with each other",
        explanation: "Blending modes control how layers interact with each other in an image. They determine how the colors of one layer blend with the colors of the layers below it, creating various visual effects."
    },
    {
        question: "Which of these is a characteristic of the GIF file format?",
        options: [
            "It supports animation and transparency with limited colors",
            "It is always smaller than JPEG",
            "It doesn't support transparency",
            "It is only for photographs"
        ],
        correctAnswer: "It supports animation and transparency with limited colors",
        explanation: "GIF (Graphics Interchange Format) supports animation and transparency but is limited to 256 colors. It's commonly used for simple animations and graphics on the web."
    },
    {
        question: "What is the purpose of image warping?",
        options: [
            "To distort or transform parts of an image",
            "To reduce file size",
            "To add special effects",
            "To convert between color models"
        ],
        correctAnswer: "To distort or transform parts of an image",
        explanation: "Image warping allows you to distort or transform parts of an image. This can be used for creative effects, perspective correction, or to fit images into specific shapes or spaces."
    },
    {
        question: "Which of these is a characteristic of the PNG file format?",
        options: [
            "It supports transparency and lossless compression",
            "It is always smaller than JPEG",
            "It doesn't support transparency",
            "It is only for photographs"
        ],
        correctAnswer: "It supports transparency and lossless compression",
        explanation: "PNG (Portable Network Graphics) supports transparency and lossless compression. It's ideal for web graphics, logos, and images that require transparency or need to maintain quality."
    },
    {
        question: "What is the purpose of image healing?",
        options: [
            "To seamlessly remove unwanted elements from an image",
            "To reduce file size",
            "To add special effects",
            "To convert between file formats"
        ],
        correctAnswer: "To seamlessly remove unwanted elements from an image",
        explanation: "Image healing tools seamlessly remove unwanted elements from an image by sampling surrounding areas and blending them naturally. This is useful for removing blemishes, objects, or imperfections."
    },
    {
        question: "Which of these is a characteristic of the WebP file format?",
        options: [
            "It provides superior compression for web images",
            "It is always larger than JPEG",
            "It doesn't support transparency",
            "It is only for print use"
        ],
        correctAnswer: "It provides superior compression for web images",
        explanation: "WebP is a modern image format that provides superior compression for web images. It supports both lossy and lossless compression, transparency, and animation, making it ideal for web use."
    },
    {
        question: "What is the purpose of image liquify?",
        options: [
            "To push, pull, and distort parts of an image",
            "To reduce file size",
            "To add special effects",
            "To convert between color models"
        ],
        correctAnswer: "To push, pull, and distort parts of an image",
        explanation: "The liquify tool allows you to push, pull, and distort parts of an image. It's useful for subtle adjustments to facial features, body shapes, or creating artistic distortions."
    },
    {
        question: "What is the purpose of image color grading?",
        options: [
            "To create a specific mood or style through color adjustments",
            "To reduce file size",
            "To add special effects",
            "To convert between file formats"
        ],
        correctAnswer: "To create a specific mood or style through color adjustments",
        explanation: "Color grading involves adjusting colors to create a specific mood or style. It's commonly used in photography and film to establish visual consistency and enhance the emotional impact of images."
    },
    {
        question: "Which of these is a characteristic of the HEIF file format?",
        options: [
            "It provides better compression than JPEG while maintaining quality",
            "It is always larger than JPEG",
            "It doesn't support transparency",
            "It is only for black and white images"
        ],
        correctAnswer: "It provides better compression than JPEG while maintaining quality",
        explanation: "HEIF (High Efficiency Image Format) provides better compression than JPEG while maintaining similar or better quality. It's becoming increasingly popular in modern devices and applications."
    },
    {
        question: "What is the purpose of image layering?",
        options: [
            "To work with different elements of an image independently",
            "To reduce file size",
            "To add special effects",
            "To convert between color models"
        ],
        correctAnswer: "To work with different elements of an image independently",
        explanation: "Image layering allows you to work with different elements of an image independently. Each layer can be edited, moved, or modified without affecting other layers, making complex edits possible."
    },
    {
        question: "Which of these is a characteristic of the AVIF file format?",
        options: [
            "It provides better compression than JPEG and WebP",
            "It is always larger than JPEG",
            "It doesn't support transparency",
            "It is only for black and white images"
        ],
        correctAnswer: "It provides better compression than JPEG and WebP",
        explanation: "AVIF (AV1 Image File Format) is a modern image format that provides superior compression compared to JPEG and WebP. It's designed to create smaller, higher quality images for web use."
    },
    {
        question: "What is the purpose of image retouching?",
        options: [
            "To improve or modify the appearance of an image",
            "To reduce file size",
            "To add special effects",
            "To convert between file formats"
        ],
        correctAnswer: "To improve or modify the appearance of an image",
        explanation: "Image retouching involves improving or modifying the appearance of an image. This can include removing blemishes, adjusting colors, enhancing details, or making other improvements to the image."
    },
    {
        question: "Which of these is a characteristic of the JPEG 2000 format?",
        options: [
            "It supports both lossy and lossless compression",
            "It is always larger than JPEG",
            "It doesn't support transparency",
            "It is only for vector graphics"
        ],
        correctAnswer: "It supports both lossy and lossless compression",
        explanation: "JPEG 2000 is an image compression standard that supports both lossy and lossless compression. It offers better compression and quality than traditional JPEG, but has limited support in web browsers."
    },
    {
        question: "What is the purpose of image perspective correction?",
        options: [
            "To fix distorted angles and make lines appear straight",
            "To reduce file size",
            "To add special effects",
            "To convert between color models"
        ],
        correctAnswer: "To fix distorted angles and make lines appear straight",
        explanation: "Perspective correction fixes distorted angles and makes lines appear straight. This is useful for architectural photography or when shooting from angles that cause unwanted distortion."
    },
    {
        question: "Which of these is a characteristic of the ICO file format?",
        options: [
            "It is used for website favicons and Windows icons",
            "It is always larger than JPEG",
            "It doesn't support transparency",
            "It is only for photographs"
        ],
        correctAnswer: "It is used for website favicons and Windows icons",
        explanation: "ICO (Icon) is a file format used for website favicons and Windows icons. It can contain multiple sizes of the same image in a single file, making it ideal for icons that need to be displayed at different sizes."
    },
    {
        question: "What is the purpose of image color space conversion?",
        options: [
            "To convert between different color models for specific purposes",
            "To reduce file size",
            "To add special effects",
            "To convert between file formats"
        ],
        correctAnswer: "To convert between different color models for specific purposes",
        explanation: "Color space conversion involves converting between different color models (like RGB, CMYK, or LAB) for specific purposes. This is important for ensuring accurate color reproduction across different devices and media."
    },
    {
        question: "Which of these is a characteristic of the TGA file format?",
        options: [
            "It supports transparency and was popular in early computer graphics",
            "It is always smaller than JPEG",
            "It doesn't support transparency",
            "It is only for web use"
        ],
        correctAnswer: "It supports transparency and was popular in early computer graphics",
        explanation: "TGA (Truevision Graphics Adapter) is an image file format that supports transparency and was popular in early computer graphics. It's still used in some video game development and 3D rendering applications."
    },
    {
        question: "What is the purpose of image batch processing?",
        options: [
            "To apply the same edits to multiple images automatically",
            "To reduce file size",
            "To add special effects",
            "To convert between color models"
        ],
        correctAnswer: "To apply the same edits to multiple images automatically",
        explanation: "Batch processing allows you to apply the same edits to multiple images automatically. This saves time when working with large numbers of images that need similar adjustments."
    },
    {
        question: "Which of these is a characteristic of the XCF file format?",
        options: [
            "It is GIMP's native format that supports layers and paths",
            "It is always smaller than JPEG",
            "It doesn't support transparency",
            "It is only for vector graphics"
        ],
        correctAnswer: "It is GIMP's native format that supports layers and paths",
        explanation: "XCF is GIMP's native format that supports layers, paths, and other advanced features. It's similar to Photoshop's PSD format but is open-source and free to use."
    },
    {
        question: "What is the purpose of image metadata?",
        options: [
            "To store additional information about the image",
            "To reduce file size",
            "To add special effects",
            "To convert between file formats"
        ],
        correctAnswer: "To store additional information about the image",
        explanation: "Image metadata stores additional information about the image, such as camera settings, copyright information, and editing history. This information can be useful for organization and copyright protection."
    },
    {
        question: "Which of these is a characteristic of the PICT file format?",
        options: [
            "It was Apple's native format for Mac OS Classic",
            "It is always smaller than JPEG",
            "It doesn't support transparency",
            "It is only for web use"
        ],
        correctAnswer: "It was Apple's native format for Mac OS Classic",
        explanation: "PICT was Apple's native format for Mac OS Classic. It could contain both vector and raster data, but has been largely replaced by more modern formats like PDF and PNG."
    },
    {
        question: "What is the purpose of image color management?",
        options: [
            "To ensure consistent color reproduction across different devices",
            "To reduce file size",
            "To add special effects",
            "To convert between file formats"
        ],
        correctAnswer: "To ensure consistent color reproduction across different devices",
        explanation: "Color management ensures consistent color reproduction across different devices. It uses color profiles and calibration to maintain color accuracy from capture to display to print."
    },
    {
        question: "What is the purpose of image HDR (High Dynamic Range)?",
        options: [
            "To capture and display a wider range of brightness levels",
            "To reduce file size",
            "To add special effects",
            "To convert between file formats"
        ],
        correctAnswer: "To capture and display a wider range of brightness levels",
        explanation: "HDR (High Dynamic Range) captures and displays a wider range of brightness levels than standard images. This allows for more detail in both shadows and highlights, creating more realistic and visually striking images."
    },
    {
        question: "Which of these is a characteristic of the OpenEXR file format?",
        options: [
            "It supports high dynamic range and is used in visual effects",
            "It is always smaller than JPEG",
            "It doesn't support transparency",
            "It is only for web use"
        ],
        correctAnswer: "It supports high dynamic range and is used in visual effects",
        explanation: "OpenEXR is a high dynamic range image format used in visual effects and animation. It supports multiple color channels, high bit depth, and is designed for professional visual effects work."
    },
    {
        question: "What is the purpose of image focus stacking?",
        options: [
            "To combine multiple images with different focus points for greater depth of field",
            "To reduce file size",
            "To add special effects",
            "To convert between color models"
        ],
        correctAnswer: "To combine multiple images with different focus points for greater depth of field",
        explanation: "Focus stacking combines multiple images with different focus points to create a single image with greater depth of field. This is particularly useful in macro photography where achieving sufficient depth of field is challenging."
    },
    {
        question: "Which of these is a characteristic of the CR2 file format?",
        options: [
            "It is Canon's RAW format for digital cameras",
            "It is always smaller than JPEG",
            "It doesn't support metadata",
            "It is only for web use"
        ],
        correctAnswer: "It is Canon's RAW format for digital cameras",
        explanation: "CR2 is Canon's RAW format for digital cameras. It contains unprocessed sensor data, allowing for maximum flexibility in post-processing while maintaining high image quality."
    },
    {
        question: "What is the purpose of image panorama stitching?",
        options: [
            "To combine multiple images into a wide-angle view",
            "To reduce file size",
            "To add special effects",
            "To convert between file formats"
        ],
        correctAnswer: "To combine multiple images into a wide-angle view",
        explanation: "Panorama stitching combines multiple images into a wide-angle view. This technique is used to create images that capture a wider field of view than possible with a single shot."
    },
    {
        question: "Which of these is a characteristic of the NEF file format?",
        options: [
            "It is Nikon's RAW format for digital cameras",
            "It is always smaller than JPEG",
            "It doesn't support metadata",
            "It is only for web use"
        ],
        correctAnswer: "It is Nikon's RAW format for digital cameras",
        explanation: "NEF (Nikon Electronic Format) is Nikon's RAW format for digital cameras. It contains unprocessed sensor data, allowing for maximum flexibility in post-processing while maintaining high image quality."
    },
    {
        question: "What is the purpose of image time-lapse photography?",
        options: [
            "To capture changes over time in a compressed video format",
            "To reduce file size",
            "To add special effects",
            "To convert between color models"
        ],
        correctAnswer: "To capture changes over time in a compressed video format",
        explanation: "Time-lapse photography captures changes over time in a compressed video format. It's used to show processes that happen too slowly to be easily observed in real-time, such as plant growth or cloud movement."
    },
    {
        question: "Which of these is a characteristic of the ARW file format?",
        options: [
            "It is Sony's RAW format for digital cameras",
            "It is always smaller than JPEG",
            "It doesn't support metadata",
            "It is only for web use"
        ],
        correctAnswer: "It is Sony's RAW format for digital cameras",
        explanation: "ARW is Sony's RAW format for digital cameras. It contains unprocessed sensor data, allowing for maximum flexibility in post-processing while maintaining high image quality."
    },
    {
        question: "What is the purpose of image bracketing?",
        options: [
            "To capture multiple exposures of the same scene",
            "To reduce file size",
            "To add special effects",
            "To convert between file formats"
        ],
        correctAnswer: "To capture multiple exposures of the same scene",
        explanation: "Bracketing captures multiple exposures of the same scene. This technique is used for HDR photography, ensuring proper exposure in challenging lighting conditions, or creating a safety net for important shots."
    },
    {
        question: "Which of these is a characteristic of the RAF file format?",
        options: [
            "It is Fujifilm's RAW format for digital cameras",
            "It is always smaller than JPEG",
            "It doesn't support metadata",
            "It is only for web use"
        ],
        correctAnswer: "It is Fujifilm's RAW format for digital cameras",
        explanation: "RAF is Fujifilm's RAW format for digital cameras. It contains unprocessed sensor data, allowing for maximum flexibility in post-processing while maintaining high image quality."
    },
    {
        question: "What is the purpose of image long exposure photography?",
        options: [
            "To capture motion over an extended period",
            "To reduce file size",
            "To add special effects",
            "To convert between color models"
        ],
        correctAnswer: "To capture motion over an extended period",
        explanation: "Long exposure photography captures motion over an extended period. This technique is used to create effects like light trails, smooth water, or star trails, and requires careful control of camera settings."
    },
    {
        question: "Which of these is a characteristic of the ORF file format?",
        options: [
            "It is Olympus's RAW format for digital cameras",
            "It is always smaller than JPEG",
            "It doesn't support metadata",
            "It is only for web use"
        ],
        correctAnswer: "It is Olympus's RAW format for digital cameras",
        explanation: "ORF is Olympus's RAW format for digital cameras. It contains unprocessed sensor data, allowing for maximum flexibility in post-processing while maintaining high image quality."
    },
    {
        question: "What is the purpose of image high-speed photography?",
        options: [
            "To capture fast-moving subjects with minimal motion blur",
            "To reduce file size",
            "To add special effects",
            "To convert between file formats"
        ],
        correctAnswer: "To capture fast-moving subjects with minimal motion blur",
        explanation: "High-speed photography captures fast-moving subjects with minimal motion blur. This technique requires specialized equipment and precise timing to freeze action that happens too quickly for the human eye to see."
    },
    {
        question: "Which of these is a characteristic of the RW2 file format?",
        options: [
            "It is Panasonic's RAW format for digital cameras",
            "It is always smaller than JPEG",
            "It doesn't support metadata",
            "It is only for web use"
        ],
        correctAnswer: "It is Panasonic's RAW format for digital cameras",
        explanation: "RW2 is Panasonic's RAW format for digital cameras. It contains unprocessed sensor data, allowing for maximum flexibility in post-processing while maintaining high image quality."
    },
    {
        question: "What is the purpose of image infrared photography?",
        options: [
            "To capture light beyond the visible spectrum",
            "To reduce file size",
            "To add special effects",
            "To convert between color models"
        ],
        correctAnswer: "To capture light beyond the visible spectrum",
        explanation: "Infrared photography captures light beyond the visible spectrum. This technique creates unique, ethereal images by recording infrared light that's invisible to the human eye, often requiring special equipment or filters."
    }
];

// Combine all questions
const allQuestions = [
    ...originalQuestions,
    ...additionalQuestions
]; 