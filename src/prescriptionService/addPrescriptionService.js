const mbHelper = require('../mountebankHelper');
const ports = require('../ports.js');
const getPrescriptionServiceResponse = require('./response/getPrescriptionServiceResponse.js').response;

function addService() {
    const id = "123"

    const stubs = [
        {
            predicates: [ {
                equals: {
                    "query": { "ids": "123" },
                    method: "GET",
                    // "path": "/api/rx/prescriptions/"+id
                    "path": '/api/rx/prescriptions'
                }
            }],
            responses: [
                {
                    is: {
                        statusCode: 200,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(getPrescriptionServiceResponse)
                    }
                }
            ]
        }
    ];

    const imposter = {
        port: ports.prescriptionService,
        protocol: 'http',
        stubs: stubs
    };

    return mbHelper.createImposter(imposter);
}

module.exports = { addService };