// Title Case a Sentence

// solution 1: recursion

function titleCase(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase());
}
  
console.log(titleCase("I'm a little tea pot"));