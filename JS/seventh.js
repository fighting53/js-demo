// 1.获取输入框输入的内容
const taskForm = document.querySelectorAll("#task-form");
const task = document.querySelectorAll("#task");
const filter = document.querySelectorAll("#filter");
const collection = document.querySelectorAll(".collection");
const clearTasks = document.querySelectorAll(".clear-tasks");

// 2.加载所有事件
loadAll()

// 3.创建load函数
function loadAll() {
	// DOM内容加载完毕执行
	document.addEventListener("DOMContentLoaded", getTask);
	// 添加表单监听事件
	taskForm[0].addEventListener("submit", addTask);
	// 清除监听事件
	collection[0].addEventListener("click", removeTask);
	// 清除所有监听事件
	clearTasks[0].addEventListener("click", removeAllTask);
	// 过滤所有监听事件
	filter[0].addEventListener("input", filterTask);
}

// DOM内容加载完毕执行
function getTask() {
	let tasks;
	if (localStorage.getItem('tasks') == null) {
		tasks = [];
	} else {
		// 转换为json
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}
	tasks.forEach(function(task) {
		const li = document.createElement("li");
		li.className = "collection-item";
		li.appendChild(document.createTextNode(task));
		const i = document.createElement("a");
		i.className = "delete-item secondary-content"
		i.innerHTML = '<i class = "fa fa-close"></i>';
		li.appendChild(i);
		collection[0].append(li);
	})
}

// 添加表单监听事件
function addTask(e) {
	if (task[0].value == "") {
		alert("Add a task")
	} else {
		const li = document.createElement("li");
		li.className = "collection-item";
		li.appendChild(document.createTextNode(task[0].value));
		const i = document.createElement("a");
		i.className = "delete-item secondary-content"
		i.innerHTML = '<i class = "fa fa-close"></i>';
		li.appendChild(i);
		collection[0].append(li);
		// 将添加的任务进行本地存储
		storeTaskInLocalStorage(task[0].value);
		task[0].value = "";
	}
	e.preventDefault();
}

// 存到本地
function storeTaskInLocalStorage(task) {
	let tasks;
	if (localStorage.getItem('tasks') == null) {
		tasks = [];
	} else {
		// 转换为json
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}
	tasks.push(task);
	// 换成字符串
	localStorage.setItem("tasks", JSON.stringify(tasks))
}

// 清除所有监听事件
function removeTask(e) {
	if (e.target.parentElement.classList.contains('delete-item')) {
		if (confirm("是否删除")) {
			e.target.parentElement.parentElement.remove();
			// 删除本地任务
			removeTaskInLocalStorage(e.target.parentElement.parentElement);
		};
	}
}
// 删除本地存储
function removeTaskInLocalStorage(taskItem){
	let tasks;
	if (localStorage.getItem('tasks') == null) {
		tasks = [];
	} else {
		// 转换为json
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}
	tasks.forEach(function(task,index){
		if(taskItem.textContent === task){
			tasks.splice(index,1);
		}
		localStorage.setItem('tasks',JSON.stringify(tasks))
	})
}
// 删除所有监听事件
function removeAllTask() {
	if (confirm("是否删除所有")) {
		collection[0].innerHTML = " ";
		// 删除所有本地任务
			removeALLTaskInLocalStorage();
		};
}
// 删除所有本地任务
function removeALLTaskInLocalStorage(){
	localStorage.clear();
}


// 过滤所有监听事件
function filterTask(e) {
	const text = e.target.value.toLowerCase();
	document.querySelectorAll('.collection-item').forEach(function(task) {
		const item = task.firstChild.textContent;
		if (item.toLowerCase().indexOf(text) > -1) {
			task.style.display = "block";
		} else {
			task.style.display = "none";
		}
	})
}
