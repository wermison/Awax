function menuToggle() {
    let menuArea = document.getElementById('menu-area');

    if (menuArea.style.display == 'flex') {
        menuArea.style.display = 'none';
    } else {
        menuArea.style.display = 'flex';
    }

}