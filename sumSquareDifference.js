function sumOfSquares(){
	var sum=0;
	for( i=1 ; i<=100 ; i++ ){
		sum+=(i*i);
	}

	return sum;
}

function squareOfSums(){
	var sum=0;
	for( i=1 ; i<=100 ; i++ ){
		sum+=i;
	}
	return (sum*sum);
}

console.log(squareOfSums()-sumOfSquares());