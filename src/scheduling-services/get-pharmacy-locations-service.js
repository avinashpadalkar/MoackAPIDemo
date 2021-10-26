
const mbHelper = require('./mountebank-helper');
const settings = require('./ports.js');
const responseClass = require('./get-pharmacy-locations-service-response.js');

function addService() {
    const response = responseClass.getPharmacyLocationsServiceResponse

    const stubs = [
        {
            predicates: [ {
                equals: {
                    method: "GET",
                    "path": "/partners/locations"
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