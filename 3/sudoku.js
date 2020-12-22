const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const shuffle = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
}

const getRandomArr = (num) => {
  const arr = [];
  for (let i=0; i<num; i++) {
    arr.push(i);
  }
  return shuffle(arr);
}

const getMatrix = (num) => {
  const arr = [];
  for (let i=0; i<num; i++) {
    arr.push([]);
    for (let j=0; j<num; j++) {
      arr[i].push(null);
    }
  }
  return arr;
}

const main = (num) => {
  console.log(`=== START! SIZE: ${num} ===`);

  let arr = getMatrix(num);
  let randomA = getRandomArr(num);
  let randomB = getRandomArr(num);
  
  for (let i=0; i<num; i++) {
    for (let j=0; j<num; j++) {
      arr[j][randomB[(j+i)%num]] = randomA[i];
    }
  }

  if ( num < 20 ) {
    console.table(arr);
  } else {
    console.log(arr);
  }
}

console.log('\n숫자를 입력해주세요.');
rl.on("line", function(line) {
  if (Number(line)) {
    main(line);
  } else {
    console.log('숫자가 아닙니다.');
  }
  rl.close();
}).on("close", function() {
  process.exit();
});