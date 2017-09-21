window.onload=function(){
        var Special=document.getElementById('Special');
        var box1=document.getElementById('box1');
        var ul1_li=box1.getElementsByTagName('li');
          console.log(ul1_li);
        var box2=document.getElementById('box2');
       var ul2=box2.getElementsByTagName('ul');
       console.log(ul2);
       for(var i=0;i<ul1_li.length;i++){
               if(i>0){
                    ul2[i].style.display='none';
               }
               ul1_li[i].idx=i;
               ul1_li[i].onclick=function(){
                 var idx=this.idx;
                 for(var j=0;j<ul1_li.length;j++){
                    if(j===idx){
                        ul1_li[j].className='active';
                        ul2[j].style.display='block';
                    }
                    else{
                        ul1_li[j].className='';
                        ul2[j].style.display='none';
                    }
                 }
               }
       }     
            var add=document.getElementsByClassName('add')[0];
            add.onclick=function(){
                add.style.backgroundColor='pink';
            }
             add.ondblclick=function(){
                add.style.backgroundColor='#505050';
            }
            

}