class Board {

  constructor(cols, rows) {
    this.rows = rows;
    this.cols = cols;
    this.w = width / cols;
    this.board = [];

  }

  strt() {

    for (let i = 0; i < this.cols; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.rows; j++) {

        this.board[i][j] = new Square(j, i, random(25, 250), random(25, 250));

      }
    }

  }


  show() {
    //spots
    for (let j = 0; j < this.board.length; j++) {
      for (let s of this.board[j]) {
        s.show();
      }
    }


  }

  // getRed(i) {
  //   let red = 0;
  //   for (let j = 0; j < this.cols; j++) {
  //     red += this.board[i][j].r;
  //   }
  //   return red;
  // } 

  sortRed() {

    let temp;
    let redHigh = 0;
    let num = 0;

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.rows - i; j++) {
        if (this.board[i][j].r > this.redHigh) {
         redHigh = this.board[i][j].r
         num = j;
        }
      }
      
      temp = this.board[i][this.rows - i];
      this.board[i][this.rows - i] = this.board[i][num];
      this.board[i][num] = temp;
      redHigh = 0;
      
    }


  }




}