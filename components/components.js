// Veriflo Shared Components Loader
(function() {
    // Load header
    const headerEl = document.getElementById('site-header');
    if (headerEl) {
        fetch('components/header.html')
            .then(response => response.text())
            .then(html => {
                headerEl.innerHTML = html;
                initDropdown();
            })
            .catch(err => console.error('Error loading header:', err));
    }

    // Load footer
    const footerEl = document.getElementById('site-footer');
    if (footerEl) {
        fetch('components/footer.html')
            .then(response => response.text())
            .then(html => {
                footerEl.innerHTML = html;
            })
            .catch(err => console.error('Error loading footer:', err));
    }

    // Initialize dropdown after header loads
    function initDropdown() {
        const dropdown = document.querySelector('.dropdown');
        const dropdownContent = document.querySelector('.dropdown-content');
        let timeoutId = null;

        if (dropdown && dropdownContent) {
            dropdown.addEventListener('mouseenter', function() {
                clearTimeout(timeoutId);
                dropdownContent.classList.add('show');
            });

            dropdown.addEventListener('mouseleave', function() {
                timeoutId = setTimeout(function() {
                    dropdownContent.classList.remove('show');
                }, 300);
            });

            dropdownContent.addEventListener('mouseenter', function() {
                clearTimeout(timeoutId);
            });

            dropdownContent.addEventListener('mouseleave', function() {
                timeoutId = setTimeout(function() {
                    dropdownContent.classList.remove('show');
                }, 300);
            });
        }
    }
})();
