// Function to include HTML content
async function includeHTML(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        const content = await response.text();
        document.getElementById(elementId).innerHTML = content;
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
    }
}

// Load header and footer when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    includeHTML('header-placeholder', '/FE/components/header.html');
    includeHTML('footer-placeholder', '/FE/components/footer.html');
});
