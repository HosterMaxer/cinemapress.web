(function($) {
	
	"use strict";

    $('a[href^="#"]').click(function() {
        event.preventDefault();
        var id  = $(this).attr("href");
        var target = $('#' + id.substring(1, id.length));
        $('html, body').animate({ scrollTop: target.offset().top - (60)  }, 1000);
    });

    $.scrollUp({
        scrollText: '<i class="fas fa-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
         $(".header-area").removeClass("sticky-header");
        }else{
         $(".header-area").addClass("sticky-header");
        }
     });

   $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $(window).on('load', function(){
        $('.preloader').fadeOut(1000); // set duration in brackets    
    });

   $(".menu-toggle").on("click", function() {
       $(this).toggleClass("is-active");
   });

    $(".custom-select-2").each(function() {
        var classes = $(this).attr("class"),
            id      = $(this).attr("id"),
            name    = $(this).attr("name");
        var template =  '<div class="' + classes + '">';
            template += '<span class="custom-select-trigger">' + $(this).attr("") + '</span>';
            template += '<div class="custom-options">';
            $(this).find("option").each(function() {
              template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
            });
        template += '</div></div>';
        
        $(this).wrap('<div class="custom-select-wrapper"></div>');
        $(this).hide();
        $(this).after(template);
      });
      $(".custom-option:first-of-type").hover(function() {
        $(this).parents(".custom-options").addClass("option-hover");
      }, function() {
        $(this).parents(".custom-options").removeClass("option-hover");
      });
      $(".custom-select-trigger").on("click", function() {
        $('html').one('click',function() {
          $(".custom-select-2").removeClass("opened");
        });
        $(this).parents(".custom-select-2").toggleClass("opened");
        event.stopPropagation();
      });
      $(".custom-option").on("click", function() {
        $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
        $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
        $(this).addClass("selection");
        $(this).parents(".custom-select-2").removeClass("opened");
        $(this).parents(".custom-select-2").find(".custom-select-trigger").text($(this).text());
      });

    $('.select-bar').niceSelect();

    $('.count').counterUp({
        delay: 10,
        time: 2000
    });

    $('.reviews').owlCarousel({
        loop:true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        margin: 30,
        nav:false,
        responsive:{
            0:{
                items:1,                
            },
            576:{
                items:1
            },
            1000:{
                items:2
            },
            1024:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });

	$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

	$('.accordion a').on( 'click',function(j) {
		var dropDown = $(this).closest('li').find('p');

		$(this).closest('.accordion').find('p').not(dropDown).slideUp();

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).closest('.accordion').find('a.active').removeClass('active');
			$(this).addClass('active');
		}

		dropDown.stop(false, true).slideToggle();

		j.preventDefault();
	});

})(jQuery);

function timer(min, type, callback) {
    var timer_install = document.querySelector('[data-info="' + type + '"]');
    var timer_time = document.querySelector('[data-info="' + type + '"]');
    if (timer_install) {
        ti(timer_install, min);
    }
    else if (timer_time) {
        ti(timer_time, min);
    }
    function ti(time, min) {
        var sec = 0;
        var timer = setInterval(function () {
            if (sec < 0) {
                min--;
                sec = 59;
            }
            time.innerText =
                ((min < 10) ? '0' + min : min) +
                ':' +
                ((sec < 10) ? '0' + sec : sec);
            if (sec === 0 && min === 0) {
                callback(time);
                clearInterval(timer);
            }
            sec--;
        }, 1000);
    }
}

var ssh = document.querySelector('#ssh');
if (ssh) {
    ssh.addEventListener('click', req);
}

