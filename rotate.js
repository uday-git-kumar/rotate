function RotateLeft(arr, n, len = arr.length) {
    return arr.map(function() {
        n = n < len ? n : 0; 
        return arr[n++];
    });
}

var array = [8,1,2,3,4,5,4,5,6,4,7,8,9];
var places = 9;

console.log(RotateLeft(array, places));
