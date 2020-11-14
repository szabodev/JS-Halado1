function multiplier(arr) {
    let sum = 0; 
    for (let i = 0; i<arr.length; i++) {
        let num = arr[i];
        num *= 1.27;
        // arr[i] = num;
        sum += num;
    }
    return sum;
}

const numArr = [1, 1, 10];

// Task 1.:
// console.log(multiplier(numArr));

// Task 2.: 

let result = {
    exists: false,
    index: -1,
    allElementIsANumber: true,
    someElementIsANumber: false
}

function checkArray(arr, primitive) {
    // let typeOfPrimitive = typeof(primitive);
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === primitive) {
            result.exists = true;
            result.index = i;
        }
        if(typeof(arr[i]) === 'number') {
            result.someElementIsANumber = true;
        } else {
            result.allElementIsANumber = false;
        }
    }
    return result;
}

// let miscArr = [true, 'af', 23, false];
// const miscArr = [33, 44, false, 88];
// console.log(checkArray(miscArr, 23));


// Task 3.

function generateHtml(content) {
    result = '<ul>';
    for(let i = 0; i < content.length; i++) {
        result += '<li>' + content[i] + '</li>';
    }
    result+='</ul>';
    return result;
}

const content = ['első', 'második', 'harmadik'];

console.log(generateHtml(content));
window.document.body.innerHTML = (generateHtml(content));
