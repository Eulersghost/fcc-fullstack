// create a 4 parameter function that keeps an for the four arguments and performs methods on them as objects records which is an object containing several individual albums.
//id: a number represents a specific album in the records object.
//prop:: a string representing the name of the album's property to update.
//value - a string containing the information used to update the albums property 

//input: update records criteria (always return the entire records object)
//output: entire records object
/** if value is an empty string then delete the given proper from the album
 * 
 * if prop isn't tracks and value isn't an empty string, assign the value to that albums prop
 * 
 * if prop is tracks and value isn't and empty string, but the album doesn't have a tracks property, create and empty array and add value to it.
 * 
 * if prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
 */
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(records,id,prop,value){
    if (value === "") {
       delete records[id][prop];
       return records
    }
    else if (prop != "tracks" && value !=""){
       records[id][prop] = value;
      return records;
    }
    else if (prop === "tracks" && value != "" &&  !records[id][prop]){
      records[id][prop] = [];
      records[id][prop].push(value);
      return records;
    }
    else if(prop === "tracks" && value !=""){
      records[id][prop].push(value);
      return records;
    }
    else {
      return records;
    }
}

// Import test cases
// require('./recordsCollectionTest.js');
// console.log(recordCollection);

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));;    
console.log(updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me'));
console.log(updateRecords(recordCollection, 2548, 'artist', ''));
console.log(updateRecords(recordCollection, 1245, 'tracks', 'Addicted to Love'));
console.log(updateRecords(recordCollection, 2468, 'tracks', 'Free'));
console.log(updateRecords(recordCollection, 2548, 'tracks', ''));
console.log(updateRecords(recordCollection, 1245, 'albumTitle', 'Riptide'));

// Expected Output
// { '1245': { artist: 'Robert Palmer', tracks: [ 'Addicted to Love' ], albumTitle: 'Riptide' },
//   '2468': { albumTitle: '1999', artist: 'Prince', tracks: [ '1999', 'Little Red Corvette', 'Free' ] },
//   '2548': { albumTitle: 'Slippery When Wet' , tracks: [ 'Let It Rock', 'You Give Love a Bad Name' ] },
//   '5439': { albumTitle: 'ABBA Gold', artist: 'ABBA', tracks: [ 'Take a Chance on Me' ] } }
