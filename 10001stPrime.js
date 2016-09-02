var keepLooping=true;
var count=1;
var i=3;
while(keepLooping){
	var isPrime=true;
	for( j=2 ; j<=Math.sqrt(i) ; j++ ){
  		if(i%j==0){
  			isPrime=false;
  		}
  	}
  	if(isPrime){
  		count++;
  	}
  	if(count==10001){
  		keepLooping=false;
  		console.log(i);
  	}
  	else{
  		i++;
  	}
}