function req() {

    var self = this;

    if (document.querySelector('#ssh')) {
        self.removeEventListener('click', req);
        self.innerHTML = '<span class="fa fa-spinner fa-pulse fa-fw"></span>';
    }

    var themes = 'hodor|sansa|robb|ramsay|tyrion|cersei|joffrey|drogo|bran|arya|mormont|tarly|daenerys'.split('|');
    var domain,
        ip,
        root,
        theme = themes[Math.floor(Math.random()*themes.length)],
        lang = /^\/en/i.test(window.location.pathname) ? 'en' : 'ru';

    var req_domain = document.querySelector('input[name="req_domain"]');
    if (req_domain && req_domain.value) {
        req_domain.value = (req_domain.value)
            ? req_domain.value.replace(/\//g, '').replace('http:', '').replace('https:', '')
            : '';
        if (/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z0-9-]{2,})+$/.test(req_domain.value)) {
            req_domain.style.background = '#030b38';
            domain = req_domain.value.toLowerCase();
        }
        else {
            req_domain.style.background = '#17010d';
        }
    }
    else {
        req_domain.style.background = '#17010d';
    }

    var req_ip = document.querySelector('input[name="req_ip"]');
    if (req_ip && req_ip.value && /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(req_ip.value)) {
        req_ip.style.background = '#030b38';
        ip = req_ip.value;
    }
    else {
        req_ip.style.background = '#17010d';
    }

    var req_root = document.querySelector('input[name="req_root"]');
    if (req_root && req_root.value){
        req_root.style.background = '#030b38';
        root = req_root.value;
    }
    else {
        req_root.style.background = '#17010d';
    }

    if (!domain || !ip || !root || !theme || !lang) {
        self.addEventListener('click', req);
        self.innerHTML = lang === 'ru' ? 'Установить' : 'Install';
        return;
    }

    var pass = generate();

    var http = new XMLHttpRequest();
    var params =
        'option=1' + 
        '&cp_domain=' + domain +
        '&ip=' + ip +
        '&root=' + root +
        '&cp_theme=' + theme +
        '&cp_passwd=' + pass +
        '&cp_lang=' + lang;
    http.open('POST', 'https://cinemapress.sh', true);
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function() {
        if (http.readyState === 4 && http.status === 200) {
            if (http.responseText === 'OK') {
                document.querySelector('.install-form').style.display = 'none';
                document.querySelector('.install-success').style.display = 'block';
                document.querySelector('input[name="password"]').value = pass;
                setTimeout(function () {
                    document.querySelector('[data-info="dns"]').innerHTML = lang === 'ru'
                        ? '<span class="fa fa-plug"></span>&nbsp;&nbsp;Пропишите DNS домена!'
                        : '<span class="fa fa-plug"></span>&nbsp;&nbsp;Register domain DNS!';
                }, 20000);
                timer(10, 'install', function (time) {
                    time.innerHTML = '<span class="text-success">OK</span>';
                    document.querySelector('#admin').innerHTML = 'http://' + domain + '/admin';
                    document.querySelector('#go').setAttribute('href', 'http://' + domain + '/admin');
                    document.querySelector('#go').setAttribute('target', '_blank');
                    document.querySelector('#go').innerHTML = lang === 'ru'
                        ? 'Перейти в админ-панель'
                        : 'Go to admin panel';
                });
            }
            else if (http.responseText === 'TIME') {
                document.querySelector('[data-info="time"]').innerHTML = lang === 'ru'
                    ? '<i class="fa fa-info-circle"></i>&nbsp;&nbsp;Повторите запрос через 1 мин!'
                    : '<i class="fa fa-info-circle"></i>&nbsp;&nbsp;Repeat request after 1 min!';
                setTimeout(function () {
                    self.addEventListener('click', req);
                    document.querySelector('[data-info="time"]').innerHTML = lang === 'ru'
                        ? 'Ваш домен'
                        : 'Your domain';
                    self.innerHTML = lang === 'ru' ? 'Установить' : 'Install';
                }, 60000);
            }
            else if (http.responseText === 'OFFLINE' || http.responseText === 'CONNECT') {
                if (http.responseText === 'OFFLINE') {
                    document.querySelector('[data-info="offline"]').innerHTML = lang === 'ru'
                        ? '<i class="fa fa-info-circle"></i>&nbsp;&nbsp;Ваш сервер еще не активирован!'
                        : '<i class="fa fa-info-circle"></i>&nbsp;&nbsp;Your server is not activated yet!';
                } else {
                    document.querySelector('[data-info="offline"]').innerHTML = lang === 'ru'
                        ? '<i class="fa fa-info-circle"></i>&nbsp;&nbsp;Пароль введен неверно!'
                        : '<i class="fa fa-info-circle"></i>&nbsp;&nbsp;Password entered incorrectly!';
                }
                self.addEventListener('click', req);
                self.innerHTML = lang === 'ru' ? 'Установить' : 'Install';
                setTimeout(function () {
                    document.querySelector('[data-info="offline"]').innerHTML = lang === 'ru'
                        ? 'Ваш сервер'
                        : 'Your server';
                }, 10000);
            }
            else {
                document.querySelector('.install-form').style.display = 'block';
                document.querySelector('.install-success').style.display = 'none';
                self.addEventListener('click', req);
                self.innerHTML = lang === 'ru' ? 'Установить' : 'Install';
            }
        }
    };
    http.send(params);
}
function generate() {
    var len = randomInteger(6,7);
    var chars = ['na','bo','co','do','re','fe','ge','hi','ka','ko','mo','no','vo','po','so','si','to','wi','ya','fa','fe','pe','me','se','de','ne','ve','he','ke','ve'];
    var out = '';
    for (var i = 0; i < len; i++){
        var ch = Math.random();
        if (ch < 0.5) {
            out += randomInteger(1,99);
        }
        else{
            out += chars[Math.floor(Math.random()*chars.length)];
        }
    }
    return out;
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}