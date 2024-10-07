function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        // Check the current display property
        if (element.style.display === "none") {
            // Show the element
            element.style.display = "block";
        } else {
            // Hide the element
            element.style.display = "none";
        }
    } else {
        console.error(`Element with id "${elementId}" not found.`);
    }
}
