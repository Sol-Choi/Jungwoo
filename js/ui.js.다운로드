/* ==============================
 * 작성일 : 2021-06-01
 * 작성자 : 안효주, 장영석
 * 작성자의 허락없이 무단 도용시 고발 조치 합니다.
 * ============================== */


$(function(){
	/* ==============================
	 * common
	 * ============================== */
	
	clickMotion();
	ieScroll();
	imgChange();
	common.init();
	
	mobileCheck.init();
	include.init();
	layerPopup.init();
	resize.init();
	animation.init();
	formBox.init();
	folding.init();

	/* ==============================
	 * content
	 * ============================== */

	locationPage();
	
}); 
/* 팝업 플러그인 */
(function($){
	$.fn.alert = function(options){
		var settings = $.extend({
			noIcon: false,
			buttons : 1,
			buttonText : ['확인'],
			buttonClose : 1,
			text : 'alert내용입니다 <br /> html 태그로 넣어주시면 됩니다.',
			textAlign : 'center',
			submit : function(){ console.log('전송버튼호출') },
			close : function(){ console.log('닫기버튼호출')}
		},options);
		
		return this.each(function(){
			var _this = $(this)

			/* id 경로 */
			var href = $(this).attr('href');
			if(!href){
				href = $(this).data('href');
			}
			/*//id 경로 */
			layerPopInit(href,$(this));
			layerPopOpen(href,$(this));
			
			function layerPopInit(target,change){
				$(target).remove();
			}
			
			function layerPopOpen(target,change){
				layerPopAppend(target);
				$('body').addClass('scrollLock');
				
				setTimeout(function(){
					$(target).addClass('on');
				},10)
				
				setTimeout(function(){
					$(target).find('.layerPopCont').focus();
				},30)
				
				$(target).find('.btnPopClose').last().on('keydown',function(e){
					var code = e.which;
					if(code == 9){
						$(this).closest('.layerPopCont').focus();
					};
				});
				
				$(target).find('.btnSubmit').on('click',settings.submit);
				$(target).find('.btnPopClose').on('click',settings.close);
				
				layerPopClose(change);
			}
			
			function layerPopClose(target){

				$(href).find('.btnSubmit').on('click',function(){
					close($(this));
					return false;
				});
				$(href).find('.btnPopClose').on('click',function(){
					close($(this));
					return false;
				});

				$(document).on('click', href, function(e){
					if($(e.originalEvent.target).hasClass('layerPopWrap')){
						$(href).find('.btnPopClose:last').trigger('click');
						$(document).off('click', href);
						close($(this));
					}
				});

				function close(t){
					var $this = t;
					$this.closest('.layerPopWrap').removeClass('on');
					$('body').removeClass('scrollLock');
					target.focus();

					$(target).find('.btnSubmit').off('click');
					$(target).find('.btnPopClose').off('click');

					setTimeout(function(){
						$(href).remove();
					},300);
				}
			}
			
			function layerPopAppend(target){
				$('body').append(layerPopHtml(target));
				$(target).find('.textBox').css('text-align',settings.textAlign);
				$(target).find('.btnPopGroup button').eq(settings.buttonClose - 1).addClass('btnPopClose').siblings().addClass('btnSubmit');
				if(settings.noIcon){
					$(target).addClass('noIcon')
				}
			}
			
			function layerPopHtml(target){
				var $layout = '<div id="' + target.replace('#','') +  '" class="layerPopWrap alertPop">';
				$layout += '<div class="bg"></div>';
				$layout += '<div class="layerPopCont" tabindex="0">';
				$layout += '<div class="contBox">';
				$layout += '<div class="textBox">' + settings.text +'</div>';
				$layout += '<div class="btnPopGroup">';
				if(settings.buttons == 1){
					$layout += '<button class="btn">' + settings.buttonText + '</button>';
				}else{
					$layout += '<button class="btn">' + settings.buttonText[0] + '</button><button class="btn">' + settings.buttonText[1] + '</button>';
				}
				$layout += '</div></div></div></div>';
				return $layout;
			};
			
		});
	};
}(jQuery));

