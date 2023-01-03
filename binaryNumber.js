console.log('-----------------')
dec2bin(4311)

function dec2bin(dec) {
    
    var binaryNumber = (dec >>> 0).toString(2);
    var binaryArray = binaryNumber.split('')
    for (let i = 0; i<binaryArray.length; i++){
        console.log(binaryArray[i]);
        if (binaryArray[i] === 0){
            console.log("0 Detected");
        }
    }
}