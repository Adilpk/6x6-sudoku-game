$(document).ready(function () {
  random_choice = Math.floor(Math.random() * 3 + 1);
  console.log(random_choice);
  if (random_choice === 1) {
    var sudoku_array1 = [
      ["1", null, null, "5", null, "4"],
      [null, "3", "4", null, null, "2"],
      ["3", "1", null, null, "5", null],
      [null, null, null, "3", "2", "1"],
      ["2", "5", "1", "6", null, null],
      ["4", null, null, "2", "1", "5"],
    ];
 
  }
  if (random_choice === 2) {
    var sudoku_array1 = [
      ["3", "1", null, null, null, null],
      [null, null,null, null, "1", "3"],
      ["2", "6", "4", "3", "5", null],
      ["1", null, null, "4", null, "2"],
      [null, "4", "1", "2", "3", null],
      ["6", null, null, null, null, "5"],
    ];

  }
  if (random_choice === 3) {
    var sudoku_array1 = [
      [null, null, "5", "6", null, "1"],
      ["6", "1", "3", null, null, null],
      ["3", null, null, "1", null, "2"],
      ["2", null, "1", null, "4", "5"],
      [null, "3", "2", "4", "1", null],
      [null, "4", null, "5", "2", null],
    ];
 
  }

  var sudoku_array = sudoku_array1;
 

  function positionempty(row, col) {
    return sudoku_array[row][col] === null;
  }
  function checkrow(number, row) {
    return sudoku_array[row].includes(number);
  }
  function checkcolumn(number, col) {
    for (i = 0; i < 6; i++) {
      if (sudoku_array[i][col] === number) {
        return true;
      }
    }
    return false;
  }
  function checkmatrix(number, row, col) {
    var r = Math.floor(row / 2) * 2;
    var c = Math.floor(col / 3) * 3;
    for (var i = r; i < r + 2; i++) {
      for (var j = c; j < c + 3; j++) {
        if (sudoku_array[i][j] === number) {
          return true;
        }
      }
    }
    return false;
  }
  function validnumber(number){
    if (number < 7 && number !=0 ){
      return true
    }
  }
  console.log(sudoku_array);
  for (i = 0; i < 6; i++) {
    for (j = 0; j < 6; j++) {
      $("#" + i + j).val(sudoku_array[i][j]);
    }
  }
  count = 0;
  $("input").keyup(function () {
    d = $(this).attr("id");
    row = d.charAt(0);

    col = d.charAt(1);
    number = $("#" + row + col).val();
   
    if (validnumber(number) &&
      !checkrow(number, row) &&
      !checkcolumn(number, col) &&
      !checkmatrix(number, row, col)
    ) {
      sudoku_array[row][col] = number;
      count = count + 1;
    } else {
      count=count+0;
      number = $("#" + row + col).val(null);
      swal("invalid Number", "check your entered data", "error", {
        button: "OK",
      });
    }
    console.log(count);
    if(count == 16){
      swal("winner", "if you play again refresh again", "success", {
        button: "OK",
      });
    }
  });
    $('button').click(function() {
      location.reload();
  });
 
})