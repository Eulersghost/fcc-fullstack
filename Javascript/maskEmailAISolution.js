let email = "apple.pie@example.com";

function maskEmail(email) {
    // Find the index of the '@' character
    const atIndex = email.indexOf('@');
    
    // Extract the username and domain
    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex);
    
    // Mask the username by replacing characters with asterisks
    const maskedUsername = username.charAt(0) // Preserve the first character
        + '*'.repeat(username.length - 2) // Mask the middle characters
        + username.charAt(username.length - 1); // Preserve the last character

    // Return the masked email
    return maskedUsername + domain;
}

// Declare a variable to store the email address

maskEmail(email);