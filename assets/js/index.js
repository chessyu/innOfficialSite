
$(function(){
    renderMenus();
    renderCompany();
    renderSwiper();

    //#region 头部固定方法
    $(window).on('scroll', function () {
		if ($(this).scrollTop() > 350) {
			$('.header-sticky').addClass('sticky');
		} else {
			$('.header-sticky').removeClass('sticky');
		}
	});
    //#endregion

    //#region 加到顶部方法
    function scrollToTop() {
        var $scrollUp = $('#scroll-top'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function () {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = st;
        });

        $scrollUp.on('click', function (evt) {
            $('html, body').animate({scrollTop: 0}, 600);
            evt.preventDefault();
        });
    }
	scrollToTop();

    //#endregion

    //#region  移动端 按钮事件
    $(".mobile-menu-bar").on('click', function () {
		$("body").addClass('fix');
		$(".mobile-menu-wrapper").addClass('open');
	});
    $(".btn-close-bar,.body-overlay").on('click', function () {
		$("body").removeClass('fix');
		$(".mobile-menu-wrapper").removeClass('open');
	});
    //#endregion

    //#region 移动端 菜单处理
    /*----------------------------------------
		Responsive Mobile Menu
	------------------------------------------*/
	//Variables
	var $offCanvasNav = $('.mobile-menu'),
	$offCanvasNavSubMenu = $offCanvasNav.find('.dropdown');

	//Close Off Canvas Sub Menu
	$offCanvasNavSubMenu.slideUp();

	//Category Sub Menu Toggle
	$offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
	var $this = $(this);
		if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
			e.preventDefault();
			if ($this.siblings('ul:visible').length){
				$this.parent('li').removeClass('active');
				$this.siblings('ul').slideUp();
			} else {
				$this.parent('li').addClass('active');
				$this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
				$this.closest('li').siblings('li').find('ul:visible').slideUp();
				$this.siblings('ul').slideDown();
			}
		}
	});

	/*----------------------------------------
		Swiper Slider Activation
	------------------------------------------*/

    //#endregion

    //#region 轮播图
        /*-- Home Slider --*/
        var introSlider = new Swiper('.hero-slider', {
            loop: true,
            speed: 750,
            spaceBetween: 30,
            slidesPerView: 1,
            effect: 'slide',
            parallax: true,
            navigation: {
                nextEl: '.home-slider-next',
                prevEl: '.home-slider-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: 'true',
            },
            //autoplay: {},
        });
    //#endregion

})

//菜单栏渲染
function renderMenus (){
    let li = "";
    headerMenus.forEach((item,index)=>{
        var hasChildren = item.children && item.children.length > 0;
        var childrenLi = "";
        if(hasChildren){
            item.children.forEach((keys,i) => {
                childrenLi += ` <li><a href="${keys.path}.html">${keys.title}</a></li>`
            })
        }
        var childrenUl = `<ul class="sub-menu">${childrenLi}</ul>`
        li += `
        <li class="${hasChildren ? 'has-children' : ''}">
            <a href="${item.path == '#' ? '#' : item.path + '.html'}">${item.title}</a>
            ${hasChildren ? childrenUl :''}
        </li>
        `
    })
    let ul = `<ul>${li}</ul>`
    $(".headerMenus").append(ul);
    $(".headerMenus-mobile > ul").addClass("mobile-menu");
    $(".headerMenus-mobile li > ul").removeClass("sub-menu").addClass("dropdown");
    $(".headerMenus-mobile > ul > li > a").each((index,item)=>{
        if($(item).parent().find('ul').length){
            $(item).html($(item).text() +'<i class="fa fa-angle-down" aria-hidden="true"></i>');
        }
    })
    hotLink();
}

//公司基本信息替换
function renderCompany (){
    $(".company-phone").text(companyConfig.companyPhone);
    $(".company-email").text(companyConfig.companyEmail);
    $(".company-addr").text(companyConfig.companyAddr);
    $(".company-logo").attr('src',companyConfig.companyLogo);
    $(".company-copyright").text(companyConfig.copyright);
    $(".company-keepCode").text(companyConfig.keepCode);
    $(".company-companyMark").text(companyConfig.companyMark);
}

//网页底部 热门链接
function hotLink(){
    var li = "";
    headerMenus.forEach(function(item,index){
       if(index < 5){
        var title, path;
        if( item.children && item.children.length > 0){
            title = item.children[0].title;
            path = item.children[0].path;
        }else{
            title = item.title;
            path = item.path;
        }
        li += `<li><a href="${path}.html">${title}</a></li>`
       }
    })
    $(".hot-link").html(li);
}

//渲染轮播图区域
function renderSwiper(){
    var router = $('body').attr('class');
    swiperModule.forEach((item,index)=>{
        if(router == item.code){
            var data = '';
            item.swiper.forEach((keys,i)=>{
                data += `
                <div class="hero-slide-item swiper-slide">
                    <div class="hero-slide-bg">
                        <img src="${keys.img}" alt="" />
                    </div>
                    <div class="container">
                        <div class="hero-slide-content">
                            <span class="sub-title">${keys.copywriting.desc}</span>
                            <h2 class="title"> ${keys.copywriting.h1} <br /> ${keys.copywriting.h2} </h2>
                            <p> ${keys.copywriting.mark }</p>
                            <a href="${keys.copywriting.link}" class="btn btn-hover-secondary btn-primary">查看详情</a>
                        </div>
                    </div>
                </div>
                `
            })
            $('.render-swiper').html(data);
        }
    })
}