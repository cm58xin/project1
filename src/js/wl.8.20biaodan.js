window.onload = function(){
	var header_2_wl = document.getElementById("header_2_wl")
	var main = document.getElementById("main")

	window.onscroll = function(){
		if(scrollY>120){
			header_2_wl.style.position = "fixed";
			header_2_wl.style.top = 0;
			header_2_wl.style.left = 0;
			header_2_wl.style.right = 0;
			header_2_wl.style.opacity = 0.8;
			header_2_wl.style.zIndex = 999;
			header_2_wl.style.boxShadow ="0px 5px 5px #cfcfcf";
			main.style.marginTop = "68px";

		}else{
			header_2_wl.style.position = "relative";
			header_2_wl.style.top = 0;
			header_2_wl.style.left = 0;
			header_2_wl.style.right = 0;
			header_2_wl.style.opacity = 1;
			header_2_wl.style.boxShadow ="0px 0px 0px #888888"
			main.style.marginTop = "0px";

		}
	}
	
}