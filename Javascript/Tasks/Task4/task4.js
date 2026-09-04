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


// Format Name

function formatName(name) {

    return name
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase()
        .split(" ")
        .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(" ");

}


// Calculate Age

function calculateAge(dob) {

    const birthDate = new Date(dob);
    const today = new Date();

    let age =
        today.getFullYear() - birthDate.getFullYear();

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


// Format Date

function formatDate(dob) {

    const date = new Date(dob);

    return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

}


// Table Body

const tableBody = document.getElementById("userTable");


// Edit Dialog Elements

const editDialog = document.getElementById("editDialog");

const editForm = document.getElementById("editForm");

const editName = document.getElementById("editName");

const editDob = document.getElementById("editDob");

const editSalary = document.getElementById("editSalary");

const editSkills = document.getElementById("editSkills");

const cancelButton = document.getElementById("cancelButton");


// Store ID of user being edited

let editingUserId = null;


// Display Users

function displayUsers() {

    tableBody.innerHTML = "";

    users.forEach(user => {

        // Create Row

        const row = document.createElement("tr");


        // Name

        const nameCell = document.createElement("td");

        nameCell.textContent = formatName(user.name);


        // DoB

        const dobCell = document.createElement("td");

        dobCell.textContent = formatDate(user.dob);


        // Age

        const ageCell = document.createElement("td");

        ageCell.textContent = calculateAge(user.dob);


        // Salary

        const salaryCell = document.createElement("td");

        salaryCell.textContent = Number(user.salary);


        // Skills

        const skillsCell = document.createElement("td");

        skillsCell.textContent = user.skills
            .map(skill =>
                skill.charAt(0).toUpperCase() + skill.slice(1)
            )
            .join(", ");


        // Action

        const actionCell = document.createElement("td");


        // Delete Button

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {

            deleteUser(user.id);

        });


        // Edit Button

        const editButton = document.createElement("button");

        editButton.textContent = "Edit";

        editButton.addEventListener("click", function () {

            openEditDialog(user.id);

        });


        // Add buttons to Action Cell

        actionCell.appendChild(deleteButton);

        actionCell.appendChild(editButton);


        // Add cells to row

        row.appendChild(nameCell);

        row.appendChild(dobCell);

        row.appendChild(ageCell);

        row.appendChild(salaryCell);

        row.appendChild(skillsCell);

        row.appendChild(actionCell);


        // Add row to table

        tableBody.appendChild(row);

    });

}


// Delete User

function deleteUser(id) {

    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex !== -1) {

        users.splice(userIndex, 1);

        displayUsers();

    }

}


// Open Edit Dialog

function openEditDialog(id) {

    const user = users.find(user => user.id === id);

    if (!user) {
        return;
    }


    // Save ID

    editingUserId = id;


    // Fill Form

    editName.value = formatName(user.name);

    editDob.value = user.dob;

    editSalary.value = user.salary;

    editSkills.value = user.skills.join(", ");


    // Open Dialog

    editDialog.showModal();

}


// Update User

editForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const user = users.find(user => user.id === editingUserId);

    if (!user) {
        return;
    }


    // Update values

    user.name = editName.value;

    user.dob = editDob.value;

    user.salary = editSalary.value;

    user.skills = editSkills.value
        .split(",")
        .map(skill => skill.trim())
        .filter(skill => skill !== "");


    // Refresh table

    displayUsers();


    // Close Dialog

    editDialog.close();

    editingUserId = null;

});


// Cancel Button

cancelButton.addEventListener("click", function () {

    editDialog.close();

    editingUserId = null;

});


// Display table

displayUsers();