// 第一种方式：
        // document.write('<div class="wrap"><div class="title"><h1>');
        // document.write('<span class="tit">图片新闻</span><i>PHOTOS</i><em></em>');
        // document.write('</h1></div><ul class="imgList clearfix"><li>');

        // 用变量去承载一个字符串
        var str = '<div class="wrap"><div class="title"><h1><span class="tit">图片新闻</span><i>PHOTOS</i><em></em></h1></div><ul class="imgList clearfix"><li><a href="#"><img src="./img/1.jpeg" alt=""><p>航拍江西九江多地城乡洪涝</p></a></li><li><a href="#"><img src="./img/2.jpeg" alt=""><p>航拍江西九江多地城乡洪涝洪涝洪涝洪涝洪涝洪涝洪涝</p></a></li><li><a href="#"><img src="./img/3.jpeg" alt=""><p>航拍江西九江多地城乡洪涝洪涝洪涝洪涝洪涝洪涝洪涝</p></a></li></ul></div>';
        // document.write(str);

        // 第三种方式：
        // 一个dom元素，你在js代码里获取到之后，就变成dom对象。
        // divDom, 这个变量里存储的是一个dom对象。
        var divDom = document.getElementById('newList');
        divDom.innerHTML = str;
