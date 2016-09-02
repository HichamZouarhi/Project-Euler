var keepLooping=true;
var sum=2;
var i=3;
while(keepLooping){
	var isPrime=true;
	for( j=2 ; j<=Math.sqrt(i) ; j++ ){
  		if(i%j==0){
  			isPrime=false;
  		}
  	}
  	if(isPrime){
      sum+=i;
  	}
  	if(i>=10){
  		keepLooping=false;
  		console.log(sum);
  	}
  	else{
  		i++;
  	}
}
