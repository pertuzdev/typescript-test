type Person = {
  Name: string;
  "Favorite Food": string;
  "Favorite Movie": string;
  Status: "Active" | "Inactive";
  Date?: string;
};

const rocky: Person = {
  Name: "Rocky",
  "Favorite Food": "Sushi",
  "Favorite Movie": "Back to The Future",
  Status: "Inactive",
};

const miroslav: Person = {
  Name: "Miroslav",
  "Favorite Food": "Sushi",
  "Favorite Movie": "American Psycho",
  Status: "Active",
};

const donny: Person = {
  Name: "Donny",
  "Favorite Food": "Singapore chow mei fun",
  "Favorite Movie": "The Princess Bride",
  Status: "Inactive",
};

const matt: Person = {
  Name: "Matt",
  "Favorite Food": "Brisket Tacos",
  "Favorite Movie": "The Princess Bride",
  Status: "Active",
};

const antonio: Person = {
  Name: "Antonio",
  "Favorite Food": "Pupusas",
  "Favorite Movie": "Inception",
  Status: "Active",
};

const persons: Person[] = [rocky, miroslav, donny, matt, antonio];

const formatDate = (date: Date): string => {
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

const addDateToActiveRecords = (persons: Person[]): Person[] => {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  return persons.map((person) => {
    if (person.Status === "Active") {
      return { ...person, Date: formattedDate };
    }
    return person;
  });
};

const printActiveRecords = (persons: Person[]): void => {
  const activePersons = persons.filter((person) => person.Status === "Active");

  if (activePersons.length === 0) {
    console.log("No active records found.");
    return;
  }

  activePersons.forEach((person) => {
    console.log(
      `Name: ${person.Name}, Date: ${person.Date}, Favorite Movie: ${person["Favorite Movie"]}`
    );
  });
};

const sortByProperty = (
  people: Person[],
  property: keyof Person,
  sortOrder: "asc" | "desc"
): Person[] => {
  return [...people].sort((a, b) => {
    const aValue = a[property] ?? "";
    const bValue = b[property] ?? "";

    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });
};

const updatedPersons = addDateToActiveRecords(persons);
printActiveRecords(updatedPersons);

const sortedByName = sortByProperty(updatedPersons, "Name", "asc");
console.log("Sorted by Name:");
printActiveRecords(sortedByName);

const sortedByFavoriteMovie = sortByProperty(
  updatedPersons,
  "Favorite Movie",
  "desc"
);
console.log("Sorted by Favorite Movie:");
printActiveRecords(sortedByFavoriteMovie);
