// Apply Functional Programming to Convert Strings to URL Slugs

/*

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces

*/

function urlSlug(str) {
    return str
    .split(' ')
    .filter(subStr => subStr !== '')
    .join('-')
    .toLowerCase();
}

console.log(urlSlug('Winter Is Coming'));