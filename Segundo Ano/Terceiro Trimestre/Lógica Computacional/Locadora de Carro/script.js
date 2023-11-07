var carList = [{"plate":"asd123", "year":1900, "brand":"ford", "color":"0066FF", "model":"ka", "isRented":false, "renter":""}, {"plate":"fgh123", "year":1920, "brand":"wolksvager", "color":"1236FF", "model":"gol", "isRented":true, "renter":"gabriel"}];

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
        if(document.getElementById('renter').value != '') {
            car.isRented = true;
            car.renter = document.getElementById('renter').value;
        } else {
            car.isRented = false;
            car.renter = '';
        }
        console.log(car);
        carList.push(car);
    })
    return true;
}

function rentCar() {
    let form = document.getElementById('registerRenterForm');
    let renter = document.getElementById('renterName');
    //TODO rentCar() logic
}

function getCars() {
    let plateSent = document.getElementById('getPlate').value;
    let list = document.getElementById('list')
    if(plateSent) {
        let result = carList.filter(obj => {
            if(obj.plate === plateSent) {
                return list.innerHTML = `<li>${JSON.stringify(obj)}</li>`;
            } else {
                return list.innerHTML = `<h1>${plateSent} not found</h1>`
            }
        })
    } else {
        for(var i = 0; i < carList.length; i++) {
            let listElement = document.createElement('li');
            listElement.innerText = JSON.stringify(carList[i]);
            list.appendChild(listElement);
        }
    }


}