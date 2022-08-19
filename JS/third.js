// 1.获取输入框输入的内容
const  current = document.getElementById("current");
const  imgs = document.querySelectorAll(".main-imgs");
const  img = document.querySelectorAll(".main-imgs img");
const opacity = 0.6;
img[0].style.opacity = opacity;
// 2.为它绑定事件监听
imgs[0].addEventListener("click",imgClick);
// 3.设置imgclick函数
function imgClick(e){
	//重置缩略图不透明度
	img.forEach(img=>(img.style.opacity = 1));
	//更新缩略图
	current.src = e.target.src;
	// 添加fade类名
	current.classList.add("fade-in")
	// 设置定时器移除类名
	setTimeout(()=>current.classList.remove("fade-in"),500)
	e.target.style.opacity = opacity;
}