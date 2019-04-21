// File: main.js
// Import Highway
import Highway from '@dogstudio/highway';

// Import Transitions
import Slide from './transitionslide';

// See: https://github.com/GoogleChromeLabs/quicklink
import Quicklink from 'quicklink/dist/quicklink.mjs';

// Import Polyfills
// See: https://github.com/w3c/IntersectionObserver/tree/master/polyfill
import 'intersection-observer';


// Call Highway.Core once.
const H = new Highway.Core({
    transitions: {
        default: Slide
    }
});


// Listen Events
H.on('NAVIGATE_END', ({ to }) => {
    // Call Quicklink
    Quicklink({
        el: to.view
    });
});