const registrationForm = document.getElementById("registrationForm");


registrationForm?.addEventListener("submit", function (e) {

    e.preventDefault();


    let fname = registrationForm.querySelector("#fname");

    let lname = registrationForm.querySelector("#lname");

    let email = registrationForm.querySelector("#email");

    let phone = registrationForm.querySelector("#phone");

    let password = registrationForm.querySelector("#password");

    let dob = registrationForm.querySelector("#dob");

    let gender = registrationForm.querySelector(
        '[name="gender"]:checked'
    );

    let skills = registrationForm.querySelectorAll(
        '[name="skills"]:checked'
    );

    let country = registrationForm.querySelector("#country");

    let city = registrationForm.querySelector("#city");


    let passedFname = checkName(fname.value, e);

    let passedLname = checkLastName(lname.value, e);

    let passedEmail = checkEmail(email.value, e);

    let passedPhone = checkPhone(phone.value, e);

    let passedPassword = checkPassword(password.value, e);

    let passedDob = checkDob(dob.value, e);

    let passedGender = checkGender(gender, e);

    let passedSkills = checkSkills(skills, e);

    let passedCountry = checkCountry(country.value, e);

    let passedCity = checkCity(city.value, e);


    if (
        passedFname &&
        passedLname &&
        passedEmail &&
        passedPhone &&
        passedPassword &&
        passedDob &&
        passedGender &&
        passedSkills &&
        passedCountry &&
        passedCity
    ) {

        console.log("Form Submitted Successfully");

        console.log("First Name:", fname.value);

        console.log("Last Name:", lname.value);

        console.log("Email:", email.value);

        console.log("Phone:", phone.value);

        console.log("Password:", password.value);

        console.log("DOB:", dob.value);

        console.log("Gender:", gender.value);

        console.log("Skills:", [...skills].map(
            function (skill) {
                return skill.value;
            }
        ));

        console.log("Country:", country.value);

        console.log("City:", city.value);

        alert("Form Submitted Successfully!");

    }

});



/* =========================
   FIRST NAME
========================= */

function checkName(fname, el) {

    let passed = true;

    let pattern =
        /^(?=.{3,100}$)[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;

    passed = pattern.test(fname);


    let errorEl = el
        .target
        .closest("form")
        ?.querySelector(".fname-error");


    if (!passed) {

        errorEl?.classList.add("show");

    }
    else {

        errorEl?.classList.remove("show");

    }

    return passed;
}



/* =========================
   LAST NAME
========================= */

function checkLastName(lname, el) {

    let passed = true;

    let pattern =
        /^(?=.{2,100}$)[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;

    passed = pattern.test(lname);


    let errorEl = el
        .target
        .closest("form")
        ?.querySelector(".lname-error");


    if (!passed) {

        errorEl?.classList.add("show");

    }
    else {

        errorEl?.classList.remove("show");

    }

    return passed;
}



/* =========================
   EMAIL
========================= */

function checkEmail(email, el) {

    let passed = true;

    let pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    passed = pattern.test(email);


    let errorEl = el
        .target
        .closest("form")
        ?.querySelector(".email-error");


    if (!passed) {

        errorEl?.classList.add("show");

    }
    else {

        errorEl?.classList.remove("show");

    }

    return passed;
}



/* =========================
   PHONE
========================= */

function checkPhone(phone, el) {

    let passed = true;

    let pattern =
        /^[6-9][0-9]{9}$/;

    passed = pattern.test(phone);


    let errorEl = el
        .target
        .closest("form")
        ?.querySelector(".phone-error");


    if (!passed) {

        errorEl?.classList.add("show");

    }
    else {

        errorEl?.classList.remove("show");

    }

    return passed;
}



/* =========================
   PASSWORD
========================= */

function checkPassword(password, el) {

    let passed = true;

    let pattern =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

    passed = pattern.test(password);


    let errorEl = el
        .target
        .closest("form")
        ?.querySelector(".password-error");


    if (!passed) {

        errorEl?.classList.add("show");

    }
    else {

        errorEl?.classList.remove("show");

    }

    return passed;
}



/* =========================
   DOB
========================= */

function checkDob(dob, el) {

    let passed = true;

    passed = dob !== "";


    let errorEl = el
        .target
        .closest("form")
        ?.querySelector(".dob-error");


    if (!passed) {

        errorEl?.classList.add("show");

    }
    else {

        errorEl?.classList.remove("show");

    }

    return passed;
}



/* =========================
   GENDER
========================= */

function checkGender(gender, el) {

    let passed = true;

    if (!gender) {

        passed = false;

    }


    let errorEl = el
        .target
        .closest("form")
        ?.querySelector(".gender-error");


    if (!passed) {

        errorEl?.classList.add("show");

    }
    else {

        errorEl?.classList.remove("show");

    }

    return passed;
}



/* =========================
   SKILLS
========================= */

function checkSkills(skills, el) {

    let passed = true;

    if (!skills || skills.length === 0) {

        passed = false;

    }


    let errorEl = el
        .target
        .closest("form")
        ?.querySelector(".skills-error");


    if (!passed) {

        errorEl?.classList.add("show");

    }
    else {

        errorEl?.classList.remove("show");

    }

    return passed;
}



/* =========================
   COUNTRY
========================= */

function checkCountry(country, el) {

    let passed = true;

    passed = country !== "";


    let errorEl = el
        .target
        .closest("form")
        ?.querySelector(".country-error");


    if (!passed) {

        errorEl?.classList.add("show");

    }
    else {

        errorEl?.classList.remove("show");

    }

    return passed;
}



/* =========================
   CITY
========================= */

function checkCity(city, el) {

    let passed = true;

    let pattern =
        /^(?=.{2,50}$)[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;

    passed = pattern.test(city);


    let errorEl = el
        .target
        .closest("form")
        ?.querySelector(".city-error");


    if (!passed) {

        errorEl?.classList.add("show");

    }
    else {

        errorEl?.classList.remove("show");

    }

    return passed;
}