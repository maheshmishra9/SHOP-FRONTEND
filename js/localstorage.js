function SEND(){
			var fieldvalue=document.getElementById('first').value;
			localStorage.setItem('Full Name',fieldvalue);
			var fieldvalue1=document.getElementById('second').value;
			localStorage.setItem('Email',fieldvalue1);
			var fieldvalue2=document.getElementById('third').value;
			localStorage.setItem('Message',fieldvalue2);
			// popup message
			if(fieldvalue!='' && fieldvalue1!='' && fieldvalue2!=''){
				alert('Thanks For Messaging')
			}
			else{
				alert('Please enter  the required data.')
			}
		}
		function load(){
			var storedValue=localStorage.getItem('Full Name');
			if(storedValue){
				document.getElementById('first').value=storedValue;
			}

		}
		function load(){
			var storedValue=localStorage.getItem('Email');
			if(storedValue){
				document.getElementById('second').value=storedValue;
			}

		}