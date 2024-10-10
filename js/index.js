function updateScreenSize() {
    const width = window.innerWidth;
    const body = document.body;

    body.className = '';

    if (width <= 1024) {
        body.classList.add('mobile');
    } else {
        body.classList.add('pc');
    }

    document.querySelectorAll('.m').forEach(el => {
        el.style.display = width <= 1024 ? 'block' : 'none';
    });
    
    document.querySelectorAll('.p').forEach(el => {
        el.style.display = width > 1024 ? 'block' : 'none';
    });
}

window.addEventListener('load', updateScreenSize);
window.addEventListener('resize', updateScreenSize);
