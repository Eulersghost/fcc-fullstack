function maskEmail(email) {
  const atIndex = email.indexOf('@');
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex + 1);

  let maskedUsername = '';
  for (let i = 0; i < username.length; i++) {
    if (i === 0 || i === username.length - 1) {
      maskedUsername += username[i];
    } else {
      maskedUsername += '*';
    }
  }

  return maskedUsername + '@' + domain;
}

let email = "myEmail@email.com";

console.log(maskEmail(email));