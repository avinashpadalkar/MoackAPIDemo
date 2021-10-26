const mbHelper = require('./mountebank-helper');
const settings = require('./settings.js');
const responseClass = require('./get-facilityId-service-response.js');

function addService() {
    const response = responseClass.getFacilityIdServiceResponse

    const rxId = 000123

    const stubs = [
        {
            predicates: [ {
                equals: {
                    method: "GET",
                    // "path": "/api/fs/prescriptions/"+rxId+"/facility-id"
                    "path": "/api/rx/prescriptions/312008"
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