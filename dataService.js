angular.module('data.factory', ['plunker'])
.factory('Data', dataFactory);

dataFactory.$inject = ['$http'];
function dataFactory ($http) {

    var data;

    return {
        getSelectedColorArray: getArray,
        initView: init,
        showColors: showColors
    };
    
    function getArray (selectedColors) {
        
        return Object.keys(selectedColors)
        .map(function (id) {
            
            return {
                id: id,
                name: data.colors[id]
            };
        });    
    }
    
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
    
        var colors = style.colors.map(function (id) {
      
            return {
                id: id.toString(),
                name: data.colors[id]
            };
        });
        vm.selectedStyle = style;
        vm.colors = colors;
        vm.showColors = true;
    }
}
