const { spawn } = require('child_process');
const request = require('request');
const test = require('tape');

// Start the app
const env = Object.assign({}, process.env, {PORT: 8880});
const source = process.env.CODE_COVERAGE ? 'app.js' : 'app-cov.js';
const child = spawn('node', [source], {env});

test('responds to requests', (t) => {
    t.plan(3);

    // Wait until the server is ready
    child.stdout.on('data', _ => {
        child.stdout.toString();
        // Make a request to our app
        request('http://127.0.0.1:8880', (error, response, body) => {
            // stop the server
            child.kill();
            // No error
            t.false(error);
            // Successful response
            t.equal(response.statusCode, 200);
            // Assert content checks
            t.deepEqual(body.toString() , "Marblewolf app running...");
        });
    });
});