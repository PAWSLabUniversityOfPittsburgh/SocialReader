(function () {
    'use strict';
    
    angular.module('app', ['socialReader']);
	angular.module('socialReader', []);
	
    socialReader.$inject = [];
    
    var directivesModule = angular.module('socialReader');
	directivesModule.directive('socialReader', socialReader);

    function socialReader() {
        var directive = {
            link: link,
            controller: controller,
            controllerAs: 'vm',
            templateUrl: 'template.html',
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

            vm.getUser = function(){
                return "gat23"
            }

            vm.getGroup = function(){
                return "ISD2014Spring"
            }
                
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
