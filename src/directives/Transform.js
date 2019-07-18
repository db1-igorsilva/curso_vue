import Vue from 'vue';

Vue.directive('my-transform', {

    bind (el, binding, vnode) {

        let current = 0;

        el.addEventListener('dblclick', function() {
            
            let howMuch = binding.value || 90;
            let effect;

            if(!binding.arg || binding.arg == 'scale') {

                effect = `scale(${howMuch})`;

            } else if (binding.arg == 'rotate') {

                if (binding.modifiers.reverse) {
                    current -= howMuch;
                } else {
                    current += howMuch;
                }

                effect = `rotate(${current}deg)`;
    
            }

            el.style.transform = effect;

            if (binding.modifiers.animate) {
                el.style.transition = 'transform 1s';
            }

        });
    }

});