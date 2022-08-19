// 获取节点
const fill = document.querySelectorAll(".fill")          //存放图片
const empties = document.querySelectorAll(".empty")      //图片边框

// 事件监听（fill拖拽，释放）
fill[0].addEventListener("dragstart",dragStart);
fill[0].addEventListener("dragend",dragEnd);

// 第三步 fill拖动函数
function dragStart(){
	// 如果是等号相当于直接替换掉类名
	this.className += " hold"
	setTimeout(()=>(this.className = "invisible"),0)
}
function dragEnd(){
	this.className = "fill";
}
// 对图片进行监听
for(const empty of empties){
	empty.addEventListener("dragenter",dragenter);
	empty.addEventListener("dragover",dragover);
	empty.addEventListener("dragleave",dragleave);
	empty.addEventListener("drop",drop);
}
//进入区域点击鼠标就触发
function dragenter(e){
	e.preventDefault();
	this.className += ' hover'
}
// 鼠标拖动对象进入下一个区域间触发
function dragover(e){
	// 阻止默认事件
	e.preventDefault();
}
// 拖拽对象离开范围内触发
function dragleave(){
	this.className = "empty"	
}
// 释放鼠标时触发
function drop(){
	this.className = "empty";
	this.append(fill[0]);
}
