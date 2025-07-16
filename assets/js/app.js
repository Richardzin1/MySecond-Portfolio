const navLinks = document.querySelectorAll('#navbarContent .nav-link');
const navbarCollapse = document.getElementById('navbarContent');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Usa a API do Bootstrap para fechar o menu
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    });
});