
	//-----------------------------------吸顶操作------------------
	
	// New Arrivals点击前后
			let anniu = document.querySelector('.anniu');
			let ul = anniu.querySelector('ul');
			// 图片的数量
			let length = ul.children.length;

			let liWidth = ul.children[0].offsetWidth;
			
			// 初始索引值
			let index = 0;
			anniu.onclick = e=>{
				if(e.target.id=== 'i1'){
					
					index+=2;
					showImg();
				}else if(e.target.id=== 'i2'){	
					index-=2;
					showImg();
				}
			}
			var timer;
			function showImg(){
				//进入函数前，先清除之前的定时器
				clearInterval(timer);
				if(index>=length){
					index = 0;
				}else if(index<0){
					index = length - 1;
				}

				let target = -index*liWidth;
					
				timer = setInterval(()=>{
					
					let left = ul.offsetLeft;
					let speed = (target-left)/10;
					//目的是不让速度（正负）为0
					speed = speed>0 ? Math.ceil(speed):Math.floor(speed);
					console.log(speed);
					if(left===target){
						clearInterval(timer);
						left = target - speed;
					}
					ul.style.left = left + speed + 'px';

				},30);
			}

		

}

