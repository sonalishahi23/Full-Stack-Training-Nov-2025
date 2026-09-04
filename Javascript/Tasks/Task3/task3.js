const users = [
    {
        id: 101,
        name: "  alex JOHNSON ",
        dob: "1992-06-15",
        salary: "55000",
        skills: ["html", "css", "javascript"]
    },
    {
        id: 102,
        name: "  maria  smith  ",
        dob: "1988-11-03",
        salary: "72000",
        skills: ["react", "node", "css"]
    },
    {
        id: 103,
        name: "john doe",
        dob: "1996-02-25",
        salary: "48000",
        skills: ["vue", "javascript", "html"]
    }
];


// Task 1: String Operations

const formattedNames = users.map(user => {

    let name = user.name.trim();

    name = name.replace(/\s+/g, " ");

    name = name
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return name;
});

console.log("Task 1 - Formatted Names:");
console.log(formattedNames);


// Task 2: Array Operations

const allSkills = users.flatMap(user => user.skills);

const uniqueSkills = [...new Set(allSkills)];

uniqueSkills.sort();

const javascriptUsers = users.filter(user =>
    user.skills.includes("javascript")
).length;

console.log("Task 2 - Unique Skills:");
console.log(uniqueSkills);

console.log("JavaScript Users:");
console.log(javascriptUsers);


// Task 3: Number Operations

const salaries = users.map(user => Number(user.salary));

const totalSalary = salaries.reduce(
    (total, salary) => total + salary,
    0
);

const averageSalary = Math.round(
    totalSalary / salaries.length
);

const highestSalary = Math.max(...salaries);

const lowestSalary = Math.min(...salaries);

const salaryResult = {
    average: averageSalary,
    highest: highestSalary,
    lowest: lowestSalary
};

console.log("Task 3 - Salary Details:");
console.log(salaryResult);


// Task 4: Date Operations

function calculateAge(dob) {

    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference =
        today.getMonth() - birthDate.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 &&
            today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}


// Calculate age of each user

const usersWithAge = users.map(user => {

    let name = user.name.trim();

    name = name.replace(/\s+/g, " ");

    name = name
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return {
        name: name,
        age: calculateAge(user.dob)
    };
});

console.log("Task 4 - Users with Age:");
console.log(usersWithAge);


// Find oldest user

const oldestUser = usersWithAge.reduce((oldest, user) => {

    return user.age > oldest.age ? user : oldest;

});

console.log("Oldest User:");
console.log(oldestUser);