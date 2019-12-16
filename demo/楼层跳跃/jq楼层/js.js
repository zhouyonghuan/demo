$(function() {
	$(window).on('scroll', function() {
		var $scroll = $(this).scrollTop();
		// 监听滚动条是否大于800，如果大于800显示楼层导航，否则隐藏
		if ($scroll >= 800) {
			$('#loutinav').show();
		} else {
			$('#loutinav').hide();
		}
		// 导航栏颜色跟随
		$('.louti').each(function(){
			var $loutitop = $('.louti').eq($(this).index()).offset().top + 400;
			if ($loutitop > $scroll) {
				$('#loutinav li').removeClass('active');
				$('#loutinav li').eq($(this).index()).addClass('active');
				return false;
			}
		});
	});
	// 除了底部其他的都给他添加点击事件
	 var $loutili = $('#loutinav li').not('.last');
	$loutili.on('click', function() {
		// 排他
		$(this).addClass('active').siblings('li').removeClass('active');
		// 获取目标位置
		var $loutitop = $('.louti').eq($(this).index()).offset().top;
		// 动画跳转
		$('html,body').animate({
			scrollTop: $loutitop
		})
	});
	// 返回顶部
	$('.last').on('click', function() {
		$('html,body').animate({
			scrollTop: 0
		})
	});
})
