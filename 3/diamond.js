const size = 7;

console.log(`=== START! SIZE: ${size} ===`); 

const main = (num) => {
	for (let i=0; i<num; i++)	{
		const half = num/2;
		const n = i < half ? i : i - (i - half) - (i - half + 1);
		console.log(' '.repeat(half-n) + '*'.repeat(n*2+1));
	}
}

main(size);
