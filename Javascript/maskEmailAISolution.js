let maskedUsername = '';
  for (let i = 0; i < username.length; i++) {
    if (i === 0 || i === username.length - 1) {
      maskedUsername += username[i];
    } else {
      maskedUsername += '*';
    }