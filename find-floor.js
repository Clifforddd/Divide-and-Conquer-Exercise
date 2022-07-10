function findFloor(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) return -1;
    if (target >= arr[high]) return arr[high];
  
    let mid = Math.floor((low + high) / 2)
  
    if (arr[mid] === target) return arr[mid];
  
    if (mid > 0 && arr[mid - 1] <= target && target < arr[mid]) {
      return arr[mid - 1];
    }
  
    if (target < arr[mid]) {
      return findFloor(arr, target, low, mid - 1);
    }
  
    return findFloor(arr, target, mid + 1, high)
  }

module.exports = findFloor