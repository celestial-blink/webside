import './styles/index.scss';
import header from '@views/partials/header.html';
import headerjs from '@scripts/header.js';

import hero from '@views/partials/hero.html';
import about from '@views/partials/about.html';
import skills from '@views/partials/skills.html';
import projects from '@views/partials/projects.html';
import footer from '@views/partials/footer.html';

window.addEventListener('DOMContentLoaded', () => {
    const elements = [header, hero, about, skills, projects, footer];
    document.body.innerHTML += elements.join('');
    headerjs();
});