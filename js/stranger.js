document.addEventListener('DOMContentLoaded', function() {
    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            '(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + '=([^;]*)'
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    function setCookie(name, value, options) {
        options = options || {};
        var expires = options.expires;
        if (typeof expires === 'number' && expires) {
            var d = new Date();
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }
        value = encodeURIComponent(value);
        var updatedCookie = name + "=" + value;
        for (var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }
        document.cookie = updatedCookie;
    }
    function deleteCookie(name) {
        setCookie(name, '', {expires: -1})
    }
    (function strangerThings() {
        var st = document.querySelector('#stranger-things');
        if (!st) return;
        if (!getCookie('stranger')) {
            strangerThingsOn();
            st.style.display = 'inline-block';
            st.innerHTML = '<i class="fas fa-circle"></i>';
        }
        else {
            st.style.display = 'inline-block';
            st.innerHTML = '<i class="far fa-circle"></i>';
        }
        st.addEventListener('click', function () {
            if (st.innerHTML === '<i class="fas fa-circle"></i>') {
                strangerThingsOff();
                st.innerHTML = '<i class="far fa-circle"></i>';
                setCookie('stranger', 'off', {expires: 3600*24*265});
            }
            else {
                strangerThingsOn();
                st.innerHTML = '<i class="fas fa-circle"></i>';
                deleteCookie('stranger');
            }
        });
    })();
    function strangerThingsOn() {
        var particles = document.querySelector('#particles-top');
        if (particles) particlesJS("particles-top", {"particles":{"number":{"value":60,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"enable":false,"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
    }
    function strangerThingsOff() {
        var particles = document.querySelector('#particles-top');
        if (particles) particles.innerHTML = '';
    }
});