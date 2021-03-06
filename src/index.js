const mb = require('mountebank');
const ports = require('./ports.js');
const facilityService = require('./facilityService/addFacilityService.js');
const prescriptionService = require('./prescriptionService/addPrescriptionService.js');
const schedulingService = require('./schedulingService/addSchedulingService.js');
const patientService = require('./patientService/addPatientService.js')
const pharmacyService = require('./pharmacyService/addPharmacyService.js')

const mbServerInstance = mb.create({
        port: ports.mb,
        pidfile: '../mb.pid',
        logfile: '../mb.log',
        protofile: '../protofile.json',
        ipWhitelist: ['*']
    });

mbServerInstance.then(function() {
    facilityService.addService();
    prescriptionService.addService();
    schedulingService.addService();
    patientService.addService();
    pharmacyService.addService();
});