(function($){
	$.fn.popup = function(options){
		var settings = $.extend({
			full : false,
			title : '타이틀 영역들어갑니다',
			text : 'alert내용입니다 <br /> html 태그로 넣어주시면 됩니다.',
			load : null,
			remove : false,
			submit : function(){ console.log('전송버튼호출') },
			close : function(){ console.log('닫기버튼호출')}
		},options);
		
		return this.each(function(){
			var _this = $(this)

			/* id 경로 */
			var href = $(this).attr('href');
			if(!href){
				href = $(this).data('href');
			}
			/*//id 경로 */
			layerPopInit(href,$(this));
			layerPopOpen(href,$(this));
			
			function layerPopInit(target,change){
				if(settings.remove){
					$(target).remove();
				}
			}
			
			function layerPopOpen(target,change){
				if(!$(target).length){
					layerPopAppend(target);
				}
				$('body').addClass('scrollLock');
				
				setTimeout(function(){
					$(target).addClass('on');
				},10)
				
				setTimeout(function(){
					$(target).find('.layerPopCont').focus();
				},30)
				
				$(target).find('.btnPopClose').last().on('keydown',function(e){
					var code = e.which;
					if(code == 9){
						$(this).closest('.layerPopCont').focus();
					};
				});
				
				$(target).find('.btnSubmit').on('click',settings.submit);
				$(target).find('.btnPopClose').on('click',settings.close);
				
				layerPopClose(change);
			}
			
			function layerPopClose(target){

				$(href).find('.btnSubmit').on('click',function(){
					close($(this));
					return false;
				});
				$(href).find('.btnPopClose').on('click',function(){
					close($(this));
					return false;
				});

				$(document).on('click', href, function(e){
					if($(e.originalEvent.target).hasClass('layerPopWrap')){
						$(href).find('.btnPopClose:last').trigger('click');
						$(document).off('click', href);

						close($(this));
					}
				});

				function close(t){
					var $this = t;
					$this.closest('.layerPopWrap').removeClass('on');
					$('body').removeClass('scrollLock');
					target.focus();

					$(target).find('.btnSubmit').off('click');
					$(target).find('.btnPopClose').off('click');

					if(settings.remove){
						setTimeout(function(){
							$(href).remove();
						},300);
					}
				}
			}
			
			function layerPopAppend(target){
				$('body').append(layerPopHtml(target));
				if(settings.load){
					$(target).find('.textBox').load(settings.load);
				}
				$(target).find('.textBox').css('text-align',settings.textAlign);
				$(target).find('.btnPopGroup button').eq(settings.buttonClose - 1).addClass('btnPopClose').siblings().addClass('btnSubmit');
				if(settings.full){
					$(target).addClass('full')
				}
			}
			
			function layerPopHtml(target){
				var $layout = '<div id="' + target.replace('#','') +  '" class="layerPopWrap bottomPop">';
				$layout += '<div class="bg"></div>';
				$layout += '<div class="layerPopCont" tabindex="0">';
				$layout += '<div class="contBox">';
				$layout += '<p class="title">' + settings.title  + '</p>';
				if(settings.load){
					$layout += '<div class="textBox"></div>';
				}else{
					$layout += '<div class="textBox">' + settings.text +'</div>';
				}
				$layout += '</div><a href="#" class="btnClose btnPopClose">팝업닫기</a>';
				$layout += '</div></div>';
				return $layout;
			};
			
		});
	};
}(jQuery));
/*//팝업 플러그인 */


var locationPage = function(){
	$(document).on('click','.locationTitle > a',function(){
		$(this).next().slideToggle('fast').parent().toggleClass('on');
		return false;
	})	
}

