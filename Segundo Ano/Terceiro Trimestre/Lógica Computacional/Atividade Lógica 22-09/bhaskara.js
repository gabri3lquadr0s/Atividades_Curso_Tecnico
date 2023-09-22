function calc(ax2, bx, c) {
    let delta = (bx*bx) - 4*ax2*c;
    console.log(delta);
    if(delta < 0) {return console.log('Delta Zero');}
    let bhaskara1 = (-bx+Math.sqrt(delta))/2*ax2;
    let bhaskara2 = (-bx-Math.sqrt(delta))/2*ax2;
    let arr = [bhaskara1, bhaskara1];
    return arr;
}

console.log(calc(1,8,9))
console.log(calc(3,6,3))