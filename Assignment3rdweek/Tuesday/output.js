function isAnagram (str1, str2) {
    //Check if the two strings have different lengths
    if (str1.length !== str2.length) {
        return false;
    }
    
    //Sort the two strings
    var s1 = str1.split('').sort().join('');
    var s2 = str2.split('').sort().join('');
    //Compare the two sorted strings
    return (s1 === s2);
}
console.log(isAnagram('abc','cba'));
console.log(isAnagram('listen','silent')); 
console.log(isAnagram('dog','doog'));