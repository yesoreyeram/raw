(function(){
	var model = raw.models();
	
	var names = model.dimension()
        .title('Name')
        .types(String)
        .required(1);
    
    var dimensions = model.dimension()
      .title('Dimensions')
      .types(String)
      .multiple(true)
      .required(2);
    
    var chart = raw.chart()
		.title("Pies chart")
		.description("Pies description.")
		.thumbnail("imgs/scatterPlot.png")
	    .category('Dispersion')
	    .model(model)
	
	chart.draw()
	
})()