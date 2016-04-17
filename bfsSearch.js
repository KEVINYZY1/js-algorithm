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
function bfs(n){
	queue = []
	tmp += '\nbfs'+n+'go\n'
	marked[n] = true
	queue.push(n)
	while(queue.length){
		num = queue.shift()
		for (var i = 0; i < arr[num].length; i++) {
			if (!marked[arr[num][i]]) {
				marked[arr[num][i]] = true
				queue.push(arr[num][i])
				tmp+=arr[num][i]+'\n'
			}else{
				tmp+=arr[num][i]+'marked\n'
			}
		}

	}
	// for (var i = 0; i < arr[n].length; i++) {

	// 	// tmp +='>'
	// 	// if(!marked[arr[n][i]]){
			
	// 	// 	bfs(arr[n][i])
	// 	// }else{
	// 	// 	tmp+= arr[n][i]+ ':marked'
	// 	// }
	// };
}

bfs(0)
console.log(marked)
console.log(tmp)