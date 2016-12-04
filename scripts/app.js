// angular.module('angularApp', []).config(function($interpolateProvider){
//     $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
// })

angular.module('angularApp', [])

.controller('firstCtrl', function($scope) {
    $scope.learningNgChange = function() {
        console.log('A change has occurred!');
    };

    $scope.fields = [
        {'name': 'title'},
        {'name': 'time'}
    ]

});
