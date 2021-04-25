# Implementation of 2 features for `<LABFORWARD>` Project


### This document is intended to provide information on the project scope, the prerequisites and the information on how to run the unit tests.







## Project Scope :

A notebook entry/editor to implement 2 features to 

- Determine frequency of word occurrence in the notebook entry
- Determine similar words within the notebook entry



## Prerequisites : 

There is no dependency one would need to run this project. The project can just be run by launching the notebook.html file inside the `/code` folder.
However, to run the tests, one will need to have Nodejs installed on their machine.



## An overview of the project implementation:

1. 2 editors. 
  - The input editor 
  - The result space editor.

2. `Save` button to save/store the data entered into the input editor into the browser's local storage.

3. `Occurrence Finder` button, to find the number of times, a given word (the one entered in the input box) occurs in the data entered into the input editor.

4. `Similar Words` button, to find the words whose levenshtein distance equals to 1, with the word entered into the input box.

5. `Clear Editor` button, to clear the result space editor.

6. `Clear Cache` button to clear the project specific data from the local storage.

7. An input box, to enter a word.


One can enter the text/data into the input editor and perform actions as mentioned above, like finding similar words or occurrences of a given word by entering a word in the input box.
Choosing to "Save" the data would add the data from the input editor into the local storage of your browser and will be loaded into the input editor whenever the page is freshly loaded.



## How to test:




1. Make sure you have Node installed.

2. Let's test the code with Jest.

3. Go inside of your project folder and run this command
	
	`npm install`	
	
4. Ready to go. To test the code, run the following command.

	`npm test`
	
	This will show the details of how many tests passed as well as the code coverage is shown too, since we have added `--coverage` option to the jest
	in our package.json file.
	
	
--------------------------------------  Just in case 'npm install' doesn't install Jest as expected -----------------------------------------------------

1. Delete the package.json

2. Go inside of your project folder and run this command
	
	`npm init -y`  
	
	This will initialize all the default values and give us our package.json
	
3. Next, we will need to install Jest, with the following command.

	`npm i --save-dev jest`
	
	This is the testing library we will use. The reason we are saving this as a dev dependency is that we are going to use this library only in development.

4. `npm test`




## If I had more time, I would improve the project in a couple of areas.


1. I would design the UX in a more interactive way by prompting the user to enter text in the input box, if he is trying to find the occurrences/similar words
without entering one.

2. I would re-arrange the top menu inside of a dropdown and add the input box inside the input editor (the top editor) for better user experience.

3. I would make the unit tests more granular by adding more expects, for ex, to check if a method is called or not, to see if all the branches are visited etc.




### Finally, Thank you for taking time to go through this project. Any suggestions on improving the project are welcome and deeply appreciated. For any queries, I can be reached at `writetoshrutikelkar@gmail.com`.


