process.stdout.write('hello from spinner1.js... \rheyyy\n');
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 3000);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 5000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 7000);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 8000);

setTimeout(() => {
  process.stdout.write('\n   ');
}, 9000);