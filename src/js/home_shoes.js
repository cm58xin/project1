document.addEventListener('DOMContentLoaded',()=>{
        let   main_left_t_ul1=document.querySelector('.main_left_t_ul1');
        let navitem=main_left_t_ul1.children;
        // 遍历绑定事件
        for(let i=0;i<navitem.length;i++){
            // 一级菜单链接
            var link=navitem[i].firstElementChild;
            console.log(link)
            link.onclick=function(e){
                console.log(i)
                // 二级菜单
                var subNav=this.nextElementSibling;
                var currentHeight=parseInt(getStyle(subNav,'height'));
                // console.log(currentHeight)
                if(currentHeight==0){
                    // console.log(666)
                    animate(subNav,{height:107});
                }
                else{
                    animate(subNav,{height:0})
                }
                    e.preventDefault();
            }
        }
})