function generateSecurePassword(firstName, lastName) {

    if (firstName.length < 3 || lastName.length < 3) {
        return "First name and last name must each have at least 3 characters.";
    }

    const firstPart = firstName.slice(0, 3);

    const lastPart = lastName.slice(0,3);

    const password = `${firstPart}${lastPart}@2024`;

    return password;
}


const firstName = "John";
const lastName = "Doe";
const generatedPassword = generateSecurePassword(firstName, lastName);
console.log(`Generated Password: ${generatedPassword}`);
console.log(generateSecurePassword("rodger", "ndemo"));
console.log(generateSecurePassword("kevin", "kemboi"));
console.log(generateSecurePassword("alpha", "Lee"));
