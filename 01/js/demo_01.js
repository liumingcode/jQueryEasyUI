
$(function(){
	$('#dragable').draggable({
		//传入参数进行操作
		//revert : true,
		//cursor : 'pointer',
		//handle : '#pox',
		//disabled : false,
		//edge : 50,
		//axis : 'v',
		//delay : 2000,
		//proxy : 'clone',
		//deltaX : -100,
		//deltaY : -100,
		proxy : function(source){
			var p = $('<div style="border:1px solid #ccc;width:400px;height: 200px"></div>');
			p.html($(source).html()).appendTo('body');
			return p;
		},
		onBeforeDrag : function(e){
			alert("123");
		},
	});
})