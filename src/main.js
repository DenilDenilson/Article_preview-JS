const footerMovil = document.querySelector('#footer_movil');
//console.log(footerMovil);
const iconShareBefore = document.querySelector('#icon_share-before');
//console.log(iconShareBefore);
const iconShareAfter = document.querySelector('#icon_share-after');
//console.log(iconShareAfter);

iconShareBefore.addEventListener('click', () => {
    footerMovil.classList.toggle('left-[-85vw]');
    footerMovil.classList.toggle('left-0');
    footerMovil.classList.toggle('xl:invisible');
});

iconShareAfter.addEventListener('click', () => {
    footerMovil.classList.toggle('left-[-85vw]');
    footerMovil.classList.toggle('left-0');
});