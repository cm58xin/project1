/* 
* @Author: Marte
* @Date:   2017-09-09 12:02:19
* @Last Modified by:   Marte
* @Last Modified time: 2017-09-17 16:10:43
*/

document.addEventListener('DOMContentLoaded',function(){
             // console.log(666)  
         var  HOT_left =document.querySelector('.HOT_left ');
           

         var  HOT_right=document.querySelector('.HOT_right');

         var HOT_items=document.querySelector('.HOT_items');
         var container=HOT_items.querySelector('.container');
         // console.log(container);
         var  h_u1=container.querySelector('.h_u1');
         // console.log(h_u1)
         var  lis=container.querySelectorAll('li');
            
         var num=lis.length;

         var index=0;
         // console.log(index);
         // console.log(num);
         var iteamwidth=334;
        
          var s_timer;
         // setInterval(function(){
         //         // console.log(666)
         //         // 
         //        yidong();
         // },3000)

         HOT_left.onclick=function(){
            left();
            yidong();
         } 

         HOT_right.onclick=function(){
             right()
            yidong();
         } 


             function left(){
                index=index+2;
                    if(index>=8){  
                        index=8;
                    }
             }


         function  right(){
             index=index-2;
                if(index<=0){                 
                    index=index+2;
                }
         }
            
      
         function yidong(){
            var target=-iteamwidth*index;
               clearInterval(s_timer);
           s_timer= setInterval(()=>{
                var left=h_u1.offsetLeft;
                var speed=(target-left)/10;
                 // console.log(left);
                speed=speed>0?Math.ceil(speed):Math.floor(speed);          
                if(left===target){
                     clearInterval(s_timer);
                     left=target-speed;
                }
               h_u1.style.left=left+speed+'px';
            },50)
         }

})