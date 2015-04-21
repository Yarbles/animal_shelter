animalShelter.controller('AdoptionCtrl', function AdoptionCtrl($scope, ShelterFactory) {
    $scope.animals = ShelterFactory.animals;

    $scope.adoptAnimal = function(animal) {
        animal.adopted = true;
    };

});
