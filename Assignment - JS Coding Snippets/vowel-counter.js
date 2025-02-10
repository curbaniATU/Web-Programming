function countVowels(str){
    const vowels = "aeiouAEIOU"
    let num = 0

    for(const char of str){
        if (vowels.includes(char)) {
            num++;
        }
    }
    
    return num;
}

console.log(countVowels("Counting vowels in this string."))