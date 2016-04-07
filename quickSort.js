function quickSort(arr,start,end){
	if (start<end) {
		var index = quick(arr,start,end)
		quickSort(arr,start,index-1)
		quickSort(arr,index,end)

	};
	return arr
}
// 合并两个有序数组
function quick(arr,start,end){
	var init = start
	var env = arr[init]
	start++
	while(start<=end){
		while(arr[end]>env){
			end--
		}
		while(arr[start]<env){
			start++
		}
		if (start<end) {
		swap(arr,start,end)
		start++
		end--

		};

	}
	swap(arr,init,start-1)
	return start
}
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
arr = [366, 240, 866, 115,  9, 760, 553, 354, 232, 374, 450, 426, 944, 2,393, 143]
quickSort(arr,0,arr.length-1)
console.log(arr)
// console.log(arr)