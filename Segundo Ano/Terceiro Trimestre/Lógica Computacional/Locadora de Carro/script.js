/*
        ----TODO---- 
ADD VALIDATION FOR CAR INFORMATION SENT TO SCRIPT
SAVE INFORMATION IN JSON FILE FOR PERMANENT DATA STORAGE(USE BROWSEFIY LIB)
FIX ISSUE OF MULTIPLE DATA BEING SENT AT ONCE
        ------------
*/

var carList = [{"plate":"fgh123", "year":1920, "brand":"wolksvager", "color":"1236FF", "model":"gol", "isRented":true, "renter":"gabriel"},{"plate":"123456", "year":1927, "brand":"wolksvager", "color":"5556FF", "model":"gol", "isRented":false, "renter":""} ,{"plate":"asd123", "year":1900, "brand":"ford", "color":"0066FF", "model":"ka", "isRented":false, "renter":""}];

function newCar() {
    let car = new Object();
    let form = document.getElementById('registerCarForm');
    form.addEventListener('submit',(e) => {
        e.preventDefault();
        car.plate = document.getElementById('plate').value;
        car.year = document.getElementById('year').value;
        car.brand = document.getElementById('brand').value;
        car.color = document.getElementById('color').value;
        car.model = document.getElementById('model').value;
        car.isRented = false;
        car.renter = '';
        console.log(car);
        carList.push(car);
    })
    return true;
}

/*    
        ----TODO---- 
ADD getCarByRent LOGIC ON FUNCTION
RESOLVE OBJ RETURN STYLE TO HTML
        ------------
*/

function getCars() {
    let form = document.getElementById('carListForm');
    form.addEventListener('submit',(e) => {
        e.preventDefault();
        let plateSent = document.getElementById('getPlate').value;
        let list = document.getElementById('list');
        list.innerHTML = '';
        if(plateSent) {
            let arr = [];
            let result = carList.filter(obj => {
                if(obj.plate == plateSent || obj.model == plateSent || obj.brand == plateSent) arr.push(obj);
            })
            if(arr.length === 0) return list.innerHTML = `<h3>${plateSent} not found</h3>`;

            for(var i = 0; i < arr.length; i++) {
                let listElement = document.createElement('li');
                listElement.innerText = JSON.stringify(arr[i]);
                list.appendChild(listElement);
            } return;

        } else {
            for(var i = 0; i < carList.length; i++) {
                let listElement = document.createElement('li');
                listElement.innerText = JSON.stringify(carList[i]);
                list.appendChild(listElement);
            } return;
        }
    })        
}


/* 
        ----TODO---- 
FIX VALIDATION RENT AND UNRENT
VISUAL VALIDATION FOR ACTION
CLEAN CODE WITH LESS IF ELSE STATEMENTS
        ------------
*/

function rentCar() {
    let renter = document.getElementById('renter').value;
    let plateSent = document.getElementById('carToRent').value;
    let form = document.getElementById('carRentForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let result = carList.filter(obj=> {
            if(obj.plate == plateSent) {
                if(document.getElementById('rent').checked && obj.isRented == false) {
                    obj.isRented = true;
                    obj.renter = renter;
                    console.log(obj);
                } else if(document.getElementById('unrent').checked) {
                    obj.isRented = false;
                    obj.renter = '';
                }
            }
        }) 
    })
}