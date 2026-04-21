function generatePassword() {
    const length = parseInt(document.getElementById("length").value);
    const upper = document.getElementById("uppercase").checked;
    const lower = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const special = document.getElementById("special").checked;

    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()";

    let chars = "";

    if (upper) chars += upperChars;
    if (lower) chars += lowerChars;
    if (numbers) chars += numberChars;
    if (special) chars += specialChars;

    if (!length || length < 4) {
        alert("Enter valid length (min 4)");
        return;
    }

    if (chars === "") {
        alert("Select at least one option!");
        return;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    document.getElementById("output").value = password;
}