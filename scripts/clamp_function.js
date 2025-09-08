// Interactive demo functionality
document.addEventListener('DOMContentLoaded', function() {
    const minInput = document.getElementById('min-val');
    const prefInput = document.getElementById('pref-val');
    const maxInput = document.getElementById('max-val');
    const demoText = document.getElementById('demo-text');
    const demoCode = document.getElementById('demo-code');
    const sizeIndicator = document.getElementById('size-indicator');
    
    function updateDemo() {
        const minVal = parseFloat(minInput.value);
        const prefVal = parseFloat(prefInput.value);
        const maxVal = parseFloat(maxInput.value);
        
        // Update the text style
        demoText.style.fontSize = `clamp(${minVal}rem, ${prefVal}vw, ${maxVal}rem)`;
        
        // Update the code display
        demoCode.textContent = `font-size: clamp(${minVal}rem, ${prefVal}vw, ${maxVal}rem)`;
        
        // Update the visualization (simplified for demo purposes)
        // This is just a visual representation, not an exact calculation
        const viewportWidth = window.innerWidth;
        const approximateSize = Math.min(maxVal, Math.max(minVal, (prefVal * viewportWidth / 100) / 16));
        const percentage = ((approximateSize - minVal) / (maxVal - minVal)) * 100;
        
        sizeIndicator.style.width = `${Math.min(100, Math.max(0, percentage))}%`;
        sizeIndicator.textContent = `≈${approximateSize.toFixed(2)}rem`;
    }
    
    // Add event listeners to inputs
    minInput.addEventListener('input', updateDemo);
    prefInput.addEventListener('input', updateDemo);
    maxInput.addEventListener('input', updateDemo);
    
    // Initial update
    updateDemo();
    
    // Update on window resize
    window.addEventListener('resize', updateDemo);
});