var getMixed = arrayList => {
	return arrayList.reduce(((pre, value, index, array) => {
		if (index === 0) {
			return value
		}

		// return Array.from(new Set(value)).reduce((_pre, _value, _index, _array) => {
		// 	if (pre.includes(_value)) {
		// 		_pre.push(_value)
		// 	} 
		// 	return _pre
		// }, [])

		return Array.from(new Set(value)).filter(_value => pre.includes(_value))
	}), [])
}

console.log(getMixed([
	[1,2,3,4,5],
	[3,2,6],
	[3,1,3,2,5],
]))