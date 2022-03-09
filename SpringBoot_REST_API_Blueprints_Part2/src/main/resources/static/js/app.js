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
                  <td><button class="btn btn-primary">Open</button></td>
              </tr>`).on("click", "button", () => drawCanvas(_authname, obj.name)));
        points += obj.nPoints;
        $("#totalPoints").html("Total user Points: " + points);
      });
    }

  };

  const drawCanvas = (author, bname) => {
        
    apimock.getBlueprintsByNameAndAuthor(author, bname, (data) => {   
      const points = data.points;
      let canvas = $('#canvas')[0];
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.moveTo(points[0].x, points[0].y);
        console.log(points[0].x, points[0].y);
        for (var i = 1; i < points.length; i++) {
          console.log(points[i].x, points[i].y);
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.stroke();
      }
    })
  }


  return {
    setBlueprintsList: setBlueprintsList,


  };

})();