import { SlideNav } from './slide.js'

const slide = new SlideNav ('.slider', '.wrapper');
slide.init();
slide.addArrow('.prev', '.next');
