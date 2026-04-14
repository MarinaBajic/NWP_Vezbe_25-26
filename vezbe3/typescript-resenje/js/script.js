"use strict";
class Species {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Animal {
    name;
    species;
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
}
const animals = [];
const addAnimal = () => {
    const nameInput = document.getElementById("animalName");
    const speciesSelect = document.getElementById("animalSpecies");
    const nameValue = nameInput.value.trim();
    const speciesValue = speciesSelect.value;
    if (nameValue === "")
        return;
    let species = new Species(speciesValue);
    let animal = new Animal(nameValue, species);
    animals.push(animal);
    nameInput.value = "";
    updateAnimalList();
};
const updateAnimalList = () => {
    const list = document.getElementById("animalList");
    list.innerHTML = "";
    animals.forEach((animal, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${animal.name} (${animal.species.name}) `;
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.addEventListener("click", () => {
            deleteAnimal(index);
        });
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
};
const deleteAnimal = (index) => {
    animals.splice(index, 1);
    updateAnimalList();
    console.log(`Deleted animal at index: ${index}`);
};
document.getElementById("addAnimalBtn")?.addEventListener("click", addAnimal);
