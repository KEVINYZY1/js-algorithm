var arr = [
	[5, 1],
	[],
	[0, 3],
	[5, 2],
	[3, 2],
	[4],
	[9, 4, 0],
	[6, 8],
	[7, 9],
	[11, 10],
	[12],
	[4, 12],
	[9]

]

var marked = new Array(arr.length)
var edgeTo = new Array(arr.length)
var onStack = new Array(arr.length)
var hasCycle = false
var circle = []
function directedCycye(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (!marked[i]) {
			dfs(arr, i)
		};
	};
}

function dfs(arr, num) {
	marked[num] = true
	onStack[num] = true
	for (var i = 0; i < arr[num].length; i++) {

		end = arr[num][i]
		if (circle.length>0) {
			return;
		};

		if (!marked[end]) {
			edgeTo[end] = num
			dfs(arr,end)
		}else{
			// var cir = []
			for (var x=num; x!=end; x=edgeTo[x]) {
				circle.push(x)
			};
			circle.push(end)
			circle.push(num)

		}

	};
	// console.log(cir)
	onStack[num] = false


}
directedCycye(arr)
console.log(marked)
console.log(edgeTo)
console.log(circle)
