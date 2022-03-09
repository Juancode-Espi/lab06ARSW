var apiclient=(function(){
    const getBlueprintsByAuthor = (author,callback) =>{
        $.get("/blueprints/authors/"+author,(data)=>{
            callback(data);

        }).fail(()=>{
            alert("Error al intentar buscar autor");
        })
    }
    const getBlueprintsByNameAndAuthor = (author,name,callback) =>{
        $.get("/blueprints/authors/"+author + "/bpname/"+ name,(data)=>{
            callback(data);

        }).fail(()=>{
            alert("Error al intentar buscar autor y nombre");
        })
    }
    return{
        getBlueprintsByAuthor:getBlueprintsByAuthor,
        getBlueprintsByNameAndAuthor:getBlueprintsByNameAndAuthor
    }

})();