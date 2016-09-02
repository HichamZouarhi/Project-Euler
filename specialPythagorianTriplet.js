for( a= 1 ; a<(1000/3) ; a++ ){
	for( b=a+1 ; b<(1000/2) ; b++ ){
		var c = 1000-a-b;
		if(a*a+b*b==c*c){
			console.log(" a : "+a+" b : "+b+" c : "+c);
		}
	}
}