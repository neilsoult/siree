angular.module('data.factory', ['plunker'])
.factory('Data', dataFactory);

dataFactory.$inject = ['$http'];
function dataFactory ($http) {
  
  var data;
  
  return {
    initView: init,
    showColors: showColors
  };
  
  function init (vm) {
    
    $http.get('data.json')
    .then(function success (response) {
      
      data = response.data;
      vm.styles = data.styles;
    })
    .catch(function fail (message) {
      
      alert(JSON.stringify(message));
    })
  }
  
  function showColors (vm, style) {
    
    var colors = data.colors.filter(function (color) {
      
      return style.colors.indexOf(color.id) > -1;
    });
    vm.selectedStyle = style;
    vm.colors = colors;
    vm.showColors = true;
  }
}