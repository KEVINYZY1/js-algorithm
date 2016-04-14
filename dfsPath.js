// 模拟无向图的arr 深度遍历搜索所有点
var arr = [ 
	[2,1,5],
	[0,2],
	[0,1,2,3,4],
	[5,4,2],
	[3,2],
	[3,0]
	
]
var marked = new Array(arr.length)
var edgeTo = new Array(arr.length)

function dfs(n){
	marked[n] = true
	for (var i = 0; i < arr[n].length; i++) {
		if(!marked[arr[n][i]]){
			edgeTo[arr[n][i]] = n			
			dfs(arr[n][i])
		}
	};
}

dfs(0)

function hasPath(v){
	return marked[v]
}
function pathTo(start,end){
	var path = []
	for(var x=end;x!=start;x=edgeTo[x]){
		path.unshift(x)
	}
	path.unshift(start)
	return path
}

console.log(pathTo(0,1).join('->'))
console.log(pathTo(0,2).join('->'))
console.log(pathTo(0,3).join('->'))
console.log(pathTo(0,4).join('->'))
console.log(pathTo(0,5).join('->'))


console.log(hasPath(2))


