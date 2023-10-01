function fun(){
    for(var i=1;i<=5;i++){
        setTimeout(() => {
            console.log(i);
        }, i*1000);
    }
}

fun();

// output  : 6 6 6 6 6

function fun() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

fun();

// output : 1 2 3 4 5

function fun() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, i * 1000);
    }

    close(i);
  }
}

fun();

// output : 1 2 3 4 5

var arr=["saroj","manoj","somu","satish","neha","apple"];
var [first, second] = arr; 