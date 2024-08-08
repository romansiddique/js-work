//THAT IS PROBLEM
// function swap(a, b){
//     console.log("Before Swap--","a =", a , "and" , "b =", b);
//     console.log("");
//     console.log('');

//     console.log("First Method Using temp variable:");
//     var temp = a;
//     a = b;
//     b = temp;
//     console.log("After Swap--","a =", a , "and" , "b =", b);

//     console.log("");
//     console.log('');

//     console.log("\"second method will not work properly. Because in the first method a = b and b = a\"")
//     console.log();
    
//     console.log("Second Method Using Add and Sub");
//     a = a + b;
//     b = a - b;
//     a = a - b;
//     console.log("After Swap--","a =", a , "and" , "b =", b);

//     console.log("");
//     console.log('');

//     console.log("Third Method Using JavaScript Array");
//     [a, b] = [b, a];
//     console.log("After Swap--","a =", a , "and" , "b =", b);
// };

// var result = swap(1 , 2);
// console.log(result);



// FIRST SOLVE
// function swap(a, b) {
//     console.log("Before Swap--", "a =", a, "and", "b =", b);
//     console.log("");
//     console.log('');

//     // Store original values
//     let originalA = a;
//     let originalB = b;

//     // First Method Using temp variable
//     console.log("First Method Using temp variable:");
//     let temp = a;
//     a = b;
//     b = temp;
//     console.log("After Swap--", "a =", a, "and", "b =", b);

//     // Reset values to original
//     a = originalA;
//     b = originalB;
//     console.log("");
//     console.log('');

//     console.log("\"second method will not work properly. Because in the first method a = b and b = a\"");
//     console.log("");
//     console.log('');

//     // Second Method Using Add and Sub
//     console.log("Second Method Using Add and Sub:");
//     a = a + b;
//     b = a - b;
//     a = a - b;
//     console.log("After Swap--", "a =", a, "and", "b =", b);

//     // Reset values to original
//     a = originalA;
//     b = originalB;
//     console.log("");
//     console.log('');

//     // Third Method Using JavaScript Array
//     console.log("Third Method Using JavaScript Array:");
//     [a, b] = [b, a];
//     console.log("After Swap--", "a =", a, "and", "b =", b);
// };

// // Call the swap function
// swap(1, 2);


//SECOND SOLVE
function swapWithTemp(a, b) {
    console.log("First Method Using temp variable:");
    var temp = a;
    a = b;
    b = temp;
    console.log("After Swap--", "a =", a , "and", "b =", b);
}

function swapWithAddSub(a, b) {
    console.log("Second Method Using Add and Sub:");
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("After Swap--", "a =", a , "and", "b =", b);
}

function swapWithArray(a, b) {
    console.log("Third Method Using JavaScript Array:");
    [a, b] = [b, a];
    console.log("After Swap--", "a =", a , "and", "b =", b);
}

function swap(a, b) {
    console.log("Before Swap--", "a =", a , "and", "b =", b);
    console.log("");
    console.log('');
    
    swapWithTemp(a, b);
    console.log("");
    console.log('');

    swapWithAddSub(a, b);
    console.log("");
    console.log('');

    swapWithArray(a, b);
    console.log("");
    console.log('');
}

swap(1, 2);
