const fs = require('fs');

// Convert the contents of a text file to an array
// Text file eg: 2 3
//               1 20
const toArray = (data) => {
    return data.replace(/\r\n/g,' ').trim().split(" ");
}
// Calculate the number of multiples of a and b and store them to mult
const multiples = (a, b, start, stop, mult) => {
    for(i = start; i <=stop; i++){
        if(i%a == 0 && i%b != 0){
            mult[0] += 1;
        } else if(i%a != 0 && i%b == 0){
            mult[1] += 1;
        } else if(i%a == 0 && i%b == 0){
            mult[2] += 1;
        } else {
            mult[3] += 1;
        }
    }
    return mult;
}

// Read the file "input.txt" in the same directory and print the multiples
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    } else {
        const dt = toArray(data);
        let mult = [0,0,0,0];

        mult = multiples(...dt,mult);
        console.log(...mult);
    }
});