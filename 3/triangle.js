const size = 8;

console.log(`=== START! SIZE: ${size} ===`);

const main = (num) => {
	for (let i=0; i<num; i++)	{
		console.log(' '.repeat(num-i) + '*'.repeat(i*2+1));
	}
}

main(size);
