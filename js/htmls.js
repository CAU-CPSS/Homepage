// @ts-check

document.addEventListener("htmx:afterOnLoad", () => {
    const currentPath = window.location.pathname;
    document.querySelectorAll(".nav-link").forEach(link => link.closest(".nav-item")?.classList.remove("active"));

    /**
     * @type {HTMLElement?}
     */
    let nav_link = null;
    switch (currentPath) {
        case '/index.html':
            nav_link = document.getElementById("nav-about");
            break;
        case '/professor.html':
        case '/members.html':
        case '/alumni.html':
            nav_link = document.getElementById("nav-members");
            break;
        case '/publications.html':
            nav_link = document.getElementById("nav-publications");
            break;
        default:
            break;
    }
    console.log(nav_link);
    if (nav_link) {
        nav_link.parentElement?.classList.add("active");
    }

    const researchLink = document.getElementById("nav-research");
    
    if (researchLink) {
        researchLink.addEventListener("click", (event) => {
            event.preventDefault();
            const isIndexPage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";

            if (isIndexPage) {
                // Scroll to #cpss-research if on index.html
                document.getElementById("cpss-research")?.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Redirect to index.html and add #cpss-research as a hash
                window.location.href = "index.html#cpss-research";
            }
        });
    }
});