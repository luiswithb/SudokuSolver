class Board{
	constructor(){
		this.boardArray = [];

		for(let i = 0; i < 9; i++){
			this.boardArray[i] = [];
		}

		for (let i = 0; i < 9; i++){ 
		    for (let j = 0; j < 9; j++){ 
		    	this.boardArray[i][j] = " ";
		    }
		}
	}

	checkRow(num, row){
		let safe = true;

		for (let i = 0; i < 9; i++){
		    if(num == this.boardArray[row][i]){
		    	safe = false;		    		
		    }
		}
		return safe;
	}

	checkCol(num, col){
		let safe = true;

		for (let i = 0; i < 9; i++){
		    if(num == this.boardArray[i][col]){
		    	safe = false;		    		
		    }
		}
		return safe;
	}

	findSquare(row, col){
		if([0,1,2].includes(row) && [0,1,2].includes(col)){
			return [0,0]
		}
		else if([3,4,5].includes(row) && [0,1,2].includes(col)){
			return [3,0]
		}
		else if([6,7,8].includes(row) && [0,1,2].includes(col)){
			return [6,0]
		}
		else if([0,1,2].includes(row) && [3,4,5].includes(col)){
			return [0,3]
		}
		else if([3,4,5].includes(row) && [3,4,5].includes(col)){
			return [3,3]
		}
		else if([6,7,8].includes(row) && [3,4,5].includes(col)){
			return [6,3]
		}
		else if([0,1,2].includes(row) && [6,7,8].includes(col)){
			return [0,6]
		}
		else if([3,4,5].includes(row) && [6,7,8].includes(col)){
			return [3,6]
		}
		else{
			return [6,6]
		}
	}

	checkSquare(num, row, col){
		let safe = true;
		let coord = this.findSquare(row,col);
		let rowC = coord[0];
		let colC = coord[1];

		for (let row1 = rowC; row1 < coord[0] + 3; row1++){ 
		    for (let col1 = colC; col1 < coord[1] + 3; col1++){
		    	if(this.boardArray[row1][col1] == num){
					safe = false;
		    	}
		    }
		}
		return safe;
	}

	firstEmptySpace(){
		let coord = [];

		for (let i = 0; i < 9; i++){ 
		    for (let j = 0; j < 9; j++){
		    	if(this.boardArray[i][j] == " "){
		    		coord = [i,j];
		    		return coord;		    		
		    	}
		    }
		}
		return false;
	}

	findUnsafe(){
		let coord = [];
		for (let i = 0; i < 9; i++){ 
		    for (let j = 0; j < 9; j++){
		    	if(!safe(this.boardArray[i][j],i,j)){
		    		coord = [i,j];
		    		return coord;
		    	}
		    }
		}
		return false;
	}

	safe(num, row, col){
		if(this.checkRow(num,row) && this.checkCol(num, col) && this.checkSquare(num, row, col)){
			return true;
		}
		return false;
	}

	getTableArr(){
		let content = [];

		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				content.push(this.boardArray[i][j]);
			}
		}
		return content;
	}

	add(num, row, col){
		this.boardArray[row][col] = num;
	}

	fill(){
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				let num = (Math.floor(Math.random() * 9)) + 1;				
				if((Math.floor(Math.random() * 4) + 1) == 1){
					if(this.safe(num, i, j)){
						this.boardArray[i][j] = num;
					}
				}
			}
		}
	}

	solve(){
		if(!this.firstEmptySpace()){
			return true;
		}

		let coords = this.firstEmptySpace();
		let row = coords[0];
		let col = coords[1];

		for (let i = 1; i < 10; i++) {
			if(this.safe(i,row,col)){
				this.boardArray[row][col] = i;
				if(this.solve()){
					return true;
				}
				this.boardArray[row][col] = " ";
			}
		}
		return false;
	}

	customFill(customArray){
		let count = 0;
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
					this.boardArray[i][j] = customArray[count];
					count++;
			}
		}
	}
}
