//1. 获取节点
const search = document.getElementById("search");
const matchList = document.getElementById("match-list");
// 3. 获取文档并进行过滤
const searchValue = async searchText => {
	const res = await fetch('./data/js.json')
	// 将json文档转化
	const js = await res.json();
	//匹配输入内容并进行过滤
	let matches = js.filter(state => {
		const regex = new RegExp(`^${searchText}`,'gi');
		return state.name.match(regex) || state.abbr.match(regex)
	});
	if(searchText.length === 0){
		matches = []
		matchList.innerHTML = ""
	}
	output(matches)
}
// 4. 显示过滤结果
const output = matches => {
	if(matches.length > 0){
		const html = matches.map(
		match => `<div class = "card card-body mb-1">
		<h4>${match.name} (${match.abbr})<span class = "text-primary">${match.level}</span></h4>
		<small>经纬度: ${match.center}</small>
		</div>`
		).join('');   //转化为字符串
		matchList.innerHTML = html;
	}
}
//2. 事件监听,获取json并进行过滤,调用searchValue函数
search.addEventListener('input',() => searchValue(search.value));
