const mb = require('mountebank');
const settings = require('./settings.js');
const helloService = require('./hello-service.js');
const customerService = require('./customer-service.js');
const feedsService = require('./feeds-service.js');
const prescriptionService = require('./get-prescription-service.js');
const facilityPrescriptionsIdsService = require('./get-facility-prescriptions-ids-service.js');
const facilityIdService = require('./get-facilityId-service.js');
const pharmacyLocationsService = require('./get-pharmacy-locations-service.js');
const locationByZipcodeService = require('./get-location-by-zipcode-service.js');

const mbServerInstance = mb.create({
        port: settings.port,
        pidfile: '../mb.pid',
        logfile: '../mb.log',
        protofile: '../protofile.json',
        ipWhitelist: ['*']
    });

mbServerInstance.then(function() {
    // helloService.addService();
    // customerService.addService();
    // feedsService.addService();
    prescriptionService.addService()
    facilityPrescriptionsIdsService.addService();
    facilityIdService.addService();
    pharmacyLocationsService.addService();
    locationByZipcodeService.addService();
});