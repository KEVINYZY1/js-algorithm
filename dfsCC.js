
var arr = [
	[6,2,1,5],
	[0],
	[0],
	[5,4],
	[5,6,3],
	[3,4,0],
	[0,4],
	[8],
	[7],
	[11,10,12],
	[9],
	[9,12],
	[11,9]
]
var marked = new Array(arr.length)
var ids = new Array(arr.length)
var count = 0
function CC(arr){
	for (var i = 0; i < ids.length; i++) {
		// ids[i]
		// console.log(i)
		if (!marked[i]) {
			dfs(arr,i)
			count++
		};
	};
}
function dfs(arr, v){
	console.log('check '+v)
	marked[v] = true
	ids[v] = count
	var idv
	for (var i = 0; i < arr[v].length; i++) {
		idv = arr[v][i]
		if (!marked[idv]) {
			// console.log('search '+idv)
			dfs(arr,idv)
		}else{
			// console.log('    '+idv+' checked')
		}

	};	
}

// console.log('search 0')console.log(marked)

CC(arr)

console.log(ids)
console.log(marked)

