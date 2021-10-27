const mbHelper = require('../mountebankHelper');
const ports = require('../ports.js');
const getPrescriptionServiceResponse = require('./response/getPrescriptionServiceResponse.js').response;

function addService() {
    const id = "312009"

    const stubs = [
        {
            predicates: [ {
                equals: {
                    method: "GET",
                    "path": "/api/rx/prescriptions/"+id
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