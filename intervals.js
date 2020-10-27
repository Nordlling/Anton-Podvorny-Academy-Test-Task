function intervalConstruction(arr) {

    const semiIntervals = {     
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
        P8: 12
      };
      
      const intervals = {     
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
      
      const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
      
      const semiNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
  
    if(arr.length !== 2 && arr.length !== 3) throw new Error("Illegal number of elements in input array");
  
    let transformNote = ''
  
    if(arr[1][1] === '#') { 
        let index = semiNotes.indexOf(arr[1][0]) + 1
        if(index > 11) index = index - 12
        transformNote = semiNotes[index]
    }	
    if(arr[1][1] === '#' && arr[1][2] === '#') { 
        let index = semiNotes.indexOf(arr[1][0]) + 2
        if(index > 11) index = index - 12
        transformNote = semiNotes[index]
    }
    if(arr[1][1] === 'b') { 
        let index = semiNotes.indexOf(arr[1][0]) - 1
        if(index < 0) index = 12 + index
        transformNote = semiNotes[index]
    }	
    if(arr[1][1] === 'b' && arr[1][2] === 'b') { 
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
  
      } else {
          let firstIndexNote = notes.indexOf(arr[1][0]);
          let lastIndexNote = firstIndexNote + intervals[arr[0]] - 1
          if(lastIndexNote > 6) lastIndexNote -= 7
          var lastNote = notes[lastIndexNote]
          
          if(transformNote === '') transformNote = arr[1]
          let firstIndexSemiNote = semiNotes.indexOf(transformNote);
          var lastIndexSemiNote = firstIndexSemiNote + semiIntervals[arr[0]]
          if(lastIndexSemiNote > 11) lastIndexSemiNote -= 12
  
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

    const semiIntervals = {     
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
        P8: 12
      };
      
      const intervals = {     
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
      
      const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
      
      const semiNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
  
    if(arr.length !== 2 && arr.length !== 3) throw new Error("Illegal number of elements in input array");
  
    let firstTransformNote = ''
    let lastTransformNote = ''
  
    if(arr[0][1] === '#' && arr[0].length === 2) { 
        let index = semiNotes.indexOf(arr[0][0]) + 1
        if(index > 11) index = index - 12
        firstTransformNote = semiNotes[index]
    }
    if(arr[1][1] === '#' && arr[1].length === 2) { 
        let index = semiNotes.indexOf(arr[1][0]) + 1
        if(index > 11) index = index - 12
        lastTransformNote = semiNotes[index]
    } 
    if(arr[0][1] === '#' && arr[0].length === 3) { 
        let index = semiNotes.indexOf(arr[0][0]) + 2
        if(index > 11) index = index - 12
        firstTransformNote = semiNotes[index]
    }
    if(arr[1][1] === '#' && arr[1].length === 3) { 
        let index = semiNotes.indexOf(arr[1][0]) + 2
        if(index > 11) index = index - 12
        lastTransformNote = semiNotes[index]
    }
    if(arr[0][1] === 'b' && arr[0].length === 2) { 
        let index = semiNotes.indexOf(arr[0][0]) - 1
        if(index < 0) index = 12 + index
        firstTransformNote = semiNotes[index]
    }
    if(arr[1][1] === 'b' && arr[1].length === 2) { 
           let index = semiNotes.indexOf(arr[1][0]) - 1
           if(index < 0) index = 12 + index
           lastTransformNote = semiNotes[index]
    }		
    if(arr[0][1] === 'b' && arr[0].length === 3) { 
           let index = semiNotes.indexOf(arr[0][0]) - 2
           if(index < 0) index = 12 + index
           firstTransformNote = semiNotes[index]
    }
    if(arr[1][1] === 'b' && arr[1].length === 3) { 
           let index = semiNotes.indexOf(arr[1][0]) - 2
           if(index < 0) index = 12 + index
           lastTransformNote = semiNotes[index]
    }
  
    let firstIndexNote = notes.indexOf(arr[0][0]);
    let lastIndexNote = notes.indexOf(arr[1][0]);

    if(arr[0] === arr[1]) return "P8"  
  
    if(arr[2] === 'dsc') {
        var notesCount = firstIndexNote - lastIndexNote + 1
        if(notesCount < 1) notesCount += 7  
          
        if(firstTransformNote === '') firstTransformNote = arr[0]
        if(lastTransformNote === '') lastTransformNote = arr[1]
  
        let firstIndexSemiNote = semiNotes.indexOf(firstTransformNote);
        var lastIndexSemiNote = semiNotes.indexOf(lastTransformNote);
        var semiNotesCount = firstIndexSemiNote - lastIndexSemiNote
        if(semiNotesCount < 1) semiNotesCount += 12
  
    } else {
            var notesCount = lastIndexNote - firstIndexNote + 1
            if(notesCount < 1) notesCount += 7
          
            if(firstTransformNote === '') firstTransformNote = arr[0]
            if(lastTransformNote === '') lastTransformNote = arr[1]
  
            let firstIndexSemiNote = semiNotes.indexOf(firstTransformNote);
            var lastIndexSemiNote = semiNotes.indexOf(lastTransformNote);
            var semiNotesCount = lastIndexSemiNote - firstIndexSemiNote
            if(semiNotesCount < 1) semiNotesCount += 12
  
           }
  
    let trueAnswer = ''
    for (let key in semiIntervals) {
        if(semiIntervals[key] == semiNotesCount && key[1] == notesCount) trueAnswer += key
    }
    if(trueAnswer === '') throw new Error("Cannot identify the interval");
      
    return trueAnswer
  
  }