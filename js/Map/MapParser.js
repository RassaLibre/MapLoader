Map.MapParser = function(file){
	this.file = file;
	this.directory = 'maps/';
	this.map = new Array();
	this.tile_delimiter = '|';
	this.row_delimiter = '\n';
};

/**
*	function parses a file with map and saves the map in structure Array of arrays
*	to map property
*/
Map.MapParser.prototype.load_map = function(){
	var req = new XMLHttpRequest();
	var url = 'http://localhost:3000/'+this.directory+this.file;
	req.open("GET", url, false);
	req.send();
	if(req.status==200){
		var loaded_string = req.responseText;
		//cut on lines
		var rows = loaded_string.split(this.row_delimiter);
		//go through each line and make an array of characters from it
		for(var i = 0; i < rows.length; i++){
			this.map.push(rows[i].split(this.tile_delimiter));
		}
	}
	else alert("Error executing XMLHttpRequest call!");
};

/**
*	function returns number of rows needed in the canvas
*/
Map.MapParser.prototype.get_number_of_rows = function(){
	return this.map.length;
};

/**
*	function returns numver of columns in the canvas
*/
Map.MapParser.prototype.get_number_of_columns = function(){
	return this.map[0].length;
};