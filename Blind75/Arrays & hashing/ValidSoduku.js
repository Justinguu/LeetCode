var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) { // Loop through each row and column
      let row = new Set(), // Initialize a Set to track numbers in the current row
          col = new Set(), // Initialize a Set to track numbers in the current column
          box = new Set(); // Initialize a Set to track numbers in the current 3x3 box
  
      for (let j = 0; j < 9; j++) { // Loop through each cell in the row and column
        let _row = board[i][j]; // Get the value in the current row
        let _col = board[j][i]; // Get the value in the current column
        let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]; // Get the value in the current 3x3 box
  
        if (_row != '.') { // If the value is not a dot (indicating an empty cell)
          if (row.has(_row)) return false; // Check if the row Set already contains this number
          row.add(_row); // Add the number to the row Set
        }
  
        if (_col != '.') { // If the value is not a dot (indicating an empty cell)
          if (col.has(_col)) return false; // Check if the column Set already contains this number
          col.add(_col); // Add the number to the column Set
        }
  
        if (_box != '.') { // If the value is not a dot (indicating an empty cell)
          if (box.has(_box)) return false; // Check if the box Set already contains this number
          box.add(_box); // Add the number to the box Set
        } 
      }
    }
    return true; // If all rows, columns, and boxes are valid, the Sudoku board is valid
  };