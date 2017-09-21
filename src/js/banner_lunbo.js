 document.addEventListener('DOMContentLoaded',()=>{
              let  banner=document.querySelector('#banner');
              let  banner_ul=document.querySelector('#banner_ul');
              let  lis=banner_ul.querySelectorAll('li');
             
            // 复制第一张到最后
            var copyItem = lis[0].cloneNode(true);
            banner_ul.appendChild(copyItem);

            // console.log(banner_ul)
              // console.log(lis);
              // 开始的默认值
              var index=0;
              var itemwidth=banner.clientWidth;
              // console.log(itemwidth);
              var num=lis.length;
               // console.log(num);

               var s_timer;


              var btn1=document.querySelector('.btn1');
              var btn2=document.querySelector('.btn2');
              
            //下一张；因为设置往左边是index++方向
          
           // 鼠标放在btn1zhan暂停计时器，移开再启动
                banner.onmouseenter=function(){
                    clearInterval(f_timer);
                    // console.log(666)
                }

                banner.onmouseleave=function(){
                   f_timer= setInterval(()=>{
                    // console.log(666)             
                      index++;
                      left();
                      gaoliang();
                      autoplay();
                    },3000);
                }
                  

              btn1.onclick=function(){  
                         index++;  
                         left();
                         gaoliang();                           
                        autoplay();         
              }

                   
            
            // 上一张；因为设置往左边是index++方向；右边index--
                btn2.onclick=function(){
                     // console.log(index)
                   index--;
                   right();
                   gaoliang();
                   autoplay();
                }       
              
                  
              var f_timer= setInterval(()=>{
                 // console.log(6666);
                      index++;
                      left();
                      autoplay();
                      gaoliang();
              },3000);


             function left(){
                if(index>=num){
                    banner_ul.style.left=0;
                      index=1;
                   }else if(index<0){
                    index = num-1;
                }
             }

           function  right(){
             if(index<=0){
                     index=num-1;
                      banner_ul.style.left=-itemwidth*index+'px';
                }
           }


              function autoplay(){
                    // console.log(666)   
                   var target=-itemwidth*index;
                   clearInterval(s_timer);//解决轮播图跳动，防止切换页面后多个定时器一起工作出现跳动;

                 s_timer=setInterval(()=>{
                          // 获取当前的左边距离
                        let left=banner_ul.offsetLeft;

                        // 缓冲速度
                        let speed=(target-left)/10;

                        // 不让速度的正负值为零
                        speed=speed>0?Math.ceil(speed):Math.floor(speed);

                       if(target===left){
                        clearInterval(s_timer);
                         left=target-speed;
                       }

                     banner_ul.style.left=left+speed+'px';

                 },30)
              }


                 //***************************** 添加页码************************
                            var page = document.createElement('div');
                            page.className = 'page';
                            for(var i=1;i<num;i++){
                                var span = document.createElement('span');
                                span.innerText = i;
                                if(i===index+1){
                                    span.className = 'active';
                                }
                                page.appendChild(span);

                            }
                            banner.appendChild(page);


                function  gaoliang(){
                     // 高亮分页
                            for(var i=0;i<page.children.length;i++){
                                    page.children[i].className = '';
                                }

                            if(index<num-1){
                                 page.children[index].className = 'active';
                            }else{
                                    page.children[0].className = 'active';
                                }
                }


                // 鼠标悬停在对应的页码上****************************************
               for(let i=0;i<page.children.length;i++){
                    page.children[i].onmouseover=function(){ 
                        if(index!=i){
                            page.children[index].className='';
                        }
                            // console.log( page.children[i])   
                            page.children[i].className='active over';
                            index=i; 
                            banner_ul.style.left=-itemwidth*index+'px';    
                    } 
               }
                 
               


        })