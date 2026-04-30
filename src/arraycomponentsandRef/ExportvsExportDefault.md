Key Differences


Feature 	        Named Export (export)	                Default Export (export default)
Number of Exports	Multiple allowed per file.	            Exactly one per file. (mostly the jsx is named)
Import Syntax	    Requires curly braces: { }.     	    No curly braces required.
Naming	         Must match the exported name exactly.	    Can be renamed to anything during import.
Best Use Case	 Multiple utility functions, constants,     The "main" thing a file provides (e.g., a React component).
                 or classes.	


1. Named Exports (export) 
You can export several variables or functions from a single module by prefixing them with export. 
GeeksforGeeks
GeeksforGeeks
 +1
Exporting:
javascript
export const myVar = 10;
export function myFunc() { ... }
Use code with caution.
Importing:
javascript
import { myVar, myFunc } from './myFile';
Use code with caution.
Renaming on Import: Use the as keyword: import { myFunc as newName } from './myFile'. 
Reddit
Reddit
 +2
2. Default Exports (export default)
Used when a module has one primary entity. You do not need to provide a name at the time of export. 
DEV Community
DEV Community
 +2
Exporting:
javascript
const MyComponent = () => { ... };
export default MyComponent;
Use code with caution.
Importing:
javascript
import AnyNameYouWant from './myFile';
Use code with caution.
 
3. Mixing Both
A single file can have one default export and many named exports. 
Reddit
Reddit
 +1
Example:
javascript
// myModule.js
export const helper = () => {}; // Named
export default class MainClass {} // Default

// importing.js
import MainClass, { helper } from './myModule';
Use code with caution.
 