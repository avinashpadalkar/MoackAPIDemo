const mbHelper = require('../mountebankHelper');
const ports = require('../ports.js');
const getAllLocationsResponse = require('./response/getAllLocationsResponse.js').response;
const getLocationByZipcodeResponse = require('./response/getLocationByZipcodeResponse.js').response;


function addService() {
    const zipcode = "1234"

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
                        body: JSON.stringify(getAllLocationsResponse)
                    }
                }
            ]
        },
        {
            predicates: [ {
                equals: {
                    method: "GET",
                    "path": "/zips/"+zipcode
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
        }
    ];

    const imposter = {
        port: ports.schedulingService,
        protocol: 'http',
        stubs: stubs
    };

    return mbHelper.createImposter(imposter);
}

module.exports = { addService };
