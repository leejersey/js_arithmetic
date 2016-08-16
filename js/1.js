//线性查找
//arr为数组，x为要搜索的值
function linearSearch(arr, x) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }
  return -1;
}
var arr = [1,2,3,4,5,6,7,8,9];
console.log(linearSearch(arr,5));