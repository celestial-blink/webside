const clickEvents = {
    nav: function () {
        return this.element.querySelector('.header__nav');
    },
    openCloseMenu: function () {
        const nav = this.nav();
        nav.classList.toggle('header__nav--open');
    }
};

const handleClick = (event) => {
    const target = event.target;
    const element = target.tagName === "I" ? target.parentElement : target;
    const tagAcepted = element.dataset.action;
    if (element && tagAcepted) {
        const action = element.dataset.action;
        clickEvents.element = event.currentTarget;
        clickEvents[action]();
    } else {
        console.log('not acepted');
    }
}

const header = () => {
    const header = document.getElementById('header');
    header.addEventListener("click", handleClick);
}

export default header;