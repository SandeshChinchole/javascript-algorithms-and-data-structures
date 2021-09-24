// Find the Longest Word in a String

function findLongestWordLength(str) {
    let words = str.split(" ");
    let longest = 0;
    for(let i = 0; i < words.length; i++){
        if(words[i].length > longest){
            longest = words[i].length;
        }
    }
    return longest;
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");