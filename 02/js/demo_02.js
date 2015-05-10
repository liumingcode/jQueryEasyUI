
$(function(){

	$("#droppable").droppable({
		accept : '#draggable',//可以接受放置的元素
		onDragEnter : function(e,source){
			$(this).css('background','blue');
		},
		onDragOver : function(e,source){
			$(this).css('background','red');
		},
		onDragLeave : function(e,source){
			$(this).css('background','yellow');
		},
		onDrop : function(e,source){
			$(this).css('background','green');
		},

	});

	$('#draggable').draggable({
		
	});
})