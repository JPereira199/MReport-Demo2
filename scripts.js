document.addEventListener('DOMContentLoaded', function () {
    // Get all sidebar links
    const sidebarLinks = document.querySelectorAll('.btn-toggle-nav a');

    // Get the iframe where content will be loaded
    const contentFrame = document.getElementById('content-frame');

    // Add click event listener to each link
    sidebarLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior

            // Get the href attribute from the clicked link
            const url = link.getAttribute('href');

            // Set the iframe's src attribute to load the content
            contentFrame.setAttribute('src', url);
        });
    });
});
