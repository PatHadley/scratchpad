angular
  .module("RijksTest", ['ngResource'])
  .factory("Rijk", rijkFactory)
  .controller("rijksController", rijksIndexCtrl);
r
rijkFactory.$inject = ["$resource"];
function rijkFactory($resource){
  var Rijk = $resource("https://www.rijksmuseum.nl/api/en/collection/?key=w5b8sjYU&format=json&imgonly=true&p=2000&ps=200", {}, {
    'query': { method: "GET", isArray: false }
  });
  console.log("Hello")
  return Rijk;
  console.log(Rijk);
}

rijksIndexCtrl.$inject = ["Rijk"];
function rijksIndexCtrl(Rijk){
  var self   = this;


  Rijk.query(function(data){
    self.title = artObjects.title
    console.log("Hello?");
    console.log(self.title);
  });
}

// rijksIndexCtrl();

// rijkFactory();

