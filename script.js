//Task 1

let runner = {
  $$runnerId: null,
  $$tasks: [],
  setSpeed: function (speed) {
      this.stop();
      this.start(speed);
  },
  add: function (task) {
      this.$$tasks.push(task);
  },
  start: function (speed) {
      var _this = this;
      this.$$runnerId = setTimeout(function callback() {
          _this.$$tasks.forEach(function (value) {
              value();
          })
          _this.$$runnerId = setTimeout(callback, speed);
      }, speed);
  },
  stop: function () {
      clearTimeout(this.$$runnerId);
  }
}

runner.add(() => {
  console.log('Hello');
});
runner.add(() => {
  console.log('World');
});

runner.setSpeed(2000);


//Task 2 

const maps = (arr, cb) => {
  let arr2 = [];
  for(let i = 0; i < arr.length; i++) {
      arr2[i] = cb(arr[i], i, arr);
  };
  return arr2;
}


//Check

const a =[1,2,3];

const tyui = maps(a, function (value) {
  return value + 5;
});
console.log(tyui);

const zxcv = maps(['1', '2', '3'], (Number));
console.log(zxcv);


