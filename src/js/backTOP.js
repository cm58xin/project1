document.addEventListener('DOMContentLoaded',function(){

  var backtop=document.querySelector('.xwpg');
  console.log(backtop)
    
     backtop.onclick=()=>{
        var time=setInterval(()=>{
            let speed=80;
            var height=window.scrollY;

            speed=Math.ceil(speed/10);

            height-=speed;

            if(window.scrollY<100){
                clearInterval(time);
            }
            window.scrollTo(0, height);
        },3)
     }






})