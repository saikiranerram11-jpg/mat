function generatePasskey(length) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let passkey = "";

    for (let i = 0; i < length; i++) {
        passkey += chars[Math.floor(Math.random() * chars.length)];
    }

    return passkey;
}

console.log(generatePasskey(12));