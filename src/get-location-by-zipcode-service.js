
const mbHelper = require('./mountebank-helper');
const settings = require('./settings.js');
const responseClass = require('./get-location-by-zipcode-service-response.js');

function addService() {
    const response = responseClass.getPharmacyLocationsServiceResponse

    const stubs = [
        {
            predicates: [ {
                equals: {
                    method: "GET",
                    "path": "/zips/zipcode"
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