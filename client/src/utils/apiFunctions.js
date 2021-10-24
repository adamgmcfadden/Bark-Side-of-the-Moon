// Sample API Functions ready for implementation

// Import dependencies
const petfinder = require("@petfinder/petfinder-js");   // Petfinder

// Added keys for now, will run through .env later
const api_key = 'iEi7zznBCnZgykZhogUiQVMBVvCszCqyWb3C96dCLAeRnVySXK';   // Petfinder Key
const api_secret = '0DWQGue3dl1r1CBvs9NmT31IzKKMcNqTqPCYfpPl';  // Petfiner Secret

// Establish Petfinder Client
const pfClient = new petfinder.Client({ apiKey: api_key, secret: api_secret });

// Search for *ALL* animals of a type - returns object of animals
function searchType(animalType) {
    pfClient.animal.search({
        type: animalType
    })
        .then((res) => {
            // Check if response exists
            if (!res) return false;

            // Then save and return the data
            const searchResults = res.data.animals;
            console.log(searchResults);
            return searchResults;
        })
}

// Take response and filter by given breed
function searchBreed(pets, animalBreed) {
    let breedFilter = [];
    for (let i = 0; i < pets.length; i++) {
        const current = pets[i].breed;
        if (animalBreed == current) {
            breedFilter.push(pets[i]);
        }
    }
    if (breedFilter) pets = breedFilter;
    return pets;
}

// Take response and filter by given age
function searchAge(pets, animalAge) {
    let ageFilter = [];
    for (let i = 0; i < pets.length; i++) {
        const current = pets[i].age;
        if (animalAge == current) {
            ageFilter.push(pets[i]);
        }
    }
    if (ageFilter) pets = ageFilter;
    return pets;
}



// Sample Search for *BSoTM App* data
function petSearch(animalType, animalBreed, animalAge) {
    // Get data
    let pets = searchType(animalType);
    if (!pets) return false;

    // If breed is submitted, filter results
    if (animalBreed) {
        const newPets = searchBreed(pets, animalBreed);
        if (newPets) pets = newPets;
    }

    if (animalAge) {
        const newPets = searchAge(pets, animalAge);
        if (newPets) pets = newPets
    }

    // All filters done check if data exists and if so return
    if (pets) return pets;
    return false;
}