var Tile = function(name){
	this.width = 16;
	this.height = 16;
	this.name = name;
	this.img = new Image();
	this.image_loaded = false;
};

/**
*	function loads the pic for the tile
*/
Tile.prototype.load_tile = function(src){
	var self = this;
	this.img.onload = function(){
		self.image_loaded = true;
	};
	this.img.src = src;
};

Tile.prototype.draw = function(src, context, x, y){
	//TODO: dynamic loading please you...
	context.drawImage(document.getElementById('img_'+this.name), y, x);	
};

