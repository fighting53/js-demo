export const def = function defineReactive(obj, key, val, enuertable) {
	Object.defineProperty(obj, key, {
		value,
		writable: true,
		enumerable: true,
		configurable: true,
		get() {
			console.log('你试图访问' + key + '属性');
			return val
		},
		set(newValue) {
			console.log('你试图访问' + key + '属性值为' + newValue);
			val = newValue
		}
	});
}
