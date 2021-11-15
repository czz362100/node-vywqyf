// 函数柯里化
// 实现add(1) = 1 add(1)(2) = 3

function add() {
  // 把参数转为数组
  var args = Array.from(arguments);

  // 返回的函数
  var fn = function () {
    // 继续调用的参数继续转为数组
    var arg_fn = Array.from(arguments);
    // 返回调用函数， 合并参数
    return add.apply(null, [...arg_fn, args]);
  };
  // 隐式转换
  fn.toString = function () {
    return args.reduce((a, b) => a + b);
  };
  return fn;
}

// function add1(fn) {
//   let args = [];
//   return function temp(...params) {
//     args.push(...params);
//     if (args.length === fn.length) {
//       const rv = fn.apply(null, ...args);
//       args = [];
//       return rv;
//     } else {
//       args.push(...arguments);
//     }
//   };
// }
console(add1(1)(2)(3));
