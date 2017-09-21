document.addEventListener('DOMContentLoaded',function(){
    var datalist = document.querySelector('#datalist');
    var showslist = document.querySelector('#showslist');

    function sort(){
        var goodslist = JSON.parse(xhr_wly.responseText);
        for(i=0;i<goodslist.length-1;i++){
            for(j=0;j<goodslist.length-i-1;j++){
              if(goodslist[j].ourPrice>goodslist[j+1].ourPrice){
                var temp
                temp=goodslist[j];;
                goodslist[j]=goodslist[j+1];
                goodslist[j+1]=temp;
              }
            }
        }
        return goodslist;
     }
    function sortBack(){
          return sort().reverse();
    }
        // 定义点击的次数
        var time=1;
        //点击实现价格排序
        rank.onclick=function(e){  
            // 单数，实现降序
            if(time%2===1){
            var goods=sort().map(function(item){
            return '<li class="wly_li"><img src="'+item.imgurl+'"alt=""/><p>'+item.name+'</p><span class="listPrice">'+item.listPrice+'</span><span class="ourPrice">$'+item.ourPrice+'</span><p class="save">'+item.save+'</p><a href="#">'+item.form+'<i class="iconfont icon-arrow-right"></a></i></li>'
            }).join('');
            datalist.innerHTML = goods;
            
            }
            // 双数，实现升序
            if(time%2===0){
                var goods=sortBack().map(function(item){
                return '<li class="wly_li"><img src="'+item.imgurl+'"alt=""/><p>'+item.name+'</p><span class="listPrice">'+item.listPrice+'</span><span class="ourPrice">$'+item.ourPrice+'</span><p class="save">'+item.save+'</p><a href="#">'+item.form+'<i class="iconfont icon-arrow-right"></a></i></li>'
                }).join('');
                datalist.innerHTML = goods;
            }
            time++;
            var wly_lis = document.querySelectorAll('.wly_li');
            for(let i=0;i<wly_lis.length;i++){
                wly_lis[i].children[0].onclick = function(){
                var goodslist = JSON.parse(xhr_wly.responseText);
                    data = goodslist[i];
                    xiangqingye();
                }
                function xiangqingye(){
                  var params='';
                  // 对象遍历
                  for(var attr in data){
                     params +=attr+'='+data[attr]+'&';
                  }
                  // 删除多余的&
                  params=params.slice(0,-1);
                  location.href="home_location.html?"+params;
               }
            }
            e.preventDefault();
        }
    //获取商品信息
    var xhr_wly = new XMLHttpRequest();
    var xhr_wly_li = new XMLHttpRequest();
    xhr_wly.onreadystatechange = function(){
        if(xhr_wly.readyState == 4){
            var goodslist = JSON.parse(xhr_wly.responseText);
            var ul_wly = document.createElement('ul');
            ul_wly.innerHTML = goodslist.map(function(item,idx){
                return `<li>
                            <img src="${item.imgurl}" id="message_right${idx}" >
                            <p>${item.name}</p>
                            <span class="listPrice">${item.listPrice}</span>
                            <span class="ourPrice">${item.ourPrice}</span><p class="save">${item.save}</p>
                            <a href="#">${item.form}<i class="iconfont icon-arrow-right"></a></i>
                        </li>`
            }).join('');
            datalist.innerHTML = '';

            datalist.appendChild(ul_wly);

            var message_right0=document.getElementById('message_right0');
            var message_right1=document.getElementById('message_right1');
            var message_right2=document.getElementById('message_right2');
            var message_right3=document.getElementById('message_right3');
            var message_right4=document.getElementById('message_right4');
            var message_right5=document.getElementById('message_right5');
            var message_right6=document.getElementById('message_right6');
            var message_right7=document.getElementById('message_right7');
            var message_right8=document.getElementById('message_right8');
            var message_right9=document.getElementById('message_right9');
            var message_right10=document.getElementById('message_right10');
            var message_right11=document.getElementById('message_right11');
            var message_right12=document.getElementById('message_right12');
            var message_right13=document.getElementById('message_right13');
            var message_right14=document.getElementById('message_right14');
            var message_right15=document.getElementById('message_right15');
            var message_right16=document.getElementById('message_right16');
            var message_right17=document.getElementById('message_right17');

            message_right0.onclick=function(){
             // 获取张图片的数据
             data=goodslist[0];
             // console.log(message_right0);
             xiangqingye();
            }
            message_right1.onclick=function(){
             // 获取张图片的数据
             data=goodslist[1];
             xiangqingye();
            }

            message_right2.onclick=function(){
             // 获取张图片的数据
             data=goodslist[2];
             xiangqingye();
            }

            message_right3.onclick=function(){
             // 获取张图片的数据
             data=goodslist[3];
             // console.log(message_right0);
             xiangqingye();
            }

            message_right4.onclick=function(){
             // 获取张图片的数据
             data=goodslist[4];
             xiangqingye();
            }
            message_right5.onclick=function(){
             // 获取张图片的数据
             data=goodslist[5];
             xiangqingye();
            }
            message_right6.onclick=function(){
             // 获取张图片的数据
             data=goodslist[6];
             // console.log(message_right0);
             xiangqingye();
            }

            message_right7.onclick=function(){
             // 获取张图片的数据
             data=goodslist[7];
             // console.log(message_right0);
             xiangqingye();
            }

           message_right8.onclick=function(){
             // 获取张图片的数据
             data=goodslist[8];
             xiangqingye();
            }

            message_right9.onclick=function(){
             // 获取张图片的数据
             data=goodslist[9];
             // console.log(message_right0);
             xiangqingye();
            }

            message_right10.onclick=function(){
             // 获取张图片的数据
             data=goodslist[10];
             // console.log(message_right0);
             xiangqingye();
            }

          message_right11.onclick=function(){
             // 获取张图片的数据
             data=goodslist[11];
             xiangqingye();
            }

            message_right12.onclick=function(){
             // 获取张图片的数据
             data=goodslist[12];
             xiangqingye();
            }

            message_right13.onclick=function(){
             // 获取张图片的数据
             data=goodslist[13];
             // console.log(message_right0);
             xiangqingye();
            }

            message_right14.onclick=function(){
             // 获取张图片的数据
             data=goodslist[14];
             xiangqingye();
            }

            message_right15.onclick=function(){
             // 获取张图片的数据
             data=goodslist[15];
             xiangqingye();
            }

            message_right16.onclick=function(){
             // 获取张图片的数据
             data=goodslist[16];
             // console.log(message_right0);
             xiangqingye();
            }

            message_right17.onclick=function(){
             // 获取张图片的数据
             data=goodslist[17];
             // console.log(message_right0);
             xiangqingye();
            }
            function xiangqingye(){
              var params='';
              // 对象遍历
              for(var attr in data){
                 params +=attr+'='+data[attr]+'&';
              }
              // 删除多余的&
              params=params.slice(0,-1);
              location.href="home_location.html?"+params;
           }
        }

    }
    xhr_wly_li.onreadystatechange = function(){
        if(xhr_wly_li.readyState == 4){
            var goodslist2 = JSON.parse(xhr_wly_li.responseText);
            var ul_wly2 = document.createElement('ul');
            ul_wly2.innerHTML = goodslist2.map(function(item,idx){
                return `<li>
                        <img id="message${idx}" src="${item.imgurl}">
                        </li>
                        <li>
                            <span>${item.name}</span>
                        </li>
                        <li class="li_wly">
                            <span>${item.listPrice}</span>
                        </li>
                        <li class="li_wly2">
                            <span>${item.ourPrice}</span>
                        </li>
                        <li class="li_wly3">
                            <span>${item.form}</span>
                        </li>`

            }).join('');
            showslist.appendChild(ul_wly2);
            var message0=document.getElementById('message0');
            var message1=document.getElementById('message1');
            var message2=document.getElementById('message2');
            var date;
            message0.onclick=function(){
             // 获取张图片的数据
             data= goodslist2[0];
             // console.log(message0);
             xiangqingye();
            }

            message1.onclick=function(){
             // 获取张图片的数据
             data= goodslist2[1];
             xiangqingye();
            }

            message2.onclick=function(){
             // 获取张图片的数据
             data= goodslist2[2];
             xiangqingye();
            }
            function xiangqingye(){
              var params='';
              // 对象遍历
              for(var attr in data){
                 params +=attr+'='+data[attr]+'&';
              }
              // 删除多余的&
              params=params.slice(0,-1);

              location.href="home_location.html?"+params;
           }
        }
    }
    xhr_wly_li.open('get','../api/data/goodslist2.json',true);
    xhr_wly.open('get','../api/data/goodslist-wly.json',true);
    xhr_wly.send();
    xhr_wly_li.send();

})