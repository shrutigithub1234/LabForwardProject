window.addEventListener('load',() => {
	
	document.getElementById('inputEditor') && document.getElementById('inputEditor').setAttribute('contenteditable', 'true');
	document.getElementById('outputEditor') && document.getElementById('outputEditor').setAttribute('contenteditable', 'true');
	
	// Load the data persisted for the project.
	document.getElementById('inputEditor') ? document.getElementById('inputEditor').innerHTML = localStorage.getItem('data') : null;
});



insert = (data) => {
	
	//Add the data entered into the input editor to localStorage upon Save operation.
	let storageData = localStorage.getItem('data') || '';
	storageData = storageData.concat(' '+data);
	
	//Check if the Storage is supported.
	if(typeof Storage !== 'undefined'){
		localStorage.setItem('data',storageData);
	}
	
	document.getElementById('inputEditor').innerHTML = localStorage.getItem('data');
	document.getElementById('inputId').value = '';	
}

clearCache = () => {
	
	//Remove the project data from localStorage.
	localStorage.removeItem('data');
	document.getElementById('inputEditor').innerHTML = "";
}

// A common method to render a list.
renderList = (list) => {
	let listDiv = document.createElement('div');
	listDiv.setAttribute('id','listDiv');
	
	let listElement = document.createElement('ul');
	document.getElementById('resultspace').appendChild(listDiv).appendChild(listElement);
	
	let i;
	for(i=0;i<list.length; i++){
		var liElement = document.createElement('li');
		liElement.innerHTML = list[i];
		listElement.appendChild(liElement);
	}
}

// Method to find the occurrences of a given word.
findFrequency = () => {
	const input = document.getElementById('inputId').value;
	const text = document.getElementById('inputEditor').innerHTML.trim().split(" ");
	
	document.getElementById('resultspace').innerHTML = `Frequency of the word ${input} is ${text.filter(word => word === input).length}`;
	renderList(text.filter(word => word === input));
}

save = () => insert(document.getElementById('inputEditor').innerHTML);

clearEditor = () => document.getElementById('resultspace').innerHTML = "";

//Method to find words similar to the one entered by the user in the input box.
findSimilarWords = () => {
	const storageDataArray = document.getElementById('inputEditor').innerHTML.trim().split(" ");
	
	const newWord = document.getElementById('inputId').value;
	let arr = [];
	
	let j;
	for(j=0;j<storageDataArray.length;j++){
		const ret = levenshteinDist(newWord, storageDataArray[j]);
		if(ret === 1){
			arr.push(storageDataArray[j]);
		}
		
	}
	document.getElementById('resultspace').innerHTML = `Words similar to ${newWord} are: `;
	renderList(arr);
}

levenshteinDist = (str1,str2) => {
	if(str1.length == 0) return str2.length; 
	if(str2.length == 0) return str1.length; 

	  let arr = [];

	  let i;
	  for(i = 0; i <= str2.length; i++){
		arr[i] = [i];
	  }

	  let j;
	  for(j = 0; j <= str1.length; j++){
		arr[0][j] = j;
	  }

	  for(i = 1; i <= str2.length; i++){
		for(j = 1; j <= str1.length; j++){
		  if(str2.charAt(i-1) == str1.charAt(j-1)){
			arr[i][j] = arr[i-1][j-1];
		  } else {
			arr[i][j] = Math.min(arr[i-1][j-1] + 1, Math.min(arr[i][j-1] + 1,arr[i-1][j] + 1));
		  }
		}
	  }

	  return arr[str2.length][str1.length];
}