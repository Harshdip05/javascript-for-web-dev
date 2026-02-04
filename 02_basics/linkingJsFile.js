// We place JavaScript before the closing </body> tag so the HTML content loads first. 
// This prevents JavaScript from blocking rendering and ensures the DOM is fully available when the script runs.

// JavaScript is render-blocking
// Placing scripts at the bottom:
        // Improves First Contentful Paint
        // Avoids white screens
        // Improves user experience

        
// <script src="script.js"></script>
// <script src="script.js" defer></script>
// <script src="script.js" async></script>
