const mbHelper = require('./mountebank-helper');
const settings = require('./settings.js');
const responseClass = require('./get-facility-prescriptions-ids-service-response.js');

function addService() {
    const response = responseClass.getFacilityPrescriptionsIdsServiceResponse

    const stubs = [
        {
            predicates: [ {
                equals: {
                    method: "GET",
                    "path": "/api/fs/prescriptions/ids"
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