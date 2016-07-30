$(function() {
	var flag = false;
	var lunbo = $('.lunbo');
	var zong = lunbo.width();
	var width = $('.d1').width();
	var bili = (width/zong)*100;
	var index = 0;

	var newarr = [];
	var arr = [];
	var zuo = $('.shangxia li');
	var jisuan = 0;
	for(var i=0; i<zuo.length;i++){
		newarr.push(zuo.get(i));
	}
	for(var j=0; j<newarr.length; j++){
		arr.push(newarr[j].offsetTop);
	}

	$(document).on('mousewheel', function(e) {
		if(flag){
			return;
		}
		flag = true;
		if(e.originalEvent.wheelDelta>0){
			jisuan--;
			if(jisuan <= 0){
				jisuan = 0;
			}
			index += bili;
			if(index>0){
				index = 0;
			}
			var obj = document.body?document.body:document.documentElement;
			$(obj).animate({scrollTop:arr[jisuan]});
			lunbo.animate({left:index+'%'},function(){
				flag = false;
			});
		}else{
			jisuan++;
			index -= bili;
			if(index < -83.4){
				index = -83.4;;
			}
			if(jisuan >= arr.length){
				jisuan = arr.length-1;
			}
			var obj = document.body?document.body:document.documentElement;
			$(obj).animate({scrollTop:arr[jisuan]});
			lunbo.animate({left:index+'%'},function(){
				flag = false;
			});
		}
	})


})