const mbHelper = require('./mountebank-helper');
const settings = require('./ports.js');
const responseClass = require('./get-prescription-service-response.js');

function addService() {
    const response = responseClass.getPrescriptionServiceResponse

    const stubs = [
        {
            predicates: [ {
                equals: {
                    method: "GET",
                    "path": "/api/rx/prescriptions/312009"
                }
            }],
            responses: [
                {
                    is: {
                        statusCode: 200,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(response)
                    }
                }
            ]
        }
    ];

    const imposter = {
        port: settings.local_port,
        protocol: 'http',
        stubs: stubs
    };

    return mbHelper.postImposter(imposter);
}

module.exports = { addService };