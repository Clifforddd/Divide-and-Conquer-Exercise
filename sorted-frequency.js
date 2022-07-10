function sortedFrequency(arr, target) {
    let firstIdx = getFirst(arr, target);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = getLast(arr, target);
    return lastIdx - firstIdx + 1;
  }
  
  function getFirst(arr, target, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = Math.floor((low + high) / 2)
      if ((mid === 0 || target > arr[mid - 1]) && arr[mid] === target) {
        return mid;
      } else if (target > arr[mid]) {
        return getFirst(arr, target, mid + 1, high)
      } else {
        return getFirst(arr, target, low, mid - 1)
      }
    }
    return -1
  }
  
  function getLast(arr, target, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = Math.floor((low + high) / 2)
      if ((mid === arr.length - 1 || target < arr[mid + 1]) && arr[mid] === target) {
        return mid;
      } else if (target < arr[mid]) {
        return getLast(arr, target, low, mid - 1)
      } else {
        return getLast(arr, target, mid + 1, high)
      }
    }
    return -1
  }

module.exports = sortedFrequency