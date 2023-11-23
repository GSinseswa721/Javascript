function sortArray(arr, order = "asc") {
    return order === "asc" ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
  }
  
  const sampleArray = [23,40,12,9,0,90];
  console.log("Sorted Array (Asc):", sortArray(sampleArray, "asc"));
  console.log("Sorted Array (Desc):", sortArray(sampleArray, "desc"));
  