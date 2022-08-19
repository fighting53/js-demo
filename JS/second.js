// 1.获取输入框输入的内容
const  jinInput = document.getElementById("jinInput");
// 隐藏
document.getElementById("output").style.visibility = "hidden"
// 2.为它绑定键盘事件
jinInput.addEventListener("input",function(e){
	document.getElementById("output").style.visibility = "visible"
	//3. 获取input中的值
	const jinValue = e.target.value;
	// 4.kg换算
	document.getElementById("pxOutput").innerHTML = jinValue;
	// 4.pong换算
	document.getElementById("remOutput").innerHTML = jinValue /100;
	// 4.weiht换算
	document.getElementById("ozOutput").innerHTML = jinValue * 0.1333;
});
