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
var tmp = ''
function dfs(n){
	tmp += '\ndfs'+n
	marked[n] = true
	for (var i = 0; i < arr[n].length; i++) {
		tmp +='>'
		if(!marked[arr[n][i]]){
			
			dfs(arr[n][i])
		}else{
			tmp+= arr[n][i]+ ':marked'
		}
	};
}

dfs(0)
console.log(marked)
console.log(tmp)earch