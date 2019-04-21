import Highway from '@dogstudio/highway';
import Tween, { TimelineMax } from 'gsap/TweenMax';
import imagesLoaded from 'imagesloaded';
const tl = new TimelineMax();

class Slide extends Highway.Transition { in ({ from, to, done }) {
        window.scrollTo(0, 0);
        from.remove();

        imagesLoaded(to, function() {
            tl.staggerTo('.transition-layout span', 0.5, {
                scaleX: 0,
                transformOrigin: 'right',
                onComplete: done,
                ease: Power2.easeOut
            }, 0.1)
        })
    }

    out({ from, done }) {
        tl.staggerTo('.transition-layout span', 0.5, {
            scaleX: 1,
            transformOrigin: 'left',
            onComplete: done,
            ease: Power2.easeOut
        }, 0.1)
    }
}

export default Slide;