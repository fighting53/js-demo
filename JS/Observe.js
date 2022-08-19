import util from './util.js'
// 任何工具都能侦测到，将每个object转换为每个层级属性都是响应式
export default class Observe{
	constructor(){
		console.log('我是observe的构造器',value);
		// 构造函数this指向实例
		def(val,'__obj__',this,false)
		console.log('我是Observe构造器',value);
	}
	// 遍历
	walk(val){
		for(let k in val){
			defineReactive()
		}
	}
};
