angular.module('plunker', ['ui.bootstrap', 'main.controller']);
angular.module('main.controller', ['data.factory'])
.controller('MainCtrl', ctrl);

ctrl.$inject = ['$uibModal', 'Data'];
function ctrl ($uibModal, Data) {
  
    var vm = this;
    Data.initView(vm);
    vm.selectStyle = function (style) {
        
        Data.showColors(vm, style);
    };
      
    vm.submit = function () {
        
        var selectedColors = Data.getSelectedColorArray(vm.selectedColors);
    
        $uibModal.open({
            templateUrl: 'modal.html',
            controller: modalCtrl,
            controllerAs: 'mvm',
            resolve: {
                data: function () {
              
                    return {
                        selectedColors: selectedColors,
                        title: vm.selectedStyle.name
                    };
                }
            }
        });
    };
}

modalCtrl.$inject = ['$uibModalInstance', 'data'];
function modalCtrl ($uibModalInstance, data) {
  
    var mvm = this;
    console.log(data);
    Object.assign(mvm, data);
    mvm.close = function () {
        
        $uibModalInstance.dismiss();
    }
}
