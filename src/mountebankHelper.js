const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const ports = require('./ports.js');

function createImposter(body) {
    const url = `http://127.0.0.1:${ports.mb}/imposters`;

    return fetch(url, {
                    method:'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                });
}

module.exports = { createImposter };