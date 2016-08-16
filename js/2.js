//二分查找
//arr为已按"升序排列"的数组，x为要查询的元素
//返回目标元素的下标
function binarySearch(arr, x) {
  var low = 0, high = arr.length - 1;
  while (low <= high) {
    var mid = Math.floor((low + high) / 2); //下取整   
    if (x == arr[mid]) {
      return mid;
    }
    if (x < arr[mid]) {
      high = mid - 1;
    }
    else {
      low = mid + 1;
    }
  }
  return -1;
}

var arr = [1,2,3,4,5,6,7,8,9];
console.log(binarySearch(arr,5));