$(function(){
    //店铺地址赋值
    $('.storeMap').attr({"href":"https://www.amap.com/search?query=%E5%85%A8%E5%BF%83%E6%97%85%E9%A6%86&city=440100&geoobj=113.337388|23.191003|113.341214|23.193152&zoom=19.1","target":'_blank'})

    //图片懒加载
    $('img').each(function(){
        $(this).attr("data-funlazy", $(this).attr("src"));
    })

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
			$('.custom .site-content, .main-header .header').addClass('sticky');
		} else {
			$('.custom .site-content, .main-header .header').removeClass('sticky');
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
        autoplay: {
            disableOnInteraction: false,    // 用户操作swiper之后，是否禁止autoplay
        },
	});

    

    // 图片轮播
    var testimonialCarousel = new Swiper('.swiper-slide-box', {
        loop: true,
        speed: 750,
        delay:500,
        spaceBetween: 30,
        slidesPerView: 1,
		effect: 'slide',
		// parallax: true,
        lazyLoading:true,
        autoplay: {
            disableOnInteraction: false,    // 用户操作swiper之后，是否禁止autoplay
        },
        navigation: {
            nextEl: '.home-slider-next',
            prevEl: '.home-slider-prev',
		},
		// pagination: {
		// 	el: '.swiper-pagination',
		// 	type: 'bullets',
		// 	clickable: 'true',
		// },
    });

    // 合作伙伴
    var cooperswiper = new Swiper('.cooper-swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


    //图片地址赋值
    var val = $(".sections>input").val();
    var imgName = $(".sections>input").attr("imgName")
    var img = '';
    for(var i =0; i< val; i++){
        img += `<img src="../assets/images/${imgName}${i+1}.jpg" class="zoomImg" alt="" />`
    }
    $(".zoomImg-hide-box").html(img);


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

    FunLazy();
    
})

showZoomImg('.zoomImgshow', 'text');

