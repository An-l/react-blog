export const ArrUnique =function (arr) {
	let hash = {},
	len = arr.length,
	result = [];

	for(let i = 0; i < len; i++){
		if (!hash[arr[i]]) {
			hash[arr[i]] = true;
			result.push(arr[i]);
		}
	}

	return result;
}
