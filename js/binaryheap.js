
function BinaryHeap(type) {   //Constructor for the binary heap tree (min-heap tree). 
	this.type = type.toLowerCase(); //Determines what type of binary heap tree this is (max or min heap tree).  

	this.array = [];

	this.bubbleUP = function (node) { //When inserting we must re-heap the tree to maintain its heap property.  

		this.array.push(node); //Adds the new array to the bottom level of the heap.

		var i = this.array.length - 1; //Gets the last index of the array. 

		var finished = false;




		while (!finished) {
			if (this.array[i] < this.array[Math.floor((i - 1) / 2)]) {
				//if the inserted element is less than its parent swap
				var tmp = this.array[Math.floor((i - 1) / 2)];
				this.array[Math.floor((i - 1) / 2)] = this.array[i];
				this.array[i] = tmp;

				//Updates the current index value of the swapped node to compare next 
				i = Math.floor((i - 1) / 2);
			}

			else {
				finished = true;
			}
		}

	};

	this.bubbleDOWN = function () {

		var end = this.array.length - 1;

		var i = 0;

		this.array[i] = this.array[end]; //Replaces the root with the last element on the last level of the tree. 

		this.array.pop(); //Deletes the last level node of the tree.  

		var finished = false;




		while (!finished) {
			if (this.array[i] > this.array[2 * i + 1] || this.array[2 * i + 2]) { //If the root is bigger than any of its children

				if (this.array[2 * i + 1] && this.array[2 * i + 2] != undefined)
					var smallestChildIndex = (this.array[2 * i + 1] <= this.array[2 * i + 2]) ? (2 * i) + 1 : (2 * i) + 2; //If the left child is smaller or equal to the right child return the index of the left child otherwise return index of the right child. 

				else if (this.array[2 * i + 1] != undefined)
					var smallestChildIndex = (2 * i) + 1;

				else
					var smallestChildIndex = (2 * i) + 2;

				var tmp = this.array[smallestChildIndex];

				this.array[smallestChildIndex] = this.array[i];

				this.array[i] = tmp;

				i = smallestChildIndex;
			}

			else {
				finished = true;
			}
		}

	};

	this.insert = function (node) {	//Inserts into the Binary Heap Tree.
		this.bubbleUP(node);
	};

	this.showBinaryHeap = function () {	//Displays the content of the Binary Heap Tree.
		console.log(this.array);
	};

	this.remove = function () {	//Deletes/Removes an node from the Binary Tree then reheaps.
		this.bubbleDOWN();
	};

	this.get = function (index) {		//Accesses an element of the tree. 
		return this.array[index];
	}
}
