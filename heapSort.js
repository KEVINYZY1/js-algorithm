function heapSort(arr){

	var len = arr.length
	// heap(arr,0,arr.length)
	buildMaxHeap(arr)
	console.log(arr)
	for (var i = arr.length - 1; i > 0; i--) {
		// swap(arr,0,i)
		swap(arr,0,i)
		// console.log(i,arr)
		len--
		heap(arr,0,i)
		// break
	};
	return arr
}
function buildMaxHeap(arr){
	for(var i=Math.floor(arr.length/2);i>=0;i--){
		heap(arr,i,arr.length)
	}
	return arr
}
// 调整子数为最大堆
// 合并两个有序数组

   
function heap(arr,start,end){
	var left = 2*start + 1
	var right = 2*start +2
	var largest = start
	if (left<end && arr[left]>arr[start]) {
		largest = left
	};
	if (right<end && arr[right]>arr[largest]) {
		largest = right
	};
	if (largest!==start) {
		swap(arr,start,largest)
		heap(arr,largest,end)
	};
}
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
arr = [366, 240, 866, 115,  9, 760, 553, 354, 232, 374, 450, 426, 944, 2,393, 143]
heapSort(arr)
console.log(arr)



console.log('--------------')



