function removeDuplicates(nums) {
    // Check if the array has fewer than 3 elements (no duplicates possible)
    if (nums.length < 3) {
      return nums.length;
    }
  
    let currentIndex = 2;  // The first two elements are always included
  
    for (let i = 2; i < nums.length; i++) {
      console.log('hgfhsjfd',nums[i],nums[currentIndex - 2])
      if (nums[i] !== nums[currentIndex - 2]) {
        // If the current element is different from the two elements before it
        // Include it in the modified array
        nums[currentIndex] = nums[i];
        currentIndex++;
      }
    }
  
    return currentIndex;
  }
  
  // Example usage
  const nums = [1, 2, 2,2, 3,3,3];
  const length = removeDuplicates(nums);
  
  // Display the modified array
  for (let i = 0; i < length; i++) {
    console.log(nums[i]);
  }
  
  // Display the new length
  nums.length = length;
  console.log("New Length:", length, nums);