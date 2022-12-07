const groupBy = (array, cb) => {
    const obj = {}
    /* 
    {
      1: [1.3],
      2: [2.1].concat[]
    }
    */
  
    array.forEach((x) => {
      
      if (!obj[cb(x)]) {
        obj[cb(x)] = [x]
      } else {
        obj[cb(x)] = obj[cb(x)].concat([x])
      }
    })
  
    return obj
  }
  
  const decimals = [1.3, 2.1, 2.4];
  const floored = num => { 
    return Math.floor(num); 
  };
  console.log(groupBy(decimals, floored)); 
  // should log: { 1: [1.3], 2: [2.1, 2.4] }