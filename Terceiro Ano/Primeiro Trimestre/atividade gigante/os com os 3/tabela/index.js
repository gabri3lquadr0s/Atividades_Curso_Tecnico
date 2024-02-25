function addRow() {
    var table = document.getElementById("tabela");
    var newRow = table.insertRow(table.rows.length);
    for (var i = 0; i < table.rows[0].cells.length; i++) {
        var cell = newRow.insertCell(i);
        cell.contentEditable = "true";
        cell.innerHTML = "New";
    }
}

function addColumn() {
    var table = document.getElementById("tabela");
    for (var i = 0; i < table.rows.length; i++) {
        var cell = table.rows[i].insertCell(table.rows[i].cells.length);
        cell.contentEditable = "true";
        cell.innerHTML = "New";
    }
}

function deleteRow() {
    var table = document.getElementById("tabela");
    table.deleteRow(-1); 
}

function deleteColumns() {
    var table = document.getElementById("tabela");
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(table.rows[i].cells.length - 1);
    }
}