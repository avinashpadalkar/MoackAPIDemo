const mbHelper = require('../mountebankHelper');
const ports = require('../ports.js');
const getLocationByZipcodeResponse = require('./response/getLocationByZipcodeResponse.js').response;


function addService() {
    const zipcode = "27604"

    const stubs = [
        {
            predicates: [ {
                equals: {
                    method: "GET",
                    "path": "/api/pharmacy-location-service/zip-codes/"+zipcode
                }
            }],
            responses: [
                {
                    is: {
                        statusCode: 200,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(getLocationByZipcodeResponse)
                    }
                }
            ]
        },
    ];

    const imposter = {
        port: ports.pharmacyService,
        protocol: 'http',
        stubs: stubs
    };

    return mbHelper.createImposter(imposter);
}

module.exports = { addService };
