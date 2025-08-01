let name = document.getElementById("name");
let email = document.getElementById("email");
let passkey = document.getElementById("passkey");
let passkey1 = document.getElementById("passkey1");
let phone = document.getElementById("phone");
let messagebox = document.getElementById("messagebox");

let ername = document.getElementById("ername");
let ename = document.getElementById("ename");
let pass = document.getElementById("pass");
let confrim = document.getElementById("confrim");
let num = document.getElementById("num");

function submitform(e) {
    e.preventDefault();

    // Hide all error messages initially
    ername.style.display = "none";
    ename.style.display = "none";
    pass.style.display = "none";
    confrim.style.display = "none";
    num.style.display = "none";

    if (name.value.length >= 3) {
        console.log(name.value);
    } else {
        ername.style.display = "block";
        alert("Name is wrong");
        return false;
    }

    if (email.value.includes("@gmail.com")) {
        console.log(email.value);
    } else {
        ename.style.display = "block";
        alert("Email is wrong");
        return false;
    }

    if (passkey.value.length >= 8) {
        console.log(passkey.value);
    } else {
        pass.style.display = "block";
        alert("The password must be at least 8 characters");
        return false;
    }

    if (passkey.value === passkey1.value) {
        console.log("Password matched");
    } else {
        confrim.style.display = "block";
        alert("The passwords do not match");
        return false;
    }

    if (phone.value.length === 10 && !isNaN(phone.value)) {
        console.log(phone.value);
    } else {
        num.style.display = "block";
        alert("Phone number must have exactly 10 digits");
        return false;
    }

    // Store values
    localStorage.setItem("username", name.value);
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Password", passkey.value);
    localStorage.setItem("ConfirmPassword", passkey1.value);
    localStorage.setItem("PhoneNo", phone.value);

alert("The form submitted successfully")
    // Clear form
    name.value = "";
    email.value = "";
    passkey.value = "";
    passkey1.value = "";
    phone.value = "";

    return true;
}
