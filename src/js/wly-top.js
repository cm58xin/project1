document.addEventListener('DOMContentLoaded',function(){
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
                if(index>=length - 3){
                    index = length - 4;
                }else if(index<0){
                    index = length - 4;
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
            console.log(length);
///////////////邓厚锻     下面为9.17下午修改/////////////////////////
       var ulItem=document.querySelector('.ul1');

         var lis = ulItem.querySelectorAll("li");
        
       for(let i=0;i<lis.length;i++){
            lis[i].onmouseenter = function(){
                var targetTop = lis[i].firstElementChild; 
                
                animate(targetTop,{height:50})
                // targetTop.firstElementChild.style.color = "orange";
                targetTop.style.backgroundColor = "#333";
            };
            lis[i].onmouseleave = function(){
                var targetTop = lis[i].firstElementChild; 
                lis[i].style.border = "";
                animate(targetTop,{height:0})
                targetTop.firstElementChild.style.color = "";
                targetTop.style.backgroundColor = "";
            };

        }
///////////////邓厚锻     上面为9.17下午修改/////////////////////////


///////////////邓厚锻/////////////////////////

    /*---------------------吸顶部分--------------------*/
    
                         /*头顶菜单的吸顶*/
    // var header_2_wl = document.getElementById("header_2_wl")
    // var main_wl = document.getElementById("main_wl")
                        /*头顶菜单的吸顶*/
    var nav_ul_2 = document.querySelector('.nav_ul_2');
    var ul2_a = document.querySelector('.ul2_a');
    var span_wly = ul2_a.children[0];
    window.onscroll = function(){
                    /*头顶菜单的吸顶*/
        //  if(scrollY>120){
        //     header_2_wl.style.position = "fixed";
        //     header_2_wl.style.top = 0;
        //     header_2_wl.style.left = 0;
        //     header_2_wl.style.right = 0;
        //     header_2_wl.style.opacity = 0.8;
        //     header_2_wl.style.zIndex = 999;
        //     header_2_wl.style.boxShadow ="0px 5px 5px #cfcfcf";
        //     main_wl.style.marginTop = "68px";

        // }
        // if(scrollY<=120){
        //     header_2_wl.style.position = "relative";
        //     header_2_wl.style.top = 0;
        //     header_2_wl.style.left = 0;
        //     header_2_wl.style.right = 0;
        //     header_2_wl.style.opacity = 1;
        //     header_2_wl.style.boxShadow ="0px 0px 0px #888888"
        //     main_wl.style.marginTop = "0px";
        //     header_2_wl.style.zIndex = 990;

        // }
                         /*头顶菜单的吸顶*/
        if(scrollY>88 && scrollY<2080){
            nav_ul_2.style.position = "fixed";
            ul2_a.style.position = 'fixed';
            ul2_a.className = 'ul2_a';
            span_wly.className = 'span_wly';
            ul2_a.style.top = 0 +'px';
            ul2_a.style.display = 'block';
            nav_ul_2.style.top = 30 +'px';
            nav_ul_2.style.zIndex = 999;
        }else{
            nav_ul_2.style.position = "relative";
            span_wly.className = '';
            nav_ul_2.style.top = 0 +'px';
            ul2_a.style.position = "relative";
        }
    }

/*-------------------二级菜单飞入效果（面向对象）----------------------*/
    var autoFlow = {
        ul_wly2:document.querySelector('.nav_ul2'),
        ul_wly3:document.querySelector('.nav_ul3'),
        ul_wly4:document.querySelector('.nav_ul4'),
        ul_wly5:document.querySelector('.nav_ul5'),
        ul_wly6:document.querySelector('.nav_ul6'),
        ul_wly7:document.querySelector('.nav_ul7'),
        nav_ul_2:document.querySelector('.nav_ul_2'),
        lis_wly:nav_ul_2.children,
        li_wly1:document.querySelector('#li1'),
        li_wly2:document.querySelector('#li2'),
        li_wly3:document.querySelector('#li3'),
        li_wly4:document.querySelector('#li4'),
        li_wly5:document.querySelector('#li5'),
        li_wly6:document.querySelector('#li6'),
        init:function(){
            var self = this;
            this.li_wly1.onmouseover = function(){
                animate(self.ul_wly2,{top:0});
            }
            this.li_wly1.onmouseout = function(){
                animate(self.ul_wly2,{top:200});
            }
            this.li_wly2.onmouseover = function(){
                animate(self.ul_wly3,{top:-79});
            }
            this.li_wly2.onmouseout = function(){
                animate(self.ul_wly3,{top:0});
            }
            this.li_wly3.onmouseover = function(){
                animate(self.ul_wly4,{top:-79});
            }
            this.li_wly3.onmouseout = function(){
                animate(self.ul_wly4,{top:0});
            }
            this.li_wly4.onmouseover = function(){
                animate(self.ul_wly5,{top:-79});
            }
            this.li_wly4.onmouseout = function(){
                animate(self.ul_wly5,{top:0});
            }
            this.li_wly5.onmouseover = function(){
                animate(self.ul_wly6,{top:-79});
            }
            this.li_wly5.onmouseout = function(){
                animate(self.ul_wly6,{top:0});
            }
            this.li_wly6.onmouseover = function(){
                animate(self.ul_wly7,{top:-79});
            }
            this.li_wly6.onmouseout = function(){
                animate(self.ul_wly7,{top:0});
            }
        }
    }
    autoFlow.init();

    function animate(ele,opt,callback){
        let timerLen = 0;

        // 遍历opt
        for(var attr in opt){
            // 如何把attr限定到局部作用域中
            // ES6解决方案：用let声明attr
            // 传统解决方案：利用函数传参

            createTimer(attr);

            timerLen++;
        }

        function createTimer(attr){
            // 为每个属性设置不同的定时器(关键1)
            let timerName = attr + 'timer';
            let target = opt[attr];

            clearInterval(ele[timerName]);

            // 把定时器与Dom关联（关键2）
            ele[timerName] = setInterval(()=>{
                // 先获取当前值
                let current = getComputedStyle(ele)[attr];//String:100px,50rem,0.5,60deg

                // 提取数值：单位
                // 根据当前值提取单位(单位在current最后面)
                let unit = current.match(/[a-z]+$/);
                if(unit){
                    current = current.substring(0,unit.index)*1;
                    unit = unit[0]
                }else{
                    unit = '';
                    current *= 1;
                }

                // 计算速度
                let speed = (target - current)/10;

                // 处理speed值，防止speed为小数而造成定时器无法完成的情况
                // 0.3=>1,-0.3=>-1
                speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);


                if(attr === 'opacity'){
                    speed = speed>0 ? 0.05 : -0.05;
                }

                // 动画完成
                if(current === target){
                    clearInterval(ele[timerName]);
                    current = target - speed;

                    timerLen--;

                    if(typeof callback === 'function' && timerLen === 0){
                        callback();
                    }
                }

                ele.style[attr] = current + speed + unit;
            },20)
        }
    }
   

})


