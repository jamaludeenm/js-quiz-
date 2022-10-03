var submitele=document.getElementById('submit');
    problemsele=document.getElementsByClassName('problems')[0];
    calculateele=document.getElementById('calculate');
	
 function generaterandomnumber(max){
	return parseInt(Math.random()*max) 
 };
console.log(generaterandomnumber());
 
 // function texttosymbol(text){
	// switch(text){
		// case'add':
		  // return'+'
		  // break;
		// case'sub':
		    // return'-'
			// break;
		// case'multiple':
		    // return'*'
			// break;
		// default:
		    // return'/'
	// }	
 // }
 
 // function resetproblems(){
	 // problemsele.innerHTML="";
 // }
 
 // function enablecalculate(){
	 // calculateele.removeAttribute('disabled');
 // }
	   
 // function updateproblem(number1,number2,operation){
	 // let problemele=document.createElement('div');
	     // problemele.setAttribute('class','problem');
	 // let number1ele=document.createElement('h3');
	     // number1ele.setAttribute('class','number1');
	     // number1ele.innerText=number1;
      // let operationele=document.createElement('h3');
	     // operationele.setAttribute('class','operation');
	     // operationele.innerText=texttosymbol(operation);	
      // let number2ele=document.createElement('h3');
	      // number2ele.setAttribute('class','number2');
	     // number2ele.innerText=number2;
      // let inputele=document.createElement('input');
	     // inputele.setAttribute('type','text');
		 // inputele.setAttribute('class','answer');
		 
		 // problemele.append(number1ele);
		 // problemele.append(operationele);
		 // problemele.append(number2ele);
		 // problemele.append(inputele);
		 
		 // problemsele.append(problemele);
		 
 // }
 
 
  // var stage1operation=function(){
	  // var operationele=document.getElementById('operation'),
	       // rangeele=document.getElementById('range'),
		   // operation=operationele.value,
		   // range=parseInt(rangeele.value),
		   // randomnumber1,randomnumber2;
		   
		   // if(operation !== 'divide'){
			   
			   // resetproblems();
			   // for(let i=1;i<=16;i++){
				   // randomnumber1=generaterandomnumber(range);
				   // randomnumber2=generaterandomnumber(range);
				   // updateproblem(randomnumber1,randomnumber2,operation);
			   // }
				   
			   
			   // enablecalculate();
		   // }   
     
    // }
	
	// function stage2operation(){
		// var problemelements=document.getElementsByClassName('problem'),
		// problemele,operationele,operationtype,number1ele,number1value,number2ele,number2value,
		// expectedans,actualansele,actualans,mark=0;
		
		// for(let i=0;i<problemelements.length;i++){
			// problemele=problemelements[i];
			
			// operationele=problemele.getElementsByClassName('operation')[0];
			// operationtype=operationele.innerText;
			
			
			// number1ele=problemele.getElementsByClassName('number1')[0];
			// number1value=parseInt(number1ele.innerText);
			
			// number2ele=problemele.getElementsByClassName('number2')[0];
			// number2value=parseInt(number2ele.innerText);
			
			// if(operationtype == '+'){
				// expectedans=number1value+number2value;
			// }else if(operationtype == '-'){
				// expectedans=number1value-number2value;
			// }else if(operationtype == '*'){
				// expectedans=number1value*number2value;
			// }else{
				// expectedans=number1value/number2value;
			// }
			
			// actualansele=problemele.getElementsByClassName('answer')[0];
			// actualans=parseInt(actualansele.value);
			
			// if(actualans == expectedans){
				// mark++;
			// }
		// }
	
		// alert("your score is :" +mark);
	// }
	
	
  // submitele.addEventListener('click',stage1operation);
   // calculateele.addEventListener('click',stage2operation);
 