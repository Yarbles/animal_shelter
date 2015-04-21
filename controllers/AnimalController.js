animalShelter.controller('AnimalsCtrl', function AnimalsCtrl($scope, ShelterFactory) {

    $scope.animals = ShelterFactory.animals;
    $scope.count = ShelterFactory.count;

    $scope.typeOptions = ['Dog', 'Cat', 'Bunny', 'Turtle'];

    $scope.animalType = $scope.typeOptions[0];
    $scope.searchType = $scope.typeOptions[0];

    $scope.addAnimal = function() {
        var name = $scope.animalName;
        var type = $scope.animalType;
        ShelterFactory.addAnimal(name, type);
        $scope.animalName = null;
    };


    $scope.countAnimals = function() {
        var type = $scope.searchType;
        var count = ShelterFactory.countAnimals(type);
    };

});
