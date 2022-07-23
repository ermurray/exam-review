// ### Question 3

// This is a STRETCH QUESTION.

// Let's revisit Question 01 which had us convert an array of arrays into an object.

// This time, make it support nested arrays.

// The nested arrays also only contain 2 element arrays to represent key & value: [key, value]. However, this time we are allowing the value to be another array.

// Non-array objects need NOT be supported/handled at all.

// Examples:

// - deepArrayToObject([['a', 1], ['b', 2], ['c', 
// [
//   ['d', 4]
//     ]
//   ]
// ])
//   => { a: 1, b: 2,
// c: { 
  // d: 4 
// } }
// - deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]])
//   => { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }

const stuff = [['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]]

const deepArrayToObject = function (arr) {
  const obj = Object.fromEntries(arr);
  // for (const el in array) {
  //   if (Array.isArray(array[el])) {
  //     array[el] = deepArrayToObject(array[el]);
  //   }
  // }
  for (const elem in obj) {
    if(Array.isArray(obj[elem])) {
      obj[elem] = deepArrayToObject(obj[elem]);
    }
  }

  return obj;
};

const deepArrayToObject2 = (arr) => {
  const object = {};

  for (const element of arr) {
    const isArray = Array.isArray(element[1]);

    if (isArray) {
      object[element[0]] = deepArrayToObject(element[1])
    } else {
      object[element[0]] = element[1];
    } 
  }
  return object;
};

console.log(deepArrayToObject(stuff)); 