!function () {
	let cssCode = window.cssCode = `
/*22班的同学们好啊！
好久不见甚是想念。*/
/*浏览之前，先改一下格式orz*/
*{
	transition: all .5s;
}
/*先把背景颜色改成我最喜欢的紫色哈哈哈*/
html{
	background: #F6EAFC;
}
/*不妨让我们给它加一个边框吧*/
#code{
    border: 2px solid #AC25F0;
    padding: 20px;
}
/*改一下字体颜色？*/
#code{
    color: #0930FC;
}
/*来点动画吧*/
#code{
    animation: Myfirst 4s linear infinite;
}
/*现在让你们了解一下我们的学校吧*/
/*Welcome to TUPJ.*/
/*那么先让我转换一下页面吧*/
`;
	let htmlCode = window.htmlCode =`
#code{
     display:inline-block;
     position:fixed;
     left:0;
     width: 40%;
     height: 80%
     margin-left: 35px;
    }	
#paper{
    position: relative;
    display: inline-block;
    width: 50%;
    height: 80%;
    background: linear-gradient(to bottom, #A7FEF1, #20EEF3); 
    padding: 20px;
    box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.8);
    text-shadow: 0 1px 0 #F6EF97;
    animation:myfirst1 3s;
    overflow: auto;
}  
/*哎哟喂你看它在乱动！*/
/*那就让它安稳点。*/
/*是时候让它归位了orz*/
#paper{
    position:fixed;
    right:0;
    margin-right:40px;
}  
/*Perfect！*/
  `;

	let markdown = window.markdown = `
# 天津工业大学简称天工大。
## 校训：严谨、严格、求实、求是.
## 学校官网链接 [link](http://www.tjpu.edu.cn/).
## 值得一提的是我们学校的纺织专业位列全国第一.

# 朝迎海河晨曦  暮浴津门霞光.
<img src="tu1.jpg" style="width: 500px;height: 200px">
我们学校的图书馆虽然不是正门据传言它是亚洲最长（我进去后迷路了）
<br>
<img src="ye.jpg" style="width: 300px;height: 200px">
这是我们学校晚上的夜景（吐槽一下晚上黑灯瞎火啥也看不见）
<br>
<img src="pm.jpeg" style="width: 300px;height: 200px">
望星运动场是我们寝室旁边的虽说我没怎么去过大活动都在这里
<br>
而我在计算机与软件技术学院，实属荣幸。
<br>
春览静园绿景，秋听泮湖吟唱。
`;


}.call()
