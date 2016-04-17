// 模拟无向图的arr 深度遍历搜索所有点
var arr = [ 
	[2,1,5],
	[0,2],
	[0,1,3,4],
	[5,4,2],
	[3,2],
	[3,0]
	
]
var marked = new Array(arr.length)
var tmp = ''
var edgeTo = new Array(arr.length)
function bfs(n){
	queue = []
	tmp += '\nbfs'+n+'go\n'
	marked[n] = true
	queue.push(n)
	while(queue.length){
		num = queue.shift()
		for (var i = 0; i < arr[num].length; i++) {
			var tmp_num = arr[num][i]
			if (!marked[tmp_num]) {
				edgeTo[tmp_num] = num
				marked[tmp_num] = true
				queue.push(tmp_num)
				tmp+=arr[num][i]+'\n'
			}else{
				tmp+=arr[num][i]+'marked\n'
			}
		}

	}
}

function pathTo(start,end){
	var path = []
	for(var x=end;x!=start;x=edgeTo[x]){
		path.unshift(x)
	}
	path.unshift(start)
	return path
}




bfs(0)

console.log(pathTo(0,1).join('->'))
console.log(pathTo(0,2).join('->'))
console.log(pathTo(0,3).join('->'))
console.log(pathTo(0,4).join('->'))
console.log(pathTo(0,5).join('->'))


console.log(edgeTo)