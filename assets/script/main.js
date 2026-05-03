const header = document.querySelector('[data-header="header"]');
const modalNav = document.querySelector('[data-modal="navbar"]');
const modalNav2 = document.querySelector('[data-modal="navbar2"]');
const modalNav3 = document.querySelector('[data-modal="navbar3"]');
const LinkmodalNav = document.querySelector('[data-span1="href-modalNav-1"]');
const LinkmodalNav3 = document.querySelector('[data-span1="href-modalNav-3"]');
const LinkmodalNav4 = document.querySelector('[data-span1="href-modalNav-4"]');
const burgerModal = document.querySelector('[data-burger="modal"]');
const burgerMenu = document.querySelector('[data-burger="burger"]');
const burgerItem1 = document.querySelector('[data-burger="items-1"]');
const burgerItem2 = document.querySelector('[data-burger="items-2"]');
const burgerItem3 = document.querySelector('[data-burger="items-3"]');
const prevSlideButton = document.querySelector('[data-slide-button="prev"]');
const nextSlideButton = document.querySelector('[data-slide-button="next"]');
const slideBlock = document.querySelector('[data-slide="block"]');
const slider = document.querySelector('[data-slider]');
const wrapper = document.querySelector('[data-wrapper-block="imgs"]');
const nextBtn = document.querySelector('[data-next-slide-button="next"]');
const prevBtn = document.querySelector('[data-prev-slide-button="prev"]');
const genderMan = document.querySelector('[data-button="man"]');
const genderWoman = document.querySelector('[data-button="wooman"]');
const slideBlock3 = document.querySelector('[data-slide-block="block_3"]');
const mainButton = document.querySelector('[data-main="button"]');
const textMainHero = document.getElementById('textMainHero');

// BMW logo style's
const boss = document.querySelector('.boss');
const logo = document.querySelector('.logo');
const w = document.querySelector('.w');
const m = document.querySelector('.m');
const b = document.querySelector('.b');
const circle = document.querySelector('.circle');

window.addEventListener('resize', ()=>{
    if (window.innerWidth < 1025) {
        modalNav.classList.add('hidden');
        modalNav2.classList.add('hidden');
        modalNav3.classList.add('hidden');
        header.classList.remove('header__white');
        boss.classList.remove('boss-logo');
        logo.classList.remove('logo-crug');
        w.classList.remove('w-fill');
        m.classList.remove('m-fill');
        b.classList.remove('b-fill');
        circle.classList.remove('circle-fill');
        burgerItem1.classList.remove('burgerg-items-1');
        burgerItem2.classList.remove('burgerg-items-2');
        burgerItem3.classList.remove('burgerg-items-3');
        mainButton.classList.remove('hidden');    
    }

    if (window.innerWidth >= 1024){
    burgerModal.classList.add('hidden');
    burgerItem1.classList.remove('burgerg-items-1');
    burgerItem2.classList.remove('burgerg-items-2');
    burgerItem3.classList.remove('burgerg-items-3');
    mainButton.classList.remove('hidden');
    textMainHero.classList.remove('hidden');
    document.body.classList.remove('no-scroll');
    }
});

window.addEventListener('load', () => {
    document.body.classList.remove('no-scroll');
    burgerModal.classList.add('hidden');
    mainButton.classList.remove('hidden');
    textMainHero.classList.remove('hidden');
});


LinkmodalNav.addEventListener('click', (e) => {
    e.preventDefault();

    if (modalNav.classList.contains('hidden')) {
        modalNav.classList.remove('hidden');
        modalNav2.classList.add('hidden');
        modalNav3.classList.add('hidden');

        blockHeader();
    } else {
        modalNav.classList.add('hidden');

        hiddenHeader();
    }
});

LinkmodalNav3.addEventListener('click', (e) => {
    e.preventDefault();

    if (modalNav2.classList.contains('hidden')) {
        modalNav2.classList.remove('hidden');
        modalNav.classList.add('hidden');
        modalNav3.classList.add('hidden');

        blockHeader();
    } else {
        modalNav2.classList.add('hidden');

        hiddenHeader();
    }
});

LinkmodalNav4.addEventListener('click', (e) => {
    e.preventDefault();

    if (modalNav3.classList.contains('hidden')) {
        modalNav3.classList.remove('hidden');
        modalNav.classList.add('hidden');
        modalNav2.classList.add('hidden');

        blockHeader();
    } else {
        modalNav3.classList.add('hidden');

        hiddenHeader();
    }
});

function blockHeader() {
    header.classList.add('header__white');
    boss.classList.add('boss-logo');
    logo.classList.add('logo-crug');
    w.classList.add('w-fill');
    m.classList.add('m-fill');
    b.classList.add('b-fill');
    circle.classList.add('circle-fill');
};

function hiddenHeader() {
    header.classList.remove('header__white');
    boss.classList.remove('boss-logo');
    logo.classList.remove('logo-crug');
    w.classList.remove('w-fill');
    m.classList.remove('m-fill');
    b.classList.remove('b-fill');
    circle.classList.remove('circle-fill');
};

burgerMenu.addEventListener('click', ()=>{
    header.classList.toggle('header__white');
    boss.classList.toggle('boss-logo');
    logo.classList.toggle('logo-crug');
    w.classList.toggle('w-fill');
    m.classList.toggle('m-fill');
    b.classList.toggle('b-fill');
    circle.classList.toggle('circle-fill');
    burgerModal.classList.toggle('hidden');
    burgerItem1.classList.toggle('burgerg-items-1');
    burgerItem2.classList.toggle('burgerg-items-2');
    burgerItem3.classList.toggle('burgerg-items-3');
    document.body.classList.toggle('no-scroll');
    mainButton.classList.toggle('hidden');
    textMainHero.classList.toggle('hidden');
});

let scrollSlideBlock = 0;
let scrollWrapper = 0;

nextSlideButton.addEventListener('click', ()=>{
    scrollSlideBlock += 550;

    slideBlock.scrollTo({
        left: scrollSlideBlock,
        behavior: "smooth"
    }); 
});

prevSlideButton.addEventListener('click', ()=>{
    scrollSlideBlock -= 550;

    slideBlock.scrollTo({
        left: scrollSlideBlock,
        behavior: "smooth"
    }); 
});

nextBtn.addEventListener('click', ()=>{
    scrollWrapper += 200;

    slider.scrollTo({
        left: scrollWrapper,
        behavior: "smooth"
    }); 
});

prevBtn.addEventListener('click', ()=>{
    scrollWrapper -= 200;

    slider.scrollTo({
        left: scrollWrapper,
        behavior: "smooth"
    }); 
});


genderMan.addEventListener('click', ()=>{
    genderMan.classList.add('active');
    genderWoman.classList.remove('active');
});

genderWoman.addEventListener('click', ()=>{
    genderMan.classList.remove('active');
    genderWoman.classList.add('active');
});

slideBlock3.addEventListener('mouseenter', ()=>{
    nextBtn.classList.remove('hidden');
    prevBtn.classList.remove('hidden');
});

slideBlock3.addEventListener('mouseleave', ()=>{
    nextBtn.classList.add('hidden');
    prevBtn.classList.add('hidden');
});