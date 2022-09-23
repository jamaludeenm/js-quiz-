 var submitele=document.getElementById('submit');
     problemsele=document.getElementsByClassName('problems')[0];
 
 function generaterandomnumber(max){
	return parseInt(Math.random()*max) 
 };
 function texttosymbol(text){
	switch(text){
		case'add':
		  return'+'
		  break;
		case'sub':
		    return'-'
			break;
		case'multiple':
		    return'*'
			break;
		default:
		    return'/'
	}	
 }
 function resetproblems(){
	 problemsele.innerHTML="";
 }
	   
 function updateproblem(number1,number2,operation){
	 let problemele=document.createElement('div');
	     problemele.setAttribute('class','problem');
	 let number1ele=document.createElement('h3');
	     number1ele.innerText=number1;
      let operationele=document.createElement('h3');
	     operationele.innerText=texttosymbol(operation);	
      let number2ele=document.createElement('h3');
	     number2ele.innerText=number2;
      let inputele=document.createElement('input');
	     inputele.setAttribute('type','text');
		 inputele.setAttribute('class','answer');
		 
		 problemele.append(number1ele);
		 problemele.append(operationele);
		 problemele.append(number2ele);
		 problemele.append(inputele);
		 
		 problemsele.append(problemele);
		 
 }
  var stage1operation=function(){
	  var operationele=document.getElementById('operation'),
	       rangeele=document.getElementById('range'),
		   operation=operationele.value,
		   range=parseInt(rangeele.value),
		   randomnumber1,randomnumber2;
		   
		   if(operation !== 'divide'){
			   
			   resetproblems();
			   for(let i=1;i<=16;i++){
				   randomnumber1=generaterandomnumber(range);
				   randomnumber2=generaterandomnumber(range);
				   updateproblem(randomnumber1,randomnumber2,operation);
			   }
		   }   
     
    }
  submitele.addEventListener('click',stage1operation);