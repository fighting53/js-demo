// 1.获取输入框输入的内容
const  filterInput = document.getElementById("filterInput");
// 2.为它绑定键盘事件
filterInput.addEventListener("keyup",filterText);

function filterText(){
	// 3.把输入的内容转化内大写
	var  filterValue = document.getElementById("filterInput").value.toUpperCase();
	// 4. 获取所有的li标签
	var li = document.querySelectorAll("li.collection-item");
	// 5. 获取所有的li标签下的a标签
	for(let i = 0;i<li.length;i++){
		var a = li[i].getElementsByTagName('a')[0];
		// 6.判断获取到的所有a元素是否包含输入的元素
		if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1){
			li[i].style.display = "";   //大于-1表示找到，就在li标签中显示出来
		}else{
			li[i].style.display = "none";
		}
	}
}