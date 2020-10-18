let semiIntervals = {     
    m2: 1,  
    M2: 2,
    m3: 3,
    M3: 4,
    P4: 5,
    P5: 7,
    m6: 8,
    M6: 9,
    m7: 10,
    M7: 11,
    P8: 6
  };
  
  let intervals = {     
    m2: 2,  
    M2: 2,
    m3: 3,
    M3: 3,
    P4: 4,
    P5: 5,
    m6: 6,
    M6: 6,
    m7: 7,
    M7: 7,
    P8: 8
  };
  
  let notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
  
  let semiNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
  
  
  function intervalConstruction(arr) {
  
  if(arr.length !== 2 || arr.length !== 3) throw new Error("Illegal number of elements in input array");
  
  let transformNote = ''
  
  if(arr[1][1] === '#') { 
           let index = semiNotes.indexOf(arr[1][0]) + 1
           if(index > 11) index = index - 12
           transformNote = semiNotes[index]
       }	
       if(arr[1][1] === '##') { 
           let index = semiNotes.indexOf(arr[1][0]) + 2
           if(index > 11) index = index - 12
           transformNote = semiNotes[index]
       }
       if(arr[1][1] === 'b') { 
           let index = semiNotes.indexOf(arr[1][0]) - 1
           if(index < 0) index = 12 + index
           transformNote = semiNotes[index]
       }	
       if(arr[1][1] === 'bb') { 
           let index = semiNotes.indexOf(arr[1][0]) - 2
           if(index < 0) index = 12 + index
           transformNote = semiNotes[index]
       }
  
  
  if(arr[2] === 'dsc') {
      let firstIndexNote = notes.indexOf(arr[1][0]);
      let lastIndexNote = firstIndexNote - intervals[arr[0]] + 1
      if(lastIndexNote < 0) lastIndexNote = 7 + lastIndexNote
      var lastNote = notes[lastIndexNote]
      
      if(transformNote === '') transformNote = arr[1]
      let firstIndexSemiNote = semiNotes.indexOf(transformNote);
      var lastIndexSemiNote = firstIndexSemiNote - semiIntervals[arr[0]]
      if(lastIndexSemiNote < 0) lastIndexSemiNote = 12 + lastIndexSemiNote 
      let lastSemiNote = semiNotes[lastIndexSemiNote]
  
  } else {
      let firstIndexNote = notes.indexOf(arr[1][0]);
      let lastIndexNote = firstIndexNote + intervals[arr[0]] - 1
      if(lastIndexNote > 6) lastIndexNote = lastIndexNote - 7
      var lastNote = notes[lastIndexNote]
      
      if(transformNote === '') transformNote = arr[1]
      let firstIndexSemiNote = semiNotes.indexOf(transformNote);
      var lastIndexSemiNote = firstIndexSemiNote + semiIntervals[arr[0]]
      if(lastIndexSemiNote > 11) lastIndexSemiNote = lastIndexSemiNote - 12
      let lastSemiNote = semiNotes[lastIndexSemiNote]
  
  }
  
  let trueNote = lastNote
  let fullLastIndexNote = semiNotes.indexOf(lastNote);
  if(lastIndexSemiNote - fullLastIndexNote === 2) trueNote += '##'
  if(lastIndexSemiNote - fullLastIndexNote === 1) trueNote += '#'
  if(lastIndexSemiNote - fullLastIndexNote === -1) trueNote += 'b'
  if(lastIndexSemiNote - fullLastIndexNote === -2) trueNote += 'bb'
  
  return trueNote
  
  }
  
  function intervalIdentification(arr) {
  }
