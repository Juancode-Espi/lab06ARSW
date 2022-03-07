var app = (function () {
    
    var authname = '';
    var listBluePrints = [];
    var data = apimock.getData();
    
    var _loadBlueprints = () =>{
      data.map( (auth) => {
        auth.map( (bluePrint) =>{
          const object = {};
          object.name = bluePrint[Object.keys(bluePrint)[2]];
          object.nPoints = bluePrint[Object.keys(bluePrint)[1]].length;
          listBluePrints.push(object);
        })
      })
    }

    var publicMethod = function () {
      _loadBlueprints();
      console.log(listBluePrints);
      
      
    };
    var setAuthorName = (name) =>{
      ('#auth').val(name);
    }
  
    return {
      publicMethod: publicMethod,
      setAuthorName : setAuthorName

    };
  
  })();