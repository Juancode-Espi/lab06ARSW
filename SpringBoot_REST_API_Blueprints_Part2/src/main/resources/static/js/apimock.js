//@author hcadavid

apimock=(function(){

	var mockdata=[];

	mockdata["johnconnor"]=	[{author:"johnconnor","points":[{"x":150,"y":120},{"x":215,"y":115}],"name":"house"},
	 {author:"johnconnor","points":[{"x":340,"y":240},{"x":15,"y":215}],"name":"gear"}];
	mockdata["maryweyland"]=[{author:"maryweyland","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"house2"},
	 {author:"maryweyland","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"gear2"}];
	 mockdata["JuanP"]=[{author:"JuanP","points":[{"x":141,"y":120},{"x":15,"y":115}],"name":"arsw1"},
	 {author:"JuanP","points":[{"x":10,"y":140},{"x":25,"y":115}],"name":"arsw2"},{author:"JuanP","points":[{"x":103,"y":50},{"x":215,"y":215}],"name":"Aaaaaaa"}];
	 mockdata["Andres"]=[{author:"Andres","points":[{"x":141,"y":128},{"x":15,"y":115}],"name":"book1"},
	 {author:"Andres","points":[{"x":10,"y":140},{"x":25,"y":145}],"name":"book2"},{author:"Andres","points":[{"x":40,"y":141},{"x":20,"y":245}],"name":"partitures"}];

	return {
		getBlueprintsByAuthor:function(authname,callback){
			callback(
				mockdata[authname]
			);
		},

		getBlueprintsByNameAndAuthor:function(authname,bpname,callback){

			callback(
				mockdata[authname].find(function(e){return e.name===bpname})
			);
		},
		getData : () =>{
			return mockdata;
		} 
	}	

})();

/*
Example of use:
var fun=function(list){
	console.info(list);
}

apimock.getBlueprintsByAuthor("johnconnor",fun);
apimock.getBlueprintsByNameAndAuthor("johnconnor","house",fun);*/