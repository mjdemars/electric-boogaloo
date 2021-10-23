function toggleInputCells(button) {
    var cells = document.getElementsByClassName('input');
    
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var input = cell.getElementsByTagName('input')[0];
  
      if (input != null) {
        var text = input.value;
        cell.innerHTML = text;
      } else {
        var text = cell.innerHTML;
        cell.innerHTML = '';
        var input = document.createElement('input');
        input.type = "text";
        input.value = text;
        cell.appendChild(input);
      }
    }
  }
  
  
  var rows = 10;
  var cols = 4;
  
  var table = document.createElement('table');
  table.classList.add('table');
  
  var thead = document.createElement('thead');
  var headRow = document.createElement('tr');
  var columnNames = ["Col1", "Col2", "Col3", "Col4"];
  
  for (var i = 0; i < 4; i++) {
    var th = document.createElement('th');
    th.appendChild(document.createTextNode(columnNames[i]));
    headRow.appendChild(th);
  }
  
  thead.appendChild(headRow);
  
  var tbody = document.createElement('tbody');
  
  for (var i = 0; i < rows; i++) {
    var tr = document.createElement('tr');
  
    for (var j = 0; j < cols; j++) {
      var td = document.createElement('td');
  
      if (j == 3) {
        td.classList.add("input");
        var input = document.createElement('input');
        input.type = "text";
        input.value = 'Row #' + (i + 1); // Add a value?
        td.appendChild(input);
        tr.appendChild(td);
        continue;
      }
      td.appendChild(document.createTextNode("x"));
      tr.appendChild(td);
    }
  
    tbody.appendChild(tr);
  }
  
  table.appendChild(thead);
  table.appendChild(tbody);
  document.body.appendChild(table);
  