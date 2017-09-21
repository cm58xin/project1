document.addEventListener('DOMContentLoaded',function(){
    var wly_datalist = document.querySelector('#datalist');
    var wly_page = document.querySelectorAll('.page');
    var wly_page2 = document.querySelectorAll('.wly_page2');
    // 点击分页获取相应信息
    var pageNo = 1;
    var qty = 16;
    // 获取数据
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
                var res = JSON.parse(xhr.responseText);
                var ul_wly = document.createElement('ul');
                ul_wly.innerHTML = res.data.map(function(item,idx){
                return `<li class="wly_li">
                            <img src="${item.imgurl}" id="message_right${idx}" >
                            <p>${item.name}</p>
                            <span class="listPrice">${item.listPrice}</span>
                            <span class="ourPrice">${item.ourPrice}</span><p class="save">${item.save}</p>
                            <a href="#">${item.form}<i class="iconfont icon-arrow-right"></a></i>
                        </li>`
                }).join('');
                datalist.innerHTML= '';
                datalist.appendChild(ul_wly);
                var xhr2 = new XMLHttpRequest();

                var wly_lis= document.querySelectorAll('.wly_li');
                for(let i=0;i<wly_lis.length;i++){
                    wly_lis[i].children[0].onclick = function(){
                        var res2 = JSON.parse(xhr2.responseText);
                        var goodslist = JSON.parse(xhr2.responseText);
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
                    xhr2.open('get','../api/data/goodslist-wly.json',true);
                    xhr2.send();
                }
            }
        }
        
        xhr.open('post','../api/wly2.php',true);
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
        xhr.send('pageNo='+pageNo + '&qty='+qty);

        
        // 点击分页获取相应信息---顶部的分页
        wly_page2[0].className = 'wly_active';
        for(let i=0;i<wly_page2.length;i++){
            wly_page2[i].onclick = function(e){
                pageNo  = wly_page2[i].innerText;
                if(wly_page2[i].innerText == 'Next >' && i<5){
                    pageNo = wly_page2[i].innerHTML+1;
                }
                xhr.open('post','../api/wly2.php',true);
                xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
                xhr.send('pageNo='+pageNo + '&qty='+qty);
                for(var j=0;j<wly_page2.length;j++){
                    if(j==i){
                        wly_page2[j].className = 'wly_active';
                    }else{
                        wly_page2[j].className = '';

                    }
                }
            }
            
        }
        // 点击分页获取相应信息---底部的分页
        wly_page[0].className = 'wly_active';
        for(let i=0;i<wly_page.length;i++){
            wly_page[i].onclick = function(e){
                pageNo  = wly_page[i].innerText;
                if(wly_page[i].innerText == 'Next'){
                    console.log(wly_page[i]);
                    pageNo = wly_page[i].innerHTML+1;
                }
                xhr.open('post','../api/wly2.php',true);
                xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
                xhr.send('pageNo='+pageNo + '&qty='+qty);
                for(var j=0;j<wly_page.length;j++){
                    if(j==i){
                        wly_page[j].className = 'wly_active';
                        wly_page[0].className = '';

                    }else{
                        wly_page[j].className = '';
                        wly_page[0].className = '';
                        

                    }
                }
            }
            
        }
        
})