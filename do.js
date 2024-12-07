// Initialize empty array
let rowheaders = [];

// Add row headers to the array
rowheaders.push('Header1');
rowheaders.push('Header2');
rowheaders.push('Header3');

// Access and log each row header
for (let i = 0; i < rowheaders.length; i++) {
    console.log(rowheaders[i]);
}

// Another way to log each row header using forEach
rowheaders.forEach(header => {
    console.log(header);
});
