let res = 0

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(2), 1000); // (*)
  }).then(function(result) { // (**)
    res += result
    return result
  }).then(function(result) { // (***)
    res += result
    return result;
  }).then(function(result) {
    res += result

    console.log(res)
  });