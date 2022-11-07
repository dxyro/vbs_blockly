export const camelize = function(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

export const cleanPublic = function(str){
    return str.trim()
        .replace(/\s/g,"")
        .split("Public")
        .filter(elemet=>{if(elemet===""){return false;}else{return true;}});
}