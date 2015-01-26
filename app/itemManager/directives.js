(function () {
    'use strict';
    
    angular.module('itemManager', []);

    var directivesModule = angular.module('itemManager');

    directivesModule.directive('itemManager', itemManager);

    itemManager.$inject = [];

    function itemManager() {
        var directive = {
            link: link,
            controller: controller,
            controllerAs: 'vm',
            templateUrl: 'itemManager/template.html',
            restrict: 'A'
        };
        
        return directive;

        function link(scope, element, attrs, controller) {
            
        }
        
        function controller() {
            var vm = this;
            
            vm.updateMethod = null;
            vm.editMethod = null;
            
            vm.updateItem = updateItem;
            vm.editItem = editItem;
            vm.respondToUpdatesWith = respondToUpdatesWith;
            vm.respondToEditsWith = respondToEditsWith;
                
            function updateItem(item) {
                vm.updateMethod(item);
            }
            
            function editItem(item) {
                vm.editMethod(item);
            }
            
            function respondToUpdatesWith(method) {
                vm.updateMethod = method;
            }
            
            function respondToEditsWith(method) {
                vm.editMethod = method;
            }
        }
    }

}());
