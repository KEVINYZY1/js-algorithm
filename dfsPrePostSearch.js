var arr = [
	[5, 1],
	[],
	[0, 3],
	[5],
	[],
	[4],
	[4],
	[6],
	[7],
	[10,11,12],
	[],
	[12],
	[]

]

var marked = new Array(arr.length)

var pre = []
var post = []
var reversePost = []

function prePostReversepost(arr) {
	for (var i = 0; i < arr.length; i++) {
		if (!marked[i]) {
			dfs(arr, i)
		};
	};
}

function dfs(arr,num){
	var end
	marked[num] = true
	pre.push(num)
	for (var i = 0; i < arr[num].length; i++) {
		end = arr[num][i]
		if (!marked[end]) {
			dfs(arr,end)
		};
	};
	post.push(num)
	reversePost.unshift(num)
}
prePostReversepost(arr)
console.log(pre)
console.log(post)
console.log(reversePost)
