/* 
 * @Author: Marte
 * @Date:   2017-08-27 15:26:49
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-09-11 01:42:41
 */

document.addEventListener("DOMContentLoaded", function() {

	// 、、、、、、、、、、、、、、传图片n、、、、、、、、、、、//
	//    // 获取传递过来的商品参数
	var pic1 = document.getElementsByClassName("pic1")[0];
	var params = location.search;
	params = decodeURI(params);
	// console.log(params);

	// 还原数据，把url参数（string）转变成对象;

	var idx = params.indexOf('?');
	// console.log(idx);
	// 返回0，
	// 从idx=1开始截取，到最后；
	var params = params.substring(idx + 1);

	// 以&拆分为数组
	params = params.split('&');

	var res = {};

	params.forEach(function(item) {
		// 以等号拆分为数组；
		var arr = item.split('=');
		// console.log(arr);

		res[arr[0]] = arr[1];
	});
	console.log(res);

	pic1.src = res.imgurl || '../img/161.jpg'

	// html +='<h1 >商品详情：</h1><ul><li><img src="'+res.imgurl+'"></li><li><span>'+res.name+'</span></li>'+'<li><span>'+res.listPrice+'</span><span>$'+res.ourPrice+'</span></li>'+'<li><a href="#">'+res.form+'<i class="iconfont icon-arrow-right"></i></a></li></ul>';

	//   output.innerHTML=html;

	// 11111111111111111111111111111111111111111111111111111111111111、、//
	var dongtu = document.getElementById("dongtu");

	var li = dongtu.getElementsByTagName("li");
	var boos = document.querySelector(".boos");
	for(var i = 0; i < li.length; i++) {
		var img = li[i].children[0];
		img.onclick = function() {
			var ul = this.parentNode.parentNode;
			pic1.src = this.src;
			for(var i = 0; i < li.length; i++) {
				this.parentNode.parentNode.children[i].className = ""
			}
			this.parentNode.className = "act";
			var Left = this.parentNode.offsetLeft;
			animate(ul, {
				left: -Left
			});

			//点击之后复制图片
			//得到此时点击的图片
			var IMGparent = this.parentNode; //父级
			var IMG = IMGparent.querySelector("img");
			var copyIMG = IMG.cloneNode(); //获得点击的图片
			pic1.parentNode.appendChild(copyIMG);
			copyIMG.className = "copyIMG"
			//把图片放到点击的位置
			copyIMG.style.position = "absolute";

			copyIMG.style.left = 75 + "px";
			copyIMG.style.top = 80 + "px";
			copyIMG.style.width = 250 + "px";
			copyIMG.style.height = 240 + "px";

		}
	}

	var btnFly = document.querySelector("#btn_fly");

	btnFly.onclick = function() {

		var copyIMG = document.querySelector(".copyIMG");
		if(copyIMG === null) {
			return
		}
		animate(copyIMG, {
			top: -150,
			left: 700,
			width: 10,
			height: 10,
		}, function() {

			copyIMG.parentNode.removeChild(copyIMG)

		})

	}
	//-------------------9.7-------------------------//
	//购物车的动画效果
	//实现左右
	var iLeft = document.querySelector("#iLeft");
	var iRight = document.querySelector("#iRight");

	//用面向对象的方法做
	//描述对象
	function Carousel(opt) {
		this.ele = opt.ele || ".boxs",
			this.imgs = opt.imgs,
			//索引值
			this.index = 0,
			//滚动方向
			this.direction = opt.direction || "top",
			//滚动时间
			this.duration = opt.duration || 2000,

			//滚动时间
			this.speed = opt.speed || -10,

			this.page = opt.page || 'true',

			this.seamless = opt.seamless || 'true'

	}
	//定义方法
	Carousel.prototype = {
		constructor: Carousel,
		init: function() {
			this.ele = document.querySelector(this.ele);
			var dongtu = document.getElementById("dongtu");
			var li = dongtu.getElementsByTagName("li");

			dongtu.style.width = dongtu.children.length * 70 + 'px';
			//鼠标移入轮播停止
			this.ele.onmouseenter = () => {
				this.stop();

			};
			//鼠标离开轮播继续
			this.ele.onmouseleave = () => {
				this.move();
			};
			iLeft.onmouseenter = () => {
				this.stop();
			}
			iRight.onmouseenter = () => {
				this.stop();
			}
			iLeft.onclick = () => {
				// console.log(6666)
				this.iLeft();
			};
			iRight.onclick = () => {
				this.iRight();
			};

			return this;
		},
		//移动函数
		move: function() {
			this._createTimer();
			return this;
		},
		stop: function() {
			clearInterval(this.timer);
			return this;
		},

		_createTimer: function() {
			this.timer = setInterval(this.autoPlay.bind(this), this.duration)
		},
		autoPlay: function() {
			this.index++;
			this.showTimer();
		},

		//fenghzuang
		showTimer: function() {
			var ul = this.ele.querySelector("ul")
			if(this.index > ul.children.length - 5) {
				this.index = 0
			};
			if(this.index < 0) {
				this.index = ul.children.length - 5
			};
			//目标值
			var arrt = {};
			arrt.left = -(+ul.children[0].offsetWidth) * this.index;

			animate(ul, arrt);
		},
		//向左的操作
		iLeft: function() {
			this.index += 4;
			this.showTimer()
		},
		iRight: function() {
			this.index -= 4;
			this.showTimer();
		}

	}
	new Carousel({}).init().move();

	//----------------------------9.7-----------------------//
	var size = document.getElementById("size");
	var color = document.getElementById("color");
	var lis = size.getElementsByTagName("li");
	var lis1 = color.getElementsByTagName("li");
	var zongjia = document.getElementsByClassName("zongjia")[0];
	for(var i = 0; i < lis.length; i++) {
		lis[i].onclick = function() {
			for(var i = 0; i < lis.length; i++) {
				lis[i].className = "";
			}
			this.className = "active"
		}
	}
	for(var i = 0; i < lis1.length; i++) {
		lis1[i].onclick = function() {
			for(var i = 0; i < lis1.length; i++) {
				lis1[i].className = "";
			}
			this.className = "active"
		}
	}
	var i1 = document.getElementById("i1");
	var i2 = document.getElementById("i2");
	var input1 = document.getElementById("input1");
	var inputNum = 0;
	var ss = "119.99 py.&times" + inputNum + "=" + 119.99 * input1.value + "py.";
	zongjia.innerHTML = ss
	i1.onclick = function() {
		input1.value = inputNum;
		inputNum++;
		var ss = 119.99 * input1.value
		zongjia.innerHTML = "119.99 py.&times" + input1.value + "=" + ss.toFixed(2) + "py.";
	}
	i2.onclick = function() {
		if(inputNum <= 0) {
			return
		}
		inputNum--;
		input1.value = inputNum;
		var ss = 119.99 * input1.value
		zongjia.innerHTML = "119.99 py.&times" + input1.value + "=" + ss.toFixed(2) + "py.";
	}
	var datalist = [{
			"imgurl": "../img/160.jpg",
			"title": "Bottega Veneta/葆蝶家 女士牛皮粉色钱包 114076 V0041 6811",
			"price": 5186,
			"sale": 5000,
			"guid": "g001",
		},
		{
			"imgurl": "../img/161.jpg",
			"title": "Bottega Veneta/葆蝶家 时尚拼色小羊皮手提包",
			"price": 21128,
			"sale": 1128,
			"guid": "g002",
		},
		{
			"imgurl": "../img/162.jpg",
			"title": "Bottega Veneta/葆蝶家 BV男包手拿包羊皮 224053 V4651 1000",
			"price": 10461,
			"sale": 998,
			"guid": "g003",
		},
		{
			"imgurl": "../img/163.jpg",
			"title": "Bottega Veneta/葆蝶家手提包",
			"price": 15278,
			"sale": 15277,
			"guid": "g004",
		},
		{
			"imgurl": "../img/164.jpg",
			"title": "[16秋冬]Bottega Veneta/葆蝶家 女士 羊皮 编织纹理 单肩包 DU",
			"price": 23644,
			"sale": 2998,
			"guid": "g005",
		},
		{
			"imgurl": "../img/160.jpg",
			"title": "Bottega Veneta/葆蝶家 女士牛皮粉色钱包 114076 V0041 6811",
			"price": 5186,
			"sale": 5000,
			"guid": "g001",
		},
		{
			"imgurl": "../img/161.jpg",
			"title": "Bottega Veneta/葆蝶家 时尚拼色小羊皮手提包",
			"price": 21128,
			"sale": 1128,
			"guid": "g002",
		},
		{
			"imgurl": "../img/162.jpg",
			"title": "Bottega Veneta/葆蝶家 BV男包手拿包羊皮 224053 V4651 1000",
			"price": 10461,
			"sale": 998,
			"guid": "g003",
		},
		{
			"imgurl": "../img/163.jpg",
			"title": "Bottega Veneta/葆蝶家手提包",
			"price": 15278,
			"sale": 15277,
			"guid": "g004",
		},
		{
			"imgurl": "../img/164.jpg",
			"title": "[16秋冬]Bottega Veneta/葆蝶家 女士 羊皮 编织纹理 单肩包 DU",
			"price": 23644,
			"sale": 2998,
			"guid": "g005",
		}, {
			"imgurl": "../img/160.jpg",
			"title": "Bottega Veneta/葆蝶家 女士牛皮粉色钱包 114076 V0041 6811",
			"price": 5186,
			"sale": 5000,
			"guid": "g001",
		},
		{
			"imgurl": "../img/161.jpg",
			"title": "Bottega Veneta/葆蝶家 时尚拼色小羊皮手提包",
			"price": 21128,
			"sale": 1128,
			"guid": "g002",
		},
		{
			"imgurl": "../img/162.jpg",
			"title": "Bottega Veneta/葆蝶家 BV男包手拿包羊皮 224053 V4651 1000",
			"price": 10461,
			"sale": 998,
			"guid": "g003",
		},
		{
			"imgurl": "../img/163.jpg",
			"title": "Bottega Veneta/葆蝶家手提包",
			"price": 15278,
			"sale": 15277,
			"guid": "g004",
		},
		{
			"imgurl": "../img/164.jpg",
			"title": "[16秋冬]Bottega Veneta/葆蝶家 女士 羊皮 编织纹理 单肩包 DU",
			"price": 23644,
			"sale": 2998,
			"guid": "g005",
		}
	];
	var arr_goods = [];
	var cookies = document.cookie;
	if(cookies.length > 0) {
		cookies = cookies.split('; ');
		cookies.forEach(function(item) {
			var arr = item.split('=');
			if(arr[0] == 'cartlist') {
				arr_goods = JSON.parse(arr[1]);
			}
		})
	}
	var nist = dongtu.children;
	for(var i = 0; i < nist.length; i++) {
		nist[i].children.idx = i;
		nist[i].onclick = function() {

			var guid = this.getAttribute('data-guid');

			// console.log(guid);

			for(var i = 0; i < arr_goods.length; i++) {
				// console.log(arr_goods[i].guid,guid)
				if(arr_goods[i].guid === guid) {
					arr_goods[i].qty++;
					break;
				}
			}

			if(i === arr_goods.length) {
				var goods = {
					guid: datalist[this.children.idx].guid,
					title: datalist[this.children.idx].title,
					imgurl: datalist[this.children.idx].imgurl,
					price: datalist[this.children.idx].price,
					sale: datalist[this.children.idx].sale,
					qty: 1
				}
				arr_goods.push(goods);
			}
			document.cookie = 'cartlist=' + JSON.stringify(arr_goods);
		}
	}
	var Special = document.getElementById('Special');
	var box1 = document.getElementById('box1');
	var ul1_li = box1.getElementsByTagName('li');

	var box2 = document.getElementById('box2');
	var ul2 = box2.getElementsByTagName('ul');

	for(var i = 0; i < ul1_li.length; i++) {
		if(i > 0) {
			ul2[i].style.display = 'none';
		}
		ul1_li[i].idx = i;
		ul1_li[i].onclick = function() {
			var idx = this.idx;
			for(var j = 0; j < ul1_li.length; j++) {
				if(j === idx) {
					ul1_li[j].className = 'active';
					ul2[j].style.display = 'block';
				} else {
					ul1_li[j].className = '';
					ul2[j].style.display = 'none';
				}
			}
		}
	}
	var add = document.getElementsByClassName('add')[0];
	add.onclick = function() {
		add.style.backgroundColor = 'pink';
	}
	add.ondblclick = function() {
		add.style.backgroundColor = '#505050';
	}

	var yanzheng = document.getElementById('yanzheng');
	var star = document.getElementById('star');
	var starColor = star.getElementsByTagName('span');

	// 循环获取验证码
	yanzheng.innerHTML = yanzhengma(yanzheng.innerHTML.length);
	// 验证码
	function yanzhengma(num) {
		if(num === 0) {
			num = 4;
		}
		var arr = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
		var res = '';
		for(var i = 0; i < num; i++) {
			var idx = parseInt(Math.random() * arr.length);
			res += arr[idx];
		}
		return res;
	}

	// 评分1~5星
	yanzheng.onclick = function() {
		yanzheng.innerHTML = yanzhengma(yanzheng.innerHTML.length);
	}

	for(var i = 0; i < starColor.length; i++) {
		starColor[i].idx = i;
		starColor[i].onclick = function() {
			var idx = this.idx;
			for(var j = 0; j < idx + 1; j++) {
				starColor[j].className = 'yellow';
			}
			for(var m = idx + 1; m < starColor.length; m++) {
				starColor[m].className = 'grey';
			}
		}
	}

})