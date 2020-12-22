const size = 6;
const width = 1;

console.log(`=== START! SIZE: ${size} ===`); 

const getArc = (num, i) => {
  if (i === 0) {
    console.log(' '.repeat((num-i-1)*2) + '*'.repeat(num*2 + width*2 - 2));
  } else {
    console.log(' '.repeat((num-i-1)*2) + '*'.repeat(width) + ' '.repeat((num-1)*2 + i*4) + '*'.repeat(width));
  }
}

const main = (num) => {
	for (let i=0; i<num; i++)	{
    getArc(num, i);
  }
  for (let i=0; i<Math.floor((num-1)/2); i++) {
    console.log('*'.repeat(width) + ' '.repeat(num*6-6) + '*'.repeat(width));
  }
  for (let i=num-1; i>=0; i--) {
    getArc(num, i);
  }
}

main(size);
