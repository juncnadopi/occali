// Assuming encoding is an object

const encoding = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3'
};

// Iterate over the keys of the encoding object
for (const key of Object.keys(encoding)) {
  console.log(key); // This will log each key
  console.log(encoding[key]); // This will log the value associated with each key
}
