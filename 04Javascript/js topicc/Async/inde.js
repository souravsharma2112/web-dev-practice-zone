// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
let matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]
let matrix2 = [[1,2,3],[4,5,6],[7,8,9]]
// var rotate = function (matrix) {
//     let outArr = []
//     let count = 0
//     let newArr = matrix.reverse()
//     for (let index = 0; index < matrix.length; index++) {
//         let subArr = []
//         newArr.forEach((element , index) => {
//             subArr.push(element[count]);
//         });
//         count++
//         outArr.push(subArr)
//     }
//     return outArr
// };
var rotate = function (matrix) {
    matrix.reverse()
    return matrix.map((element, index )=>{
        return element.map((element , jindex) => {
            return matrix[jindex][index]
        });
    })
}

var rotate = function(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    console.log(matrix);
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
    console.log(matrix);
    
};

console.log(rotate(matrix))
// Output: [[7,4,1],[8,5,2],[9,6,3]]