var Word = (function(){
	var blobSize = 21;
	var margin = 3;
	var corner = 3;
	var size = blobSize - margin;
	var offset = margin / 2;
	var closedAttribute = {fill: "black", stroke: "black"};
	var openAttribute = {fill: "none", stroke: "gray"};
	
	var Blob = function(x,y, attributes) {
		attributes = attributes || openAttribute;
		this.drawOn = function(paper) {
			paper.rect(
				blobSize * x + offset, blobSize * y + offset, size, size, corner
			).scale(1,-1, 0, 0).translate(0, 5 * blobSize).attr(attributes);
		}
	}

	var Column = function(x, fill) {
		var blobs = [];
		n = fill.length - 1;
		for (var y = 0; y < fill.length; y++) {
			blobs.push(new Blob(x, y, fill[y] ? closedAttribute : openAttribute));
		}
		this.drawOn = function(paper) {
			for (var i = 0; i < blobs.length; i++) {
				blobs[i].drawOn(paper);
			}
		}
	}

	var Letter = function(x, data) {
		var columns = []
		for (var dx = 0; dx < data.length; dx++) {
			columns.push(new Column(x+dx, data[dx]));
		}
		this.drawOn = function(paper) {
			for (var i = 0; i < columns.length; i++) {
				columns[i].drawOn(paper);
			}
			return columns.length;
		}
	}
	
	var letters = {
		"E" : function(x) {
			return new Letter(x,[
				[true,true,true,true,true],
				[true,false,true,false,true],
				[true,false,true,false,true],
				[true,false,false,false,true]						
			]);
		},
		"F" : function(x) {
			return new Letter(x,[
				[true,true,true,true,true],
				[false,false,true,false,true],
				[false,false,true,false,true],
				[false,false,false,false,true]						
			]);
		},
		"R" : function(x) {
			return new Letter(x,[
				[true,true,true,true,true],
				[false,false,true,false,true],
				[false,false,true,false,true],
				[true,true,false,true,false]						
			]);
		},
		"A" : function(x) {
			return new Letter(x,[
				[true,true,true,true,false],
				[false,false,true,false,true],
				[false,false,true,false,true],
				[true,true,true,true,false]						
			]);
		},
		"X" : function(x) {
			return new Letter(x,[
				[true,true,false,true,true],
				[false,false,true,false,false],
				[false,false,true,false,false],
				[true,true,false,true,true]						
			]);
		},
		" " : function(x) {
			return new Letter(x,[
				[false,false,false,false,false],
			]);
		}
	};
	
	return function(word) {
		var characters = word.split("").join(" ").split("");
		this.drawOn = function(paper) {
			var x = 0;
			for (var i = 0; i < characters.length; i++) {
				x += letters[characters[i]](x).drawOn(paper);
			}
		};
	}
})();
