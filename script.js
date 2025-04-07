// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Task 1: Change text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeableText = document.getElementById('changeable-text');
    
    changeTextBtn.addEventListener('click', function() {
        changeableText.textContent = "Text has been changed dynamically!";
        changeableText.style.color = "#e74c3c";
    });
    
    // Task 2: Modify CSS styles via JavaScript
    const changeStyleBtn = document.getElementById('change-style-btn');
    const styleTarget = document.getElementById('style-target');
    
    changeStyleBtn.addEventListener('click', function() {
        styleTarget.style.backgroundColor = "#2c3e50";
        styleTarget.style.color = "#ecf0f1";
        styleTarget.style.padding = "15px";
        styleTarget.style.borderRadius = "5px";
        styleTarget.textContent = "Styles have been modified via JavaScript!";
    });
    
    // Task 3: Add or remove an element when a button is clicked
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const dynamicElement = document.getElementById('dynamic-element');
    let elementVisible = true;
    
    toggleElementBtn.addEventListener('click', function() {
        if (elementVisible) {
            dynamicElement.style.display = "none";
            toggleElementBtn.textContent = "Show Element";
        } else {
            dynamicElement.style.display = "block";
            toggleElementBtn.textContent = "Hide Element";
        }
        elementVisible = !elementVisible;
    });
});