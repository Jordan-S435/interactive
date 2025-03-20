// Wait for the DOM to load completely
document.addEventListener('DOMContentLoaded', () => {
    // Array of words to display
    const words = [
      'Creative', 'Design', 'Innovation', 'Digital', 'Interactive',
      'Experience', 'Future', 'Technology', 'Immersive', 'Adaptive',
      'Motion', 'Explore', 'Dynamic', 'Engage', 'Transform',
      'Develop', 'Build', 'Create', 'Imagine', 'Inspire',
      'Connect', 'Evolve', 'Discover', 'Craft', 'Visualize',
      'Animate', 'Interface', 'Progress', 'Solution', 'Structure',
      'Element', 'System', 'Pattern', 'Balance', 'Contrast',
      'Harmony', 'Rhythm', 'Space', 'Form', 'Function',
      'Process', 'Method', 'Concept', 'Vision', 'Perspective'
    ];
  
    // Characters and symbols to use for animation
    const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
                             'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
                             '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', 
                             ':', '<', '>', ','];
  
    // Get the container for the words
    const wordContainer = document.querySelector('.word-container');
  
    // Generate words and add them to the container
    words.forEach(word => {
      const wordElement = document.createElement('div');
      wordElement.className = 'word hover-effect';
      
      // Split the word into spans for each character
      for (let i = 0; i < word.length; i++) {
        const charSpan = document.createElement('span');
        charSpan.className = 'char';
        charSpan.textContent = word[i];
        charSpan.dataset.original = word[i];
        wordElement.appendChild(charSpan);
      }
      
      wordContainer.appendChild(wordElement);
    });
  
    // Add animation to each word on hover
    const wordElements = document.querySelectorAll('.word');
    
    wordElements.forEach(wordElement => {
      wordElement.addEventListener('mouseenter', () => {
        animateWord(wordElement);
      });
    });
  
    function animateWord(wordElement) {
      const chars = wordElement.querySelectorAll('.char');
      
      // Stop any ongoing animations
      chars.forEach(char => {
        if (char.animation) {
          clearTimeout(char.animation);
        }
        char.style.opacity = 1;
        char.textContent = char.dataset.original;
      });
      
      // Animate each character
      chars.forEach((char, index) => {
        let iterations = 0;
        const maxIterations = 3;
        const delay = (index + 1) * 70; // 70ms delay between each character
        
        // Start animation after delay based on character position
        char.animation = setTimeout(() => {
          // Initially set opacity to 0
          char.style.opacity = 0;
          
          // Animation interval
          const interval = setInterval(() => {
            // Show random character
            if (iterations < maxIterations) {
              char.textContent = lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];
              char.style.opacity = 1;
              
              // On first iteration, set opacity to 0 after displaying random character
              if (iterations === 0) {
                setTimeout(() => {
                  char.style.opacity = 0;
                }, 30);
              }
              
              iterations++;
            } else {
              // Animation complete, return to original character
              char.textContent = char.dataset.original;
              char.style.opacity = 1;
              clearInterval(interval);
            }
          }, 40); // Speed of character change
        }, delay);
      });
    }
  
    document.head.appendChild(style);
  });