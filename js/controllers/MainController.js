app.controller('MainController', ['$scope', function($scope) {
    
    $scope.title = 'Start creating your list';
    
    // Items List Array
    $scope.list = [];
    $scope.item = [{
        id: '',
        title: '',
        items: []
    }];
    
    // Add an Item to the list
    $scope.addItem = function(index) {
        
        $scope.list.push($scope.item);

        // Clear input field after push
        $scope.item = "";

    }
    
    // TODO: validate input as non empty    
}]);