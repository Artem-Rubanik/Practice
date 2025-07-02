/* You will receive an array as parameter that contains 1 or more integers and a number n.

Here is a little visualization of the process:

Step 1: Split the array in two:

[1, 2, 5, 7, 2, 3, 5, 7, 8]
      /            \
[1, 2, 5, 7]    [2, 3, 5, 7, 8]
Step 2: Put the arrays on top of each other:

   [1, 2, 5, 7]
[2, 3, 5, 7, 8]
Step 3: Add them together:

[2, 4, 7, 12, 15]
Repeat the above steps n times or until there is only one number left, and then return the array. */

function splitAndAdd(arr, n) {
    let currentArray = [...arr];

    for (let i = 0; i < n; i++) {
        if (currentArray.length === 1) break;

        const half = Math.floor(currentArray.length / 2);
        const leftPart = currentArray.slice(0, half);
        const rightPart = currentArray.slice(half);

        if (leftPart.length < rightPart.length) {
            leftPart.unshift(0);
        }

        currentArray = leftPart.map((num, index) => num + rightPart[index]);
    }

    return currentArray;
}

console.log(splitAndAdd([4, 2, 5, 3, 2, 5, 7], 2));