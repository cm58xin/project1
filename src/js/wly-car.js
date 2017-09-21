 window.onload = function(){
        var cartList = document.getElementById('cartList');
        var total_span = document.getElementsByClassName('total_span')[0];
        
         var cookies = document.cookie;
         var cartlist = [];
         if(cookies.length>0){
            // 拆分成数组
            cookies = cookies.split('; ');
            cookies.forEach(function(item){
                var arr = item.split('=');
                if(arr[0] === 'cartlist'){
                    cartlist = JSON.parse(arr[1]);
                }
            });
         }
         render();
         function setCookie(name,val,expires,path){
            // cookie名/值（必填）
            var str_cookie = name + '=' + val;
            // cookie有效期
            if(expires){
                str_cookie += ';expires=' + expires.toUTCString();
            }
            // cookie路径
            if(path){
                str_cookie += ';path=' + path;
            }
            document.cookie = str_cookie;
        }
      
        //删除商品
        var res = [];
        var idx;
        cartList.onclick = function(e){
            var input = document.getElementsByClassName('num')[0];
            var _num = input.value;
            e = e || window.event;
            var target = e.target || e.srcElement;
            if(target.className === 'btn'){
                // 获取当前li
                var currentLi = target.parentNode.parentNode;
                var guid = currentLi.getAttribute('data-guid');
                // 删除cookie
                // 1）先找到cookie中对应的数据，并删除它
                // 2）重写cookie
                cartlist.forEach(function(item,idx){
                    if(item.guid === guid){
                        cartlist.splice(idx,1);
                    }
                });
                var now = new Date();
                now.setDate(now.getDate()+8);
                setCookie('cartlist',JSON.stringify(cartlist),now);
                render();
            }
        }
        //存储qty数量
        total_sale;
        function render(){
        // 计算总价
            var totalPrice = 0;
            var ul = document.createElement('ul');
            ul.innerHTML = cartlist.map(function(item){
            	
            totalPrice += item.sale * item.qty;
            return '<li class="product" data-guid="'+item.guid+'">'+'<div class="date_left">'
                + '<img src="'+item.imgurl+'">'+ '<h4>'+item.title+'</h4>'+'<p class="id">ID:#<span>'+item.guid+'</span></p><p class="size">Size:Default<span></span></p>'
                +'</div><div class="input_in">'+'<button class="btnLess"><span>-</span></button>'+'<input type="text" class="num" value='+item.qty+'>'+'<button class="btnMore"><span>+</span></button>'+'</div>'+ '<p  class="price"><del>'+item.price+' py6.'+'</del><span class="sale">'+item.sale+' py6.'+'</span></p>'+ '<p class="price price2">'+item.sale+' py6.'+'<span class="sale2">you save '+(item.price - item.sale)+' py6.'+'</span></p>'+'<p><button class="btn">&times;</button></p>'
                + '</li>'
             }).join('');
            cartList.innerHTML = '';
            cartList.appendChild(ul);
            total_sale = totalPrice;
            total_span.innerHTML =total_sale.toFixed(2);
        }
        
          //按钮减少购买商品数量
        var btnLess = document.getElementsByClassName('btnLess');
        var num = document.getElementsByClassName('num')[0];
        for(var i=0;i<btnLess.length;i++){
            btnLess[i].onclick = function(){
            	//获取py6的价钱
            	var currentMoney =this.parentNode.nextElementSibling.children[1].innerHTML.slice(0,-5);
                var _num = this.nextElementSibling.value;
                    if(_num==0){
                        return;
                    }else{
                        _num--;
                        this.nextElementSibling.value = _num;
                        total_span.innerHTML = (Number(total_span.innerHTML)-Number(currentMoney)).toFixed(2)
                        //存取cookie
//                      var date = new Date();
//                      date = date.setDate(date.getDate()+7);
//                      document.cookie = "zzz="+this.nextElementSibling.value+";expires="+date.toString();
                    }
            }
        }
        //按钮增加购买商品数量
        var btnMore = document.getElementsByClassName('btnMore');
        var num = document.getElementsByClassName('num');

        for(var i=0;i<btnLess.length;i++){
            btnMore[i].onclick = function(){
        var currentMoney =this.parentNode.nextElementSibling.children[1].innerHTML.slice(0,-5);
                var _num = this.parentNode.children[1].value;
                    if(_num==1000){
                        return;
                    }else{
                        _num++;
                        this.parentNode.children[1].value = _num;
                        total_span.innerHTML = (Number(total_span.innerHTML)+Number(currentMoney)).toFixed(2)
                         //存取cookie
            }
        }
    }
    }