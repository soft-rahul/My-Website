function openMenu() {

    let ele;
    ele = document.querySelector('#js-dropdown-menu');
    ele.style.visibility = 'visible';


}
function closeMenu() {

    let eleTwo;
    eleTwo = document.querySelector('#js-dropdown-menu');
    eleTwo.style.display = 'none';

}
const closeBtn = document.querySelector('#js-menu-close-btn');
closeBtn.addEventListener('click',closeMenu);

const openBtn = document.querySelector('#open');
openBtn.addEventListener('click',openMenu), {times:Infinity};