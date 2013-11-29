window.onload = function(){

	//init canvas
	var canvas = new Canvas('canvas', 112, 112);
	canvas.init();

	//creating a map
	var map = new Map("map1",".txt");

	//load the file for the map
	var map_parser = new MapParser(map.name+map.ext);
	map_parser.load_map();

	//loading tiles
	var tiles_loader = new TileLoader(map_parser.map, 'tiles', map.name);
	tiles_loader.load_tiles();

	//render map
	var map_builder = new MapBuilder(map_parser.map, tiles_loader.loaded_tiles, canvas.canvas_context);
	map_builder.render_map();

};