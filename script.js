const showlevanSections = () => {
    const content = document.querySelector('.content');
    content.style.display = 'block'
}

const showSection = (className) => {
    hideAllSections();
    showlevanSections();

    cont section = document.querySelector(className);
    section.style.display = "";
}

window.addEventListener('DOMContentLoaded', (e) =>{
    showSection('full-bleed')
});