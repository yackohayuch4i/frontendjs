window.onload = function() {
    var Table = document.createElement("table");
    for (var y = 0 ; y <=9 ; y ++) {
        var newRow = Table.insertRow(y);
        for (var x = 0 ; x <= 9 ; x ++) {
            var newCell = newRow.insertCell(x);

            if (y === 0 && x === 0) {
                newCell.width = 50;
            } else if ( y === 0 && x > 0) {
                newCell.className = "green";
                newCell.innerHTML = x;
                newCell.width = 50;
            }  else if ( y > 0 && x === 0) {
                newCell.className = "green";
                newCell.innerHTML = y;
                newCell.width = 50;
            } else {
                newCell.innerHTML = y * x;

            }
        }
    }
    document.querySelector("table").appendChild(Table)
}