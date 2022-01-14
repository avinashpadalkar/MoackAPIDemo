const mbHelper = require('../mountebankHelper');
const ports = require('../ports.js');
const getPatientProfilesResponse = require('./responses/getPatientProfilesResponse.js').response;

function addService() {

    const stubs = [
        {
            predicates: [ {
                equals: {
                    method: "POST",
                    "path": "/api/ps/v1/patient-profiles"
                }
            }],
            responses: [
                {
                    is: {
                        statusCode: 200,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(getPatientProfilesResponse)
                    }
                }
            ]
        }
    ];

    const imposter = {
        port: ports.patientService,
        protocol: 'http',
        stubs: stubs
    };

    return mbHelper.createImposter(imposter);
}

module.exports = { addService };