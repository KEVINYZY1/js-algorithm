// 二分查找
arr = [1,3,5,7,11,24,35,100]

function binarySearch(arr,n){
	var end = arr.length,start = 0,res
	while(end>start){
		var mid = (end+start)>>1
		if (arr[mid]>n) {
			end = mid-1
		};
		if (arr[mid]<n) {
			start = mid+1
		};
		if (arr[mid]==n) {
			res = mid
			break
		};

	}
	if (res) {
		console.log(res)
	}else{
		console.log('not exist')
	}
}

binarySearch(arr,35)