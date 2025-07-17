let allProjects = []
let msnry = null;
let swiper = null;

function loop2() {
    if (isElementInViewport2(document.querySelector('.gallery-wrapper'))) {
        const grid = document.querySelector('.grid');
        grid.classList.add('gridloaded');
        msnry.layout();
    }

    scroll(loop2);
}

loop2();

fetch('../../static/data/projects.json').then(response => response.json()).then(projects => {
    allProjects = projects;

    const grid = document.querySelector('.grid');

    projects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.id = project.id;

        const maxTechs = 3;
        const technos = project.technos;
        const technosAffichees = technos.slice(0, maxTechs);
        const reste = technos.length - maxTechs;

        item.innerHTML = `
        <h2>${project.title}</h2>
        <ul>
            ${technosAffichees.map(tech => `<li>${tech}</li>`).join('')}
            ${reste > 0 ? `<li>+${reste}</li>` : ''}
        </ul>
        <button class="overlay">🔍 Ouvrir</button>
        <img src="${project.image}" alt="">
        `;

        grid.appendChild(item);
    });

    imagesLoaded(grid, () => {
        msnry = new Masonry(grid, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            gutter: 5,
            percentPosition: true,
        });
    });

    // Recalcule Masonry au resize
    window.addEventListener('resize', () => {
        if (msnry) {
            msnry.layout();
        }
    });

    document.querySelector('.project-actions-close').addEventListener('click', () => {
        document.querySelector('.swiper-outer').style.display = 'none';
        document.body.classList.remove('no-scroll');
    });

    swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
    }
    });

    grid.addEventListener('click', (e) => {
        if (e.target.classList.contains('overlay')) {
            const id = e.target.closest('.grid-item').id;
            currentProject = allProjects.find(p => p.id === id);
            document.querySelector('.swiper-outer').style.display = 'block';
            document.querySelector('.swiper-header .project-title').textContent = currentProject.title;
            document.querySelector('.swiper-header .tech-list').innerHTML = currentProject.technos.map(tech => `<li>${tech}</li>`).join('');
            const swiperWrapper = document.querySelector('.swiper-wrapper');
            swiperWrapper.innerHTML = ''; // Clear previous slides
            currentProject.images.forEach(image => {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';
                slide.innerHTML = `
                <img src="${image.src}" alt="${currentProject.title}">
                <p>${image.caption}</p>
                `;
                swiperWrapper.appendChild(slide);
            });
            swiper.update();
            document.querySelector('.swiper-outer').style.display = 'inline';
            document.querySelector('.swiper-outer').scrollIntoView({ behavior: 'smooth' });

            document.body.classList.add('no-scroll');
        }
    });
}).catch(error => console.error('Erreur de chargement JSON :', error));