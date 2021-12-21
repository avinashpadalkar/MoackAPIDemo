Project File Details

package.json - in this file content app information like dependencies, script details, main class, and other project-related information.

index.js - in this file, we are creating a mountebank server instance and instantiating required services.

ports.js - all services ports numbers declared in this file. mountebank server default port no is 2525.

mountebankHelper.js - In this file, we are creating imposters on the mountebank server. 

File Structure : 

src - in this package we are adding different services according to requirements. in this demo project, we have used the below services. 

    - facilityService
    - prescriptionService
    - schedulingService

  - schedulingService package details - 

response - in this subpackage we are adding different endpoints responses separately 

addSchedulingService.js - in this file, we are creating service in the addService() method we are defining multiple endpoints with help of predicates, equals, responses. we can call it stubs.

after creating stubs we are creating an imposter body with different parameters like port (this service run on specified port), protocol, stubs

then with the help of mountebankHelper.js class we are creating imposters. like 


How create new mock service?
in src folder create new sub-package related new service, then create javascript service file. In this file we required a mountebankHelper,ports & endpoint specific responses. we can create responses in another subfolder name as a 'response' in same package. After that we are creating functions mock services. In this function initially we are creating stubs. In Stubs we are defining mock service details with the help of predicates & responses. Then we are creating imposter. then with the help of mountebankhelder class we are creating imposters on mountebank service. Then we are exporting this service. at last in index.js file import that service function.

addSchedulingService.js

const mbHelper = require('../mountebankHelper');
const ports = require('../ports.js');
const getAllLocationsResponse = require('./response/getAllLocationsResponse.js').response;

function addService() {

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