var loading = {
	open : function(text){

		$('body').append(layerPopHtml());
		$('body').addClass('scrollLock');

		setTimeout(function(){
			$('#ladingPop').addClass('on');
		},10)

		function layerPopHtml(target){
			var $layout = '<div id="ladingPop" class="layerPopWrap loadingWrap">';
			$layout += '<div class="bg"></div>';
			$layout += '<div class="loadingBox">';
			$layout += '<div class="loading"><i></i><i></i><i></i><i></i></div>';
			if(text){
				$layout += '<div class="text">' + text + '</div>';
			}
			$layout += '</div></div>';
			return $layout;
		};
	},
	close : function(){
		$('#ladingPop').removeClass('on');
		$('body').removeClass('scrollLock');

		setTimeout(function(){
			$('#ladingPop').remove();
		},300);
	}
}

var formBox = {
	input : function(){
		var target = $('.formBox');
		target.find('input').on('focusin',function(){
			$(this).closest('.inputBox').addClass('focus')
		}).on('focusout',function(){
			$(this).closest('.inputBox').removeClass('focus')
		})
	},
	select: function(){
	},
	textarea : function(){
		var target = $('.formBox');
		target.find('textarea').on('focusin',function(){
			$(this).closest('.textarea').addClass('focus')
		}).on('focusout',function(){
			$(this).closest('.textarea').removeClass('focus')
		})
	},
	init : function(){
		formBox.input();
		formBox.select();
		formBox.textarea();
	}
}

var mobileCheck = {
	val : {
		text:null
	},
	check : function(){
		var $agent = navigator.userAgent;
		var isAndroid = ($agent.match(/Android/i) != null) ? 'android' : null;
		var isBlackBerry = ($agent.match(/BlackBerry/i) != null) ? 'blackBerry' : null;
		var isIOS = ($agent.match(/iPhone|iPad|iPod|iOS/i) != null) ? 'ios' : null;
		var isIPhone = ($agent.match(/iPhone/i) != null) ? 'iphone' : null;
		var isIPad = ($agent.match(/iPad/i) != null) ? 'ipad' : null;
		var isOpera = ($agent.match(/Opera Mini/i) != null) ? 'opera' : null;
		var isWindows = ($agent.match(/IEMobile/i) != null) ? 'windows' : null;
		var isNaverApp = ($agent.indexOf('NAVER(inapp') !== -1) ? 'naverApp' : null;
		var isDaumApp = ($agent.match(/DaumApps/i) != null) ? 'daumApp' : null;
		var isKakaoTalk = ($agent.match(/KAKAOTALK/i) != null) ? 'kakaoTalk' : null;
		var isAny = (isAndroid || isIOS || isBlackBerry || isOpera || isWindows);

		if(isAny){
			$('html').addClass('mobile');
			if(mobileCheck.text){
				$('html').removeClass(mobileCheck.text.join(' '));
			}
			mobileCheck.text = null;
			mobileCheck.text = [isAndroid, isBlackBerry, isIOS, isIPhone, isIPad, isOpera, isWindows, isNaverApp, isDaumApp, isKakaoTalk];
			$('html').addClass(mobileCheck.text.join(' '));
		} else {
			$('html').removeClass('mobile');
			if(mobileCheck.text){
				$('html').removeClass(mobileCheck.text.join(' '));
			}
		}
	},
	init: function(){
		mobileCheck.check();
	}
};


