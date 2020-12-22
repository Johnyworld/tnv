const size = 10000;

console.log(`=== START! SIZE: ${size} ===`);

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
  let arr = getMatrix(num);
  let randomA = getRandomArr(num);
  let randomB = getRandomArr(num);
  
  for (let i=0; i<num; i++) {
    for (let j=0; j<num; j++) {
      arr[j][randomB[(j+i)%num]] = randomA[i];
    }
  }

  if ( size < 20 ) {
    console.table(arr);
  } else {
    console.log(arr);
  }
}

main(size);
