const mbHelper = require('../mountebankHelper');
const ports = require('../ports.js');
const getPrescriptionIdsForFacilityResponse = require('./responses/getPrescriptionIdsForFacilityResponse.js').response;
const getFacilityIdForPrescriptionIdResponse = require('./responses/getFacilityIdForPrescriptionIdResponse.js').response;

function addService() {

    const rxId = 1234

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
                        body: JSON.stringify(getPrescriptionIdsForFacilityResponse)
                    }
                }
            ]
        },
        {
            predicates: [ {
                equals: {
                    method: "GET",
                    "path": "/api/fs/prescriptions/"+rxId+"/facility-id"
                }
            }],
            responses: [
                {
                    is: {
                        statusCode: 200,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(getFacilityIdForPrescriptionIdResponse)
                    }
                }
            ]
            
        }
    ];

    const imposter = {
        port: ports.facilityService,
        protocol: 'http',
        stubs: stubs
    };

    return mbHelper.createImposter(imposter);
}

module.exports = { addService };