import Slide from './slide.js'

const slide = new Slide('.slider', '.wrapper');
slide.init();

slide.changeSlides(0);
slide.activePrevSlide();
