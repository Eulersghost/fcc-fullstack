function chunkArrayInGroups(array, size){
    let result = [];
    for (let i =0; i< array.length; i += size){
       let arrayChunk = array.slice(i, i + size);
       result.push(arrayChunk); 
    }
    return result;
}