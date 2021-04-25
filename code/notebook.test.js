const helloWorld = require('./notebook');

beforeEach(()=>{
	let w = document.getElementById('inputId');
	w ? w.remove() : null;
	let z = document.getElementById('inputEditor');
	z ? z.remove() : null;
	//localStorage.setItem('data',null);
});
test('Check levenshteinDist', () => {
	expect(levenshteinDist("Word" , "word")).toBe(1);
})

test('clearEditor should remove the contents of resultspace div', () => {
	
	let div = document.createElement('div');
	document.body.appendChild(div);
	div.setAttribute('id','resultspace');
	clearEditor();
	expect(document.getElementById('resultspace').innerHTML).toBe("");
})

test('findFrequency should find the word occurrence and render the frequencies as lists',() => {
	
	let editor = document.createElement('div');
	editor.setAttribute('id','inputEditor');
	document.body.appendChild(editor);
	editor.innerHTML = "Word Word Word word";
	
	
	let input = document.createElement('input');
	input.setAttribute('id','inputId');
	input.value = "Word";
	editor.appendChild(input);
	
	let div = document.createElement('div');
	div.setAttribute('id','resultspace');
	input.appendChild(div);
	
	
	//localStorage.setItem('data','Word Word Word word');
	
	findFrequency();
	expect(document.getElementsByTagName('li').length).toBe(3);
})


test('clearCache should clear the part of the localStorage that has the application data', () => {
	
	let editor = document.createElement('div');
	editor.setAttribute('id','inputEditor');	
	document.body.appendChild(editor);
	
	localStorage.setItem('data',"This data will be erased when the clearCache function is called");
	expect(localStorage.getItem('data')).toBe("This data will be erased when the clearCache function is called");
	clearCache();
	expect(localStorage.getItem('data')).toBe(null);
	expect(document.getElementById('inputEditor').innerHTML).toBe("");
});

test('Function insert should insert the data inserted in the editor into the localStorage', () => {
	
	localStorage.setItem('data',"1 2");
	
	let input = document.createElement('input');
	input.setAttribute('id','inputId');
	
	let editor = document.createElement('div');
	editor.setAttribute('id','inputEditor');
	
	document.body.appendChild(input);
	input.appendChild(editor);
	
	insert("3");
	expect(localStorage.getItem('data')).toBe("1 2 3");
	
	expect(document.getElementById('inputId').value).toBe('');
})

test('Function findSimilarWords should find the words that have levenshtein distance = 1, with the word entered into the input field', () => {
	
	let input = document.createElement('input');
	input.setAttribute('id','inputId');
	input.value = "Word";
	document.body.appendChild(input); 
	
	let div = document.createElement('div');
	div.setAttribute('id','resultspace');
	input.appendChild(div);
	
	let editor = document.createElement('div');
	editor.setAttribute('id','inputEditor');
	div.appendChild(editor);
	editor.innerHTML = "Word Word Word word";
	
	findSimilarWords();
	expect(document.getElementsByTagName('li').length).toBe(1);
	
})

test('levenshteinDist function to return the length of second argument when the length of the first argument is 0', () => {
	let retVal = levenshteinDist("","World");
	expect(retVal).toBe(5);
})

test('levenshteinDist function to return the length of first argument when the length of the first argument is 0', () => {
	let retVal = levenshteinDist("Hello","");
	expect(retVal).toBe(5);
})