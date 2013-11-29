Map.Canvas = function(id, width, height){
	this.canvas_id = id;
	this.canvas_obj = null;
	this_canvas_context = null;
	this.canvas_width = width;
	this.canvas_height = height;
};

/**
*	inits the canvas and sets the necessary properties
*/
Map.Canvas.prototype.init = function(){
	this.canvas_obj = document.getElementById(this.canvas_id);
	this.canvas_obj.width = this.canvas_width;
	this.canvas_obj.height = this.canvas_height;
	this.canvas_context = this.canvas_obj.getContext('2d');	
};

/**
*	clears the canvas
*/
Map.Canvas.prototype.clear = function(){
	this.canvas_context.clearRect(0, 0, 112, 112);	
};