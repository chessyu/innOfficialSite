$(function(){
    //表头菜单固定
    $(window).on('scroll', function () {
		if ($(this).scrollTop() > 250) {
			$('.site-content').addClass('sticky');
		} else {
			$('.site-content').removeClass('sticky');
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
})