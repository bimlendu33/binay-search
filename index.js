var arr = [];
for (var i = 1; i <= 100; i++) {
  arr.push(i);
}
function test(searchVal, arr) {
  var lower = 0;
  var upper = arr.length - 1;

  while (lower <= upper) {
    var mid = Math.floor((lower + upper) / 2);

    if (searchVal == arr[mid]) {
      return mid;
    }

    if (searchVal < arr[mid]) {
      upper = mid - 1;
    } else {
      lower = mid + 1;
    }
  }
  return -1;
}

console.log(test(18, arr));
