document.addEventListener('DOMContentLoaded', () => {
    // 3D Tilt Effect for Hero Content
    const hero = document.querySelector('.hero');
    const content = document.querySelector('.hero-content');

    if (hero && content) {
        hero.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;

            content.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        hero.addEventListener('mouseenter', () => {
            content.style.transition = 'none';
        });

        hero.addEventListener('mouseleave', () => {
            content.style.transition = 'all 0.5s ease';
            content.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });
    }

    // Add click ripple effect to buttons
    const buttons = document.querySelectorAll('a, button');
    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;

            let ripples = document.createElement('span');
            ripples.classList.add('ripple');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);

            setTimeout(() => {
                ripples.remove();
            }, 1000);
        });
    });
});
