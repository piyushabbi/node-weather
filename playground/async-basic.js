console.log('Starting App...');

setTimeout(() => {
  console.log('First timeout');
}, 2000);

setTimeout(() => {
  console.log('Second timeout');
});

console.log('Finishing App...');
