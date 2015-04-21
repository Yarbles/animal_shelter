animalShelter.factory('ShelterFactory', function ShelterFactory() {
    var factory = {};
    factory.animals = [];
    factory.count = 0;

    factory.addAnimal = function(name, type) {
        this.animals.push({ name:name, type:type, adopted:false })
    };

    factory.countAnimals = function(animalType) {
        count = 0;
        this.animals.forEach(function(animal) {
            if(animal.type = animalType) {
                count += 1;
            };
        });
        this.count = count;
    };

    return factory;
});
