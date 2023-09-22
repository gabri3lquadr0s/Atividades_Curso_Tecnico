var arr = [3,7,9,11,6,2,4];
function basquete(p) {
    if(p > Math.max(...arr)) {
        console.log(`New Record: ${p}`);
    } else{
        console.log(`Record: ${Math.max(...arr)}`);
    }
    if(p < Math.min(...arr)) {
        console.log(`New low: ${p}`);
    } else{
        console.log(`Low: ${Math.min(...arr)}`);
    } arr.push(p);
}

basquete(12);
basquete(1);