function isEvenlyDivisible(n){
	var statment=true;
	for(i=1 ; i<=10; i++){
		if((n%i)!=0){
			statment=false;
		}
	}
	return statment;
}

var found=false;
var n=20;
while(!found){
	console.log(n);
	if(isEvenlyDivisible(n)){
		found=true;
	}
	else{
		n++;
	}
}

console.log(n);