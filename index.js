module.exports.passwordGenerator = function passwordGenerator(l) {
    if(typeof l !== "number") throw Error(`Argument must be a number not ${Array.isArray(l) ? "array" : typeof l}`);
    if(l <= 0) throw Error("Argument must be greater than 0");
    if(!l) l = 1;
    if(l > 1e7) throw Error("Argument must be lower or egal to 1e7.");

    const string = "abcdefghijknopqrstuvwxyzACDEFGHJKLMNPQRSTUVWXYZ1234567910111213141517181920";
    const specialsChar = "!@#$+-*&_";
    let result = "";

    for(let i = 0; i < l; ++i) {
        if(Math.floor(Math.random() * (specialsChar.length - 1)) == i) result += specialsChar.charAt(Math.floor(Math.random() * specialsChar.length));
        else result += string.charAt(Math.floor(Math.random() * string.length));
    };
    return result;
};