// angular.module('angularApp', []).config(function($interpolateProvider){
//     $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
// })

angular.module('angularApp', [])

.controller('firstCtrl', function($scope, dataService) {

    $scope.learningNgChange = function() {
        console.log('A change has occurred!');
    };

    $scope.helloConsole = dataService.helloConsole;

    dataService.getFields(function(response) {
        console.log(response.data);
        $scope.fields = response.data;
    });

    $scope.deleteField = function(field, $index) {
        dataService.deleteField(field);
        $scope.fields.splice($index, 1);
    };

    // $scope.saveField = function(field, $index) {
    //     dataService.saveField(field);
    //     $scope.fields.push($index, 1);
    // };

})

.service('dataService', function($http) {

    this.helloConsole = function() {
        console.log('This is the hello console service!');
    };

    this.getFields = function(callback) {
        $http.get('mock/fields.json')
        .then(callback)
    };

    this.deleteField = function(field) {
        console.log("The " + field.name + "field has been deleted.")

    };

    this.saveField = function(field) {
        console.log("The " + field.name + "field has been saved.")

    };

});
