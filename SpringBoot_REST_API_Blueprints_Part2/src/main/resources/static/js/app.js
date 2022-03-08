const app = (function () {

  var _authname = '';
  var listBluePrints = [];
  var points = 0;


  var _loadBlueprints = (data) => {
    data.map((bluePrint) => {
      const object = {};
      object.name = bluePrint[Object.keys(bluePrint)[2]];
      object.nPoints = bluePrint[Object.keys(bluePrint)[1]].length;
      listBluePrints.push(object);
    })

  }

  var _setAuthorName = (name) => {
    let text = name + "'s Blueprints";
    $('#author').html(text);
  }

  var setBlueprintsList = function (auth) {
    $('#table tbody').empty();
    _authname = auth;
    if (_authname == '') {
      alert('Please enter a name');
    }
    else {
      _setAuthorName(_authname);
      apimock.getBlueprintsByAuthor(_authname, _loadBlueprints);
      console.log(listBluePrints);
      listBluePrints.map(obj => {
        $('#table > tbody:last')
          .append($(`
              <tr>
                  <td>${obj.name}</td>
                  <td>${obj.nPoints}</td>
              </tr>`));
        points += obj.nPoints;    
        $("#totalPoints").html("Total user Points: " + points);
      });
    }

  };
  

  return {
    setBlueprintsList: setBlueprintsList,
    

  };

})();