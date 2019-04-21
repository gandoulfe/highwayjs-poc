/*
 * @title App
 * @description Application entry point
 */

// Modules
import navbar from '../modules/navbar/navbar';
import carousel from '../modules/carousel/carousel';

// Components
import collapse from './components/collapse.js';
import smoothscroll from './components/smooth-scroll';
import toggle from './components/toggle';
import highway from './components/highway';

document.addEventListener('DOMContentLoaded', function() {

    // Modules
    navbar();
    carousel();

    // Components
    collapse();
    smoothscroll();
    toggle();

})