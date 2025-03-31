// Function to include HTML content
async function includeHTML(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const content = await response.text();
        const element = document.getElementById(elementId);
        if (!element) {
            throw new Error(`Element with id "${elementId}" not found`);
        }
        element.innerHTML = content;
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
        // Add visible error message on the page
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = `<div class="alert alert-danger">Error loading component. Please try refreshing the page.</div>`;
        }
    }
}

// Load header and footer when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    includeHTML('header-placeholder', './components/header.html');
    includeHTML('footer-placeholder', './components/footer.html');
});
