const crypto = require('crypto');

function anotherInsecurePassword() {
  // GOOD: the random suffix is cryptographically secure
  var suffix = crypto.randomBytes(4).readUInt32BE(0);
  var password = "sssAAAA" + suffix;
  return password;
}