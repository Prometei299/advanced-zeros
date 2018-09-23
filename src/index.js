module.exports = function getZerosCount(number, base) {

  let j = 0 , i = 2, count = 0, k = 0;
  let arr1 = [], arr2 = [], arr3 = [];

  do {
    if (base % i === 0) {
      base = base / i;
      count++;
      k = 1;
    }
    else {
      if (k === 1) {
        arr1[j] = i;
        arr2[j] = count;
        j++;
      }
      i++;
      count = 0;
      k = 0;
    }
  }
  while (i <= base);

  arr1[j] = i;
  arr2[j] = count;


  for (i = 0; i < arr1.length; i++) {
    let n = 1;
    arr3[i] = 0;

    while (n <= number) {
      n = n * arr1[i];
      arr3[i] = arr3[i] + Math.floor(number / n);
    }
  }

  let res = arr3[0] / arr2[0];
    for (i = 0; i < arr2.length; i++) {
    res = Math.min(res, Math.floor(arr3[i] / arr2[i]));
  }


  return res;
}