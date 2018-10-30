$(function () {
	//페이징 키값을 위한 변수 정의///
	window.chosenConfig = {no_results_text: "검색어가 없습니다.!"};
	window.datepickerConfig = {
		format: "yyyy-mm-dd"
	};
	
	
	/*상세보기*/
	$(document).on('click','.detail_btns',function(){
		var icon = $(this).find('.fas');
		var iconHas = $(this).find('.fas').hasClass('fa-angle-down');
		var selectedInfo = $(this).parents('tr').nextUntil('.detail_tbl-wrap+tr').filter(':last');

		if(iconHas) {
			icon.removeClass('fa-angle-down').addClass('fa-angle-up');
			selectedInfo.show();
		}
		else{
			icon.removeClass('fa-angle-up').addClass('fa-angle-down');
			selectedInfo.hide();
		}
	})
	
	/*chosen*/
	$(".search select").chosen(chosenConfig);


	//attach plugins
	$("[data-plugins=chosen]").chosen(window.chosenConfig);
	$("[data-plugins=datepicker]").datepicker(window.datepickerConfig);
	
	$(".dateInp").on('click',function(){
		$(".datepicker-container").css('z-index',99999)
	})
	
	/*datepicker*/
	$('#dateInp').datepicker({
		format: "yyyy-mm-dd"
	});
    
    /*radio*/
    var rd = $("input[type='radio']");
    var chk = false;
    rd.on("click",function(){
        if(chk === true) {
            chk = false;
            $(this).prop('checked', false);
        }else if(chk === false) {
            chk = true;
            $(this).prop('checked', true);
        }
    })
    
    /*input focus*/
    $(document).on("click",".fa-edit",function(){
        var _modi_pop = $(".modal-dialog").css('display');
        var _inp_val = $(".form-group--mv").find(".form-control").val();
        if(_modi_pop === 'block' || _modi_pop === 'flex' &&_inp_val.length > 0) {
            $(".form-group--mv").addClass('focused');
        }
    });
    
    $(document).on('focus','.form-control', function() {
        $(this).parent('.form-group--mv').addClass('focused');
        var _inp_placehold = $(this).attr('data-placeholder');
        $(this).attr('placeholder',_inp_placehold);
    });
    
    $(document).on('focusout','.form-control', function() {
        if ($(this).val().length === 0) {
            $(this).parent('.form-group--mv').removeClass('focused');
            $(this).attr('placeholder','');
        }
    });
    
});