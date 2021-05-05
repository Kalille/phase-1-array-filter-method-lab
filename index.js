// Code your solution here
function findMatching(array,string){
    let match = array.filter(name=> string.toUpperCase() === name.toUpperCase());{
        
        return match// return match.toUpperCase()
    }
}
function fuzzyMatch(array,string){
let fuzzy = array.filter(name=> name.substring(0,string.length)=== string);
    return fuzzy
}
function matchName(array,string){
    let gotIt = array.filter(obj=> obj.name=== string);
    return gotIt

}

