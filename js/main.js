const mobileMenu = document.querySelector('.mobile__header-burger');
const leftMenu = document.querySelector('.left-menu');
const mainContent = document.querySelector('.right-main');
const body = document.querySelector('body');
const topBtn = document.querySelector('.topBtn');
const links = document.querySelectorAll('.hideMenu');
const searchFormBtn = document.querySelector('.searchFormBtn');
const searchFormBody = document.querySelector('.search__form');
const closeFormBtn = document.querySelector('.close-form a');
const headerMobile = document.querySelector('.mobile__header');
const mainSlider = new Swiper('.main-slider' ,{
	slidesPerView: 1,
	navigation:{
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
mobileMenu.onclick = () =>{
	leftMenu.classList.toggle('showLeftMenu');
	body.classList.toggle('noScroll');
	window.scrollTo(0,0);
}
topBtn.onclick = () =>{
	window.scrollTo(0,0);
}
searchFormBtn.onclick = () =>{
	window.scrollTo(0,0);
	searchFormBody.style.display = "block";
	headerMobile.style.display = "none";
	searchFormBody.classList.add('height100vh');
	body.classList.add('overflowhidden');
	leftMenu.classList.remove('showLeftMenu');
}
closeFormBtn.onclick = () =>{
	searchFormBody.style.display = "none";
	headerMobile.style.display = "flex";
	body.classList.remove('overflowhidden');
	body.classList.remove('noScroll');
}
window.onscroll = function () {
	if(window.pageYOffset > 10){
		headerMobile.classList.add('header_fixed');
	}else{
		headerMobile.classList.remove('header_fixed');
	}
	if(window.pageYOffset > 300){
		topBtn.classList.add('show');
	}else{
		topBtn.classList.remove('show');
	}
}
for (i = 0; i < links.length; ++i) {
	links[i].onclick = function hideMenu(){
		leftMenu.classList.remove('showLeftMenu');
		body.classList.remove('noScroll')
	}
}
for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
	dropdown.addEventListener('click', function() {
		this.querySelector('.custom-select').classList.toggle('open');
	})
}
for (const option of document.querySelectorAll(".custom-option")) {
	option.addEventListener('click', function() {
		if (!this.classList.contains('selected')) {
			this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
			this.classList.add('selected');
			this.closest('.custom-select').querySelector('.custom-select__trigger span').innerHTML = this.innerHTML;
		}
	})
}
window.addEventListener('click', function(e) {
	for (const select of document.querySelectorAll('.custom-select')) {
		if (!select.contains(e.target)) {
			select.classList.remove('open');
		}
	}
});


