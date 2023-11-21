/*LÓGICA PARA CRIAR TODOS OS OBJETOS AIRPLANE COM 68 ASSENTOS CADA*/
function Airplane(id) {
    this.id = id;
    this.seats = [];
    for(var i = 1; i <= 68; i++) {
        var seat = {
            id: i,
            passenger: '',
            isOpen: true,
        }
        this.seats.push(seat);
    }
}

/*CRIAR 15 AVIÕES PARA A AGÊNCIA*/
var agency = [];
for(var i = 1; i < 16; i++) {
    let newAirplane = new Airplane (
        i,
    )
    agency.push(newAirplane);
}

/*ELEMENTOS HTML GLOBAIS*/
var div = document.getElementById('msg');
var list = document.getElementById('list');

/*FUNÇÃO DE ALUGAR ASSENTOS*/
function rentSeat() {
    let id = Number(document.getElementById('plane').value);
    let passenger = document.getElementById('passenger').value;
    let seat = Number(document.getElementById('seat').value);
    if(seat > 68 || seat < 1) return div.innerHTML ='<h3>ERROR: Invalid seat! Please input a number between 1 and 68</h3>';
    if(id > 15 || id < 1) return div.innerHTML ='<h3>ERROR: Invalid plane! Please input a number between 1 and 15</h3>';
    let obj, position;

    agency.forEach(element => {
        if(element.id === id) {
            if(id > agency.length - 1) {
                id--;
            }
            agency[id - 1].seats.forEach(element => {
                if(element.id === seat) {
                    obj = element;
                    position = seat - 1;
                }
            })
        }
    });

    if(obj.isOpen === false) {
        return div.innerHTML = `<h3>ERROR: Seat ${obj.id} is occupied by ${obj.passenger}`;
    } else {
        obj.passenger = passenger;
        obj.isOpen = false;
        agency[id - 1].seats[position] = obj;
        div.innerHTML = `<h3>${JSON.stringify(obj)}</h3>`;
        list.innerHTML = '';
        for(var i = 0; i < agency[id - 1].seats.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = JSON.stringify(agency[id - 1].seats[i]);
            list.appendChild(li);
        }
        return console.log('ok');
    }
} 

/*FUNÇÃO DE REMOVER PASSAGEIROS DE UM ASSENTO*/
function removeSeat() {
    let id = Number(document.getElementById('plane').value);
    let seat = Number(document.getElementById('seat').value);
    let obj, position;
    if(seat > 68 || seat < 1) return div.innerHTML ='<h3>ERROR: Invalid seat! Please input a number between 1 and 68</h3>';
    if(id > 15 || id < 1) return div.innerHTML ='<h3>ERROR: Invalid plane! Please input a number between 1 and 15</h3>';

    agency.forEach(element => {
        if(element.id === id) {
            if(id > agency.length - 1) {
                id--;
            }
            agency[id - 1].seats.forEach(element => {
                if(element.id === seat) {
                    obj = element;
                    position = seat - 1;
                }
            })
        }
    });

    if(obj.isOpen === true) {
        return div.innerHTML = '<h3>ERROR: This seat is not ocupied</h3>';
    } else {
        obj.passenger = '';
        obj.isOpen = true;
        agency[id - 1].seats[position] = obj;
        div.innerHTML = `<h3>${JSON.stringify(obj)}</h3>`;
        list.innerHTML = '';
        for(var i = 0; i < agency[id - 1].seats.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = JSON.stringify(agency[id - 1].seats[i]);
            list.appendChild(li);
        }
        return console.log('ok');
    }
}

/*LISTAR TODOS OS AVIÕES DA AGÊNCIA E SEUS ASSENTOS*/
function listAllPlanes() {
    list.innerHTML = '';
    for(var i = 0; i < agency.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = JSON.stringify(agency[i]);
        list.appendChild(li);
    }
    return console.log('ok');
}

