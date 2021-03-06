// Setup
var recordCollection = {
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

// Only change code below this line
function updateRecords(records, id, prop, value) {
  var record = records[id];
  if(value === "") {
    delete record[prop];
  }
  else {
    if(prop !== "tracks") {
      record[prop] = value;
    }
    else {
      if(record["tracks"] === undefined) {
        record["tracks"] = [value];
      }
      else {
        record["tracks"].push(value);
        
      }
    }
    return records;
    
  }
}


console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));