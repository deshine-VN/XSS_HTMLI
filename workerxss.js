const href = self.location.href;
const domain = new URL(href).origin;
console.log('XSS at location: ', domain);
