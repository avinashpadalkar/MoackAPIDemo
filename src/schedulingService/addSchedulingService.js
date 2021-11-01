const mbHelper = require('../mountebankHelper');
const ports = require('../ports.js');
const getAllLocationsResponse = require('./response/getAllLocationsResponse.js').response;
const getLocationByZipcodeResponse = require('./response/getLocationByZipcodeResponse.js').response;
const getZonesResponse = require('./response/getZonesResponse.js').response;


function addService() {
    const zipcode = "27604"

    const stubs = [
        {
            predicates: [ {
                equals: {
                    method: "GET",
                    "path": "/api/sched/pharmacy-locations"
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
                    // "path": "/zips/"+zipcode
                    "path": "/api/sched/zones/zips/"+zipcode
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
        {
            predicates: [ {
                equals: {
                    method: "GET",
                    "path": "/api/sched/zones"
                }
            }],
            responses: [
                {
                    is: {
                        statusCode: 200,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(getZonesResponse)
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
