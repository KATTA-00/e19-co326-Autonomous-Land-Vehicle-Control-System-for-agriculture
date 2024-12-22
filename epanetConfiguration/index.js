const epanet = require('epanet-js'); // Import the library
const fs = require('fs');

// Load an EPANET .inp file (replace with the path to your .inp file)
const inputFile = fs.readFileSync('Net1.inp', 'utf-8');

// Initialize EPANET
const simulation = epanet(); // Initialize EPANET

// Read the input file
simulation.readInput(inputFile);

// Run the simulation
simulation.run();

// Retrieve simulation results
const nodeResults = simulation.getNodeResults();
console.log("Node Results: ", nodeResults);

// Clean up
simulation.close();
