var blocked = document.querySelector('#intel')?.value;
console.log(blocked);
blocked.style.visibility ="hidden";


function getValue(){
	var inputVal = document.getElementById('in')?.value;
	console.log("param>>", inputVal);
	let checkWord = inputVal.split('');
	
	checkWord.forEach(elem => {
		if(elem !== "@"){
			 console.log("error");
			var intel = document.querySelector('.lab')
			intel.style.display = "none";

			blocked.style.visibility="visible";

		}

	})
}


