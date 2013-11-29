Map.MapBuilder = function(map_grid, loaded_tiles, canvas_context){
	this.map_grid = map_grid;
	this.loaded_tiles = loaded_tiles;
	this.canvas_context = canvas_context;
};

/**
*	renders the map to the canvas
*/
Map.MapBuilder.prototype.render_map = function(){
	for(var i = 0; i < this.map_grid.length; i++){
		for(var j = 0; j < this.map_grid[i].length; j++){
			var needed_tile = this.map_grid[i][j];
			var right_tile = this.loaded_tiles[needed_tile];
			var y = i*right_tile.width;
			var x = j*right_tile.height;
			this.canvas_context.drawImage(document.getElementById('img_'+right_tile.name),x,y);
		}
	}
};