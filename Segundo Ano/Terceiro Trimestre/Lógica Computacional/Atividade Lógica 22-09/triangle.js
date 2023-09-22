function triangle(l,ll,lll) {
    if(l === ll && ll === lll) {console.log('Equilátero')}
    else if(l === ll && l != lll || l === lll && l != ll || ll === lll && ll != l) {console.log('Isóceles')}
    else {console.log('Escaleno')}
}

triangle(3,4,5)
triangle(7,7,10)
triangle(10,10,10)