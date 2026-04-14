class Species {
	constructor(public name: string) { }
}

class Animal {
	constructor(public name: string, public species: Species) { }
}

const animals: Animal[] = [];

const addAnimal = () => {
	const nameInput = document.getElementById("animalName") as HTMLInputElement;
	const speciesSelect = document.getElementById("animalSpecies") as HTMLSelectElement;

	const nameValue = nameInput.value.trim();
	const speciesValue = speciesSelect.value;

	if (nameValue === "") return;

	let species = new Species(speciesValue)
	let animal = new Animal(nameValue, species)

	animals.push(animal);
	nameInput.value = ""
	updateAnimalList();
};

const updateAnimalList = () => {
	const list = document.getElementById("animalList") as HTMLUListElement;
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

const deleteAnimal = (index: number) => {
	animals.splice(index, 1);
	updateAnimalList();
	console.log(`Deleted animal at index: ${index}`);
};

document.getElementById("addAnimalBtn")?.addEventListener("click", addAnimal);