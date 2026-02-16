window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    // Set a timeout of 1.5 seconds (1500ms)
    setTimeout(() => {
        loader.style.opacity = '0';
        
        // Wait for the opacity transition to finish before removing the element
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500); // 500ms matches the CSS transition time
        
    }, 1500);
});

// Smooth scrolling is handled by CSS, but we can add active state highlighting if needed in the future.
console.log("Portfolio loaded. Welcome!");
