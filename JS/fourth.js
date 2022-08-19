import defineReactive from '../JS/defineReactive.js'
import Observe from'./Observe.js'
var obj = {
	a:{
		m:{
			n:{
				
			}
		}
	},
	b:{
		value: 3
	}
}

// 如何被实例化,创建函数,这个函数只对对象服务，val侦测的对象
function observe(val){
	// 如果是对象什么都不做
	if(typeof val != 'object') return;
	// 定义ob
	var ob;
	if(typeof val.__ob__ !== 'undefined'){
		ob = val.__ob__;
	}else{
		ob = new Observe(val); //存储实例
	}
	return ob;
}
observe(obj)
