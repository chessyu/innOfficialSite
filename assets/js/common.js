$(function(){
    //店铺地址赋值
    $('.storeMap').attr({"href":"https://www.amap.com/search?query=%E5%85%A8%E5%BF%83%E6%97%85%E9%A6%86&city=440100&geoobj=113.337388|23.191003|113.341214|23.193152&zoom=19.1","target":'_blank'})

    // 移动端菜单切换
    $(".mobile-menu-btn").click(function(){
        if($(this).find("img").hasClass('menu-active')){
            $(this).find("img").removeClass("menu-active")
            $(".mobil-menu").slideUp();
        }else{
            $(this).find("img").addClass("menu-active")
            var li = $(".menu-list").html();
            $(".mobil-menu").html(li);
            $(".mobil-menu").slideDown();
        }
        
    })

    //表头菜单固定
    $(window).on('scroll', function () {
		if ($(this).scrollTop() > 250) {
			$('.custom .site-content').addClass('sticky');
		} else {
			$('.custom .site-content').removeClass('sticky');
		}
	});

    // 图片轮播
    var introSlider = new Swiper('.bg-img', {
        loop: true,
        speed: 750,
        spaceBetween: 30,
        slidesPerView: 1,
		effect: 'fade',
		parallax: true,
        autoplay: true,
	});

    // 图片轮播
    var testimonialCarousel = new Swiper('.swiper-slide-box', {
        loop: true,
        speed: 750,
        spaceBetween: 30,
        slidesPerView: 1,
		effect: 'slide',
		parallax: true,
        lazyLoading:true,
        autoplay: true,
        navigation: {
            nextEl: '.home-slider-next',
            prevEl: '.home-slider-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},
    });

    $(window).on('scroll', function(){
		AOS.init({
			duration: 1200, // values from 0 to 3000, with step 50ms
			disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
			offset: 30, // offset (in px) from the original trigger point
			once: true,
			easing: 'ease',
		  });
	});

	AOS.init({
		duration: 1200, // values from 0 to 3000, with step 50ms
		disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
		offset: 30, // offset (in px) from the original trigger point
		once: true,
		easing: 'ease',
	});
})