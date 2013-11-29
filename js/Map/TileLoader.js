Map.TileLoader = function(map_grid, tile_dir, map_name){
	this.map_grid = map_grid;
	this.tile_dir = tile_dir;
	this.map_name = map_name;
	this.loaded_tiles = new Array();
};

/**
*	loads all the necessary tiles based on map_grid
*/
Map.TileLoader.prototype.load_tiles = function(){
	//concat all the rows in map_grid into one row
	var concat_map = new Array();
	for(var i = 0; i < this.map_grid.length; i++){
		concat_map = concat_map.concat(this.map_grid[i]);
	}

	//loading tiles into load_tiles property
	for(var j = 0; j < concat_map.length; j++){
		if(!this.loaded_tiles[concat_map[j]]){
			var tile = new Map.Tile(concat_map[j]);
			this.loaded_tiles[concat_map[j]] = tile;
		}
	}

};