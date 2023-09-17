function findOdd(A) {
  const count = {}
  for (const num of A) {
    if (num in count) {
      count[num] += 1
      continue
    } 

    count[num] = 1 
    
  }

  for (const [key, value] of Object.entries(count)) {
    if (value % 2 != 0) return parseInt(key)
  }
}

module.exports = findOdd;
