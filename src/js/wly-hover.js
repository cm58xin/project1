document.addEventListener('DOMContentLoaded',function(){
    var ul2_a_wly = document.querySelector('.ul2_a'); 
    var ul2_nav_wly = document.querySelector('.nav_ul_2');
    var nav_ul_2 = document.querySelector('.nav_ul_2');
    var nav_ul_1_liya = document.querySelector('.nav_ul_1_liya');
    nav_ul_2.style.display ='none';
    nav_ul_1_liya.onmouseover = function(){
        ul2_nav_wly.style.display = 'block';
        ul2_nav_wly.style.zIndex = 999;
        ul2_nav_wly.style.background = '#ccc';
    }
    nav_ul_1_liya.onmouseout = function(){
        ul2_nav_wly.style.display = 'none';
    }
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