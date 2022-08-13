# passwordGenerator
This module makes it possible to obtain a password according to the desired size.
The result changes with each new call to the function.

### Basic usage
```js
/*Maximum number = 1e7.
Minimum number = 1.
If no argument the length of the password is 1.*/

const { passwordGenerator } = require("generator-passwordjs"); //Import the module.

console.log(passwordGenerator(Number)); //Log the result.

/*
Example: 
    console.log(passwordGenerator(5));
    output => 9j752

    console.log(passwordGenerator(50));
    output => jEcqF*Q142A1LiXJu1R11KUV5dVd1stGMSQ9M333E1Ahoy1nap
*/
```
