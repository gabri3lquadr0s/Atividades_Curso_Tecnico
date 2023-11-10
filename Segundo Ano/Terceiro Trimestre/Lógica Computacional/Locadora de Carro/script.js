/*
        ----TODO---- 
ADD VALIDATION FOR CAR INFORMATION SENT TO SCRIPT
SAVE INFORMATION IN JSON FILE FOR PERMANENT DATA STORAGE(USE BROWSERIFY LIB)
        ------------
*/

var carList = [{"plate":"fgh123", "year":1920, "brand":"wolksvager", "color":"1236FF", "model":"gol", "isRented":true, "renter":"gabriel"},{"plate":"123456", "year":1927, "brand":"wolksvager", "color":"5556FF", "model":"gol", "isRented":false, "renter":""} ,{"plate":"asd123", "year":1900, "brand":"ford", "color":"0066FF", "model":"ka", "isRented":false, "renter":""}];

function Car(plate, year, brand, color, model, isRented, renter) {
    this.plate = plate;
    this.year = year;
    this.brand = brand;
    this.color = color;
    this.model = model;
    this.isRented = isRented;
    this.renter = renter;
}

/*REGISTER A CAR LOGIC*/
var form = document.getElementById('registerCarForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    newCar();
})
function newCar() {
    let newCar = new Car(
        document.getElementById('plate').value,
        document.getElementById('year').value,
        document.getElementById('brand').value,
        document.getElementById('color').value,
        document.getElementById('model').value,
        false,
        ''
    );
    console.log(newCar);
    carList.push(newCar);
    console.log(carList);
    return true;
}

/*GET CARS LIST LOGIC*/
/*    
        ----TODO---- 
RESOLVE OBJ RETURN STYLE TO HTML
        ------------
*/
function getCars() {
    let form = document.getElementById('carListForm');
    form.addEventListener('submit',(e) => {
        e.preventDefault();
        let plateSent = document.getElementById('getPlate').value;
        let list = document.getElementById('list');
        let message = document.getElementById('message');
        message.innerHTML = '';
        list.innerHTML = '';
        let arr = [];
        if(plateSent) {
            let result = carList.filter(obj => {
                if(obj.plate == plateSent || obj.model == plateSent || obj.brand == plateSent) arr.push(obj);
            })
            if(arr.length == 0)  return message.innerHTML = `${plateSent} not found`;
            for(var i = 0; i < arr.length; i++) {
                let listElement = document.createElement('li');
                listElement.innerText = JSON.stringify(arr[i]);
                list.appendChild(listElement);
            } return;

        } else {
            if(document.getElementById('getCarByRent').checked) {
                let result = carList.filter(obj =>{
                    if(obj.isRented == true) arr.push(obj);
                }); if(arr.length == 0) return message.innerHTML = `No cars rented in the moment`;
                for(var i = 0; i < arr.length; i++) {
                    let listElement = document.createElement('li');
                    listElement.innerText = JSON.stringify(arr[i]);
                    list.appendChild(listElement);
                } return;
            } else if(document.getElementById('getCarByNotRent').checked) {
                let result = carList.filter(obj => {
                    if(obj.isRented == false) arr.push(obj);
                }); if(arr.length == 0) return message.innerHTML = `No cars free in the moment`;
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
        }
    });
}

/*RENT CARS LOGIC*/
/* 
        ----TODO---- 
        ------------
*/
var form1 = document.getElementById('carRentForm');
form1.addEventListener('submit', (e) => {
    e.preventDefault();
    rentCar();
})
function rentCar() {
    let plateSent = document.getElementById('carToRent').value;
    let message = document.getElementById('message1');
    message.innerHTML = ''
    let result = carList.filter(obj=> {
        if(obj.plate == plateSent) {
            if(document.getElementById('rent').checked && obj.isRented == false) {
                let renter = document.getElementById('renter').value;
                obj.isRented = true;
                obj.renter = renter;
                console.log(obj)
                return message.innerHTML = `${plateSent} is now rented to ${renter}`;
            } else if(document.getElementById('unrent').checked) {
                obj.isRented = false;
                obj.renter = '';
                console.log(obj)
                return message.innerHTML = `${plateSent} is now free for renting`;
            } else if(document.getElementById('rent').checked && obj.isRented == true) {
                console.log(obj)
                return message.innerHTML = `${plateSent} is already rented`;
            }
        } else {
            return message.innerHTML = `${plateSent} not found`;
        }
    }) 
}