var common = {
	header : function(){
		$(document).on('mouseenter','#header nav ul li',function(){
			$('.gnbAllMenuWrap').addClass('on');
			$('#header').addClass('hover');
		})

		$(document).on('mouseover','.gnbAllMenuWrap',function(e){
			if($(e.originalEvent.target).hasClass('gnbAllMenuWrap')){
				$('.gnbAllMenuWrap').removeClass('on');
				$('#header nav ul li').removeClass('on');
				$('#header').removeClass('hover');
			};
		}).on('mouseleave','.gnbAllMenuWrap',function(e){
			$('.gnbAllMenuWrap').removeClass('on');
			$('#header nav ul li').removeClass('on');
			$('#header').removeClass('hover');
		});

		$(document).on('click','.gnbAllMenuWrap .bntGnbClose',function(e){
			$('.gnbAllMenuWrap').removeClass('on');
			$('#header nav ul li').removeClass('on');
			$('#header').removeClass('hover');
			return false;
		});

		$(document).on('mouseenter','.gnbAllMenu .gnb > div',function(){
			$('#header nav ul li').eq($(this).index()).addClass('on').siblings().removeClass('on');
		});

		$(document).on('click','#header .btnGnbAll',function(){
			$('.gnbAllMenuWrap').addClass('on');
			return false;
		});

		$(document).on('click','#header .language > a',function(){
			$(this).toggleClass('on').next().stop().slideToggle('fast');
			return false;
		});

		$(window).scroll(function(){
			var top = $(window).scrollTop();
			var height = $('.visualWrap').outerHeight() - $('#header').outerHeight();
			if(top >= height){
				$('#header').addClass('scrollHead');
			}else {
				$('#header').removeClass('scrollHead');
			}
		});
	},
	footer: function(){
		$(document).on('click','#footer .brandSiteLink > a',function(){
			$(this).toggleClass('on').next().stop().slideToggle('fast');
			return false;
		});

		$(document).on('click','.slideBar .btnTop',function(){
			$('html,body').animate({'scrollTop':0},1000,'easeInOutQuart')
			return false;
		})
	},
	init: function(){
		common.header();
		common.footer();
	}
};

var imgChange = function(){
	var width = $(window).outerWidth();
	var mobileW = 768;
	var tabletW = 1280;
	$('*[data-pc-image]').each(function(){
		var $this = $(this);
		var name = $this.prop('tagName');
		var pc = $this.data('pc-image');
		var tablet = $this.data('tablet-image');
		var mo = $this.data('mo-image');

		change(pc);

		if(tablet){
			if(width <= tabletW) change(tablet);
		}

		if(mo){
			if(width <= mobileW) change(mo);
		};

		function change(t){
			if(name === 'IMG'){
				$this.attr('src',t);
			}else{
				$this.css('background-image','url(' + t + ')');
			}
		}
	});
}

var resize = {
	winResize:function(){
		$(window).resize(function(){
			imgChange();
			mobileCheck.init();
		});
	},
	init : function(){
		resize.winResize();
	}
}

/* 클릭 모션 */
var clickMotion = function(){
	$(document).on('mousedown','.clickMotion',function(e){
		var $this = $(this),
			$delay = 650;
		
		if(!$this.find('.click-in').length) $this.prepend('<i class="click-in"></i>')
		
		var btnIn = $this.find('.click-in'),
			btnMax = Math.max($this.outerWidth(),$this.outerHeight()),
			btnX = e.pageX - $this.offset().left - btnMax/2,
			btnY = e.pageY - $this.offset().top - btnMax/2;
		
		btnIn.css({'left':btnX,'top':btnY,'width':btnMax,'height':btnMax})
			.addClass('animate').delay($delay).queue(function(next){
				btnIn.remove();
			});
	});

	$(document).on('mousedown','[class*=clickMotion]',function(e){
		var $this = $(this);
		$this.removeClass('on');
		timer = setTimeout(function(){
			$this.addClass('on');
		},1);
		
	});
}


/* 내용불러오기 */
var include = {
	load: function(){
		$(window).load(function(){
			var $include = $('[data-include]');
			$include.each(function(i,el){
				var $this = $(this)
				var src = $this.data('include');
				$this.load(src,function(){
					$this.removeAttr('data-include');
					if($this.attr('id') === 'headerWrap'){
						var $title = $('#container').data('title');
						var $headTitle = document.title;
						if($this && $this !== ''){
							// $this.find('h1').text($title);
							document.title = $title+' | '+$headTitle;
							//$('#container').removeAttr('data-title');
						}
					}
				});
			});
		});

		if($('.btnGroup.fixed').length){
			$('#container').addClass('btnFixedPd')
		}
	},
	init:function(){
		include.load();
	}
};


/* ie 스크롤 */
var ieScroll = function(){
	if(navigator.userAgent.match(/Trident\/7\./)){
		$('html,body').on('mousewheel',function(e){
			e.preventDefault();

			var wheelDelta = event.wheelDelta;
			var currentScrollPosition = window.pageYOffset;
			window.scrollTo(0,currentScrollPosition - wheelDelta);
		});
	};
}

