    $(document).ready(function(e) {
        $(".dropdown-menu li").hover(function(){
			
			$(this).parent().parent(".dropdown").addClass("active");
		},function(){
			$(this).parent().parent(".dropdown").removeClass("active");;
		});
    });
    