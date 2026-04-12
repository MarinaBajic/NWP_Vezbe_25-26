class Dancer {
	name: string = "Unknown";
	style: string = "Unknown";
	static studioName = "Dance Studio";
	private experienceMonths: number = 0;

	// Note that typescript does not support multiple constructors,
	// but you can create multiple constructor declarations and only one 
	// that is implemented
	constructor();
	constructor(experienceMonths: number);
	constructor(name: string, style: string, experienceMonths: number);
	constructor(...args: any[]) {
		if (args.length == 0) {
			this.name = "Unknown";
			this.style = "Unknown";
			this.experienceMonths = 0;
		}
		else if (args.length == 1) {
			this.experienceMonths = args[0] ?? 0;
		}
		else if (args.length >= 3) {
			this.name = args[0] ?? "Unknown";
			this.style = args[1] ?? "Unknown";
			this.experienceMonths = args[2] ?? 0;
		}
	}

	// Methods
	train(): void {
		this.experienceMonths++;
	}

	perform(): void {
		console.log(this.name + " is performing " + this.style + " dance.");
	}

	// Getters and setters
	getExperienceMonths(): number {
		return this.experienceMonths;
	}

	setExperienceMonths(months: number): void {
		this.experienceMonths = months;
	}

	// Static methods
	static getStudioName(): string {
		return Dancer.studioName;
	}
}


// Creating objects
let dancer1: Dancer = new Dancer(26);
// or simpler
let dancer2 = new Dancer(54);
let dancer3 = new Dancer("Ana", "Salsa", 4);


// Using objects
console.log(dancer1.getExperienceMonths());
dancer1.train();
console.log(dancer1.getExperienceMonths());

dancer2.perform();

console.log(Dancer.getStudioName());

dancer3.name = "Mia";
console.log(dancer3.name);