/* 팝업 */
var layerPopup = {
	click: function(){
		$(document).on('click','.popOpen',function(){
			var $this = $(this);
			var href = $this.attr('href');
			if(!href){
				href = $this.data('href');
			}
			layerPopup.open(href,$this);
			return false;
		});
	},
	open: function(target,el){
		var cont = $(target).find('.layerPopCont');
		$(target).addClass('on');
		setTimeout(function(){
			cont.focus();
		},30);
		$('body').addClass('scrollLock');

		cont.find('.btnPopClose').last().on('keydown',function(e){
			var code = e.which;
			if(code == 9){
				$(this).closest('.layerPopCont').focus();
			};
		});
		layerPopup.close(target,el);

		if($(el).data('video')){
			var video = $(el).data('video')
			var tit = $(el).find('.tit').text();
			var date = $(el).find('.date').text();

			$(target).find('.videoPopTitBox .tit').text(tit);
			$(target).find('.videoPopTitBox .date').text(date);
			$(target).find('.video iframe').attr('src',video);
		}
	},
	close: function(target,reTarget){
		var btnTarget = reTarget ? reTarget : '';

		$(target).off('click');
		$(target).find('.btnPopClose').off('click');

		$(target).find('.btnPopClose').on('click',function(){
			layerPopup.actionClose(target,reTarget);
			return false;
		});
		$(target).on('click',function(e){
			if($(e.originalEvent.target).hasClass('layerPopWrap')){
				layerPopup.actionClose(target,reTarget);
			}
		});
	},
	actionClose : function(target,reTarget){
		var btnTarget = reTarget ? reTarget : '';
		$(target).removeClass('on');
		$('body').removeClass('scrollLock');

		if($(target).hasClass('videoPop')){

			$(target).find('.videoPopTitBox .tit').text('');
			$(target).find('.videoPopTitBox .date').text('');
			$(target).find('.video iframe').attr('src','').empty();
		}

		if(reTarget) btnTarget.focus();
	},
	init: function(){
		layerPopup.click();
	}

} 

/* 동작 인터렉션 */
var animation = {
	scrollAni: function(){
		var $elements = $( '*[data-animation]' );
		var h = $(window).height();
		$elements.each( function( i, el ) {
			var $el = $( el );
			var animationClass = $el.data('animation').split(',');
			
			$el.waypoint(function(i){
				h = $(window).height();
				if(i == 'up'){
					animation.scrollDD('remove',$el, animationClass);
				}
				if(i == 'down'){
					animation.scrollDD('add',$el, animationClass);
				}

			}, { offset: animation.waypointerCheck($el)[0] +'%',triggerOnce: animation.waypointerCheck($el)[1]});
		});
	},
	scrollChildAni: function(){
		var $elements = $( '*[data-child-animation]' );
		var h = $(window).height();
		$elements.each( function( i, el ) {
			var $el = $( el );
			var $child = $el.children();
			var animationClass = $el.data('child-animation').split(',');
			
			$child.each(function(j){
				var el = $(this);
				el.css('opacity',0)
				el.waypoint(function(i){
					h = $(window).height();
					if(i == 'up'){
						el.css('opacity',0)
						animation.scrollDD('remove',el, animationClass, j);
					}
					if(i == 'down'){
						el.css('opacity',1)
						animation.scrollDD('add',el, animationClass, j);
					}

				}, { offset: animation.waypointerCheck(el)[0] +'%',triggerOnce: animation.waypointerCheck(el)[1]});
			})
		});
	},
	numberCount:function(){
		var $elements = $( '*[data-count]' );
		var h = $(window).height();

		$elements.each( function( i, el ) {
			var $el = $( el );
			var count = $el.data('count').toString().split(',');
			var delay = 0;
			var duration = 800;
			var fixed = 0;
			if($el.data('tofixed'))fixed = $el.data('tofixed');
			if(count[1]) delay = parseInt(count[1]);
			if(count[2]) duration = parseInt(count[2]);

			$el.waypoint(function(i){
				h = $(window).height();
				if(i == 'up'){
					$el.text('-');
				}
				if(i == 'down'){
					$({val:0}).stop(delay).animate({val:count[0]},{
						duration:duration,
						step:function(){$el.text(animation.addComma(this.val.toFixed(fixed)))},
						complete:function(){$el.text(animation.addComma(this.val.toFixed(fixed)))}
					});
				}

			}, { offset: animation.waypointerCheck($el)[0] +'%',triggerOnce: animation.waypointerCheck($el)[1]});
		});
	},

	textAnimation: function(){

		var $elements = $( '*[data-text-animation]' );
		var h = $(window).height();

		$elements.each( function( i, el ) {
			var $el = $( el );
			var textAni = $el.data('text-animation'),
				number = $el.text();

			var _duration = 100,
				_delay = 0;
			if($el.data('duration') > 0) _duration = $el.data('duration');
			if($el.data('delay') > 0) _delay = $el.data('delay');

			$el.addClass(textAni);

			textMotionType($el,_duration,_delay);

			$el.waypoint(function(e){
				if(e == 'down'){
					textMotionType($el,_duration,_delay);
				};
			}, { offset: animation.waypointerCheck($el)[0] +'%',triggerOnce: animation.waypointerCheck($el)[1]});
		});

		function textMotionType(target,duration,delay){
			var timer;
			var split = target.text().split('');
			var last = split.length -1;
		
			target.text('');
			target.empty();
			clearTimeout(timer);
			$.each(split,function(e){
				setTimeout(function(){
					$('<span class="JStextMotion"></span>').appendTo(target).text(split[e]).addClass(split[e] == ' ' ? 'space' : '');
					timer = setTimeout(function(){
						target.find('.JStextMotion').eq(target.data('reverse') ? last -e : e).addClass('on');
					},e*duration);
				},delay);
			});
		}
	},

	scrollDD:function(i,target,name,idx){
		if(i == 'add') {
			target.addClass('animated '+ name[0]);
			if(name[1]){target.css({'-webkit-animation-delay':name[1]+'ms','animation-delay':name[1]+'ms'})}
			if(name[2]){target.css({'-webkit-animation-duration':name[2]+'ms','animation-duration':name[2]+'ms'})}

			if(target.parent().data('child-repeat')){
				var repeat = target.parent().data('child-repeat');
				var delay = name[1];
				if(repeat > idx){
					delay = name[1]*idx;
				}else {
					idx = idx % repeat;
					delay = name[1]*idx;
				}
				if(name[1]){target.css({'-webkit-animation-delay':delay+'ms','animation-delay':delay+'ms'})}
			}
			
		} else if(i == 'remove'){
			target.removeClass('animated '+ name[0]);
		}
	},
	waypointerCheck:function(target){
		var Wpoint = 100;
		var Wonce = false;
		if(target.data('waypoint-point')) Wpoint = target.data('waypoint-point');
		if(target.data('waypoint-once')) Wonce = target.data('waypoint-once');
	
		return [Wpoint,Wonce];
	},

	addComma:function(num){
		var regexp = /\B(?=(\d{3})+(?!\d))/g;
		return num.toString().replace(regexp,',');
	},

	init : function(){
		animation.scrollAni();
		animation.scrollChildAni();
		animation.numberCount();
		animation.textAnimation();
	}
}

var folding = {
	list: function(btn, panel, speed) {
		if(!speed) speed = 300;
		$(document).on('click', btn, function(e){
			e.preventDefault();
			var $closest = $(this).closest('li');
			var $siblings = $closest.siblings();
			if($closest.hasClass('active')){
				$closest.removeClass('active').find(panel).stop(true).slideUp(speed);
			}else{
				$closest.addClass('active').find(panel).stop(true).slideDown(speed);
			}
			$siblings.removeClass('active').find(panel).stop(true).slideUp(speed);
		});
	},
	init: function(){
		if($('.ui-folding-list').length) folding.list('.ui-folding-btn', '.foldingPanel');
	}
}