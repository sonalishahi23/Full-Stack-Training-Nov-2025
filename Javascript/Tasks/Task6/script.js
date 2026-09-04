const tableBody = document.getElementById("tableBody");
const message = document.getElementById("message");
const searchInput = document.getElementById("searchInput");

const apiURL = "https://jsonplaceholder.typicode.com/users";

let usersData = [];


fetch(apiURL)

    .then(function (response) {

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        return response.json();
    })

    .then(function (users) {

        usersData = users;

        message.style.display = "none";

        displayUsers(usersData);
    })

    .catch(function (error) {

        console.error(error);

        message.textContent =
            "Something went wrong while loading users.";
    })

    .finally(function () {

        console.log("API request completed");
    });


function displayUsers(users) {

    tableBody.innerHTML = "";

    if (users.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="5">No users found</td>
            </tr>
        `;

        return;
    }


    users.forEach(function (user) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.name}</td>

            <td>${user.email}</td>

            <td>
                ${user.address.street},
                ${user.address.suite},
                ${user.address.city},
                ${user.address.zipcode}
            </td>

            <td>${user.phone}</td>

            <td>${user.company.name}</td>
        `;

        tableBody.appendChild(row);
    });
}


searchInput.addEventListener("input", function () {

    const searchValue = searchInput.value.trim();

    if (searchValue === "") {

        displayUsers(usersData);

        return;
    }


    const regex = new RegExp(searchValue, "i");


    const filteredUsers = usersData.filter(function (user) {

        const userData = `
            ${user.name}
            ${user.email}
            ${user.address.street}
            ${user.address.suite}
            ${user.address.city}
            ${user.address.zipcode}
            ${user.phone}
            ${user.company.name}
        `;


        return regex.test(userData);
    });


    displayUsers(filteredUsers);

});