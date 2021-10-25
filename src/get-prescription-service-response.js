const getPrescriptionServiceResponse = {
    "id": 312009,
    "rxNo": "906066",
    "createdTimestamp": "2021-01-05T05:00:00Z",
    "lastUpdateTimestamp": "2021-01-08T20:02:05.121209Z",
    "drugName": "AZITHROMYCIN",
    "copay": 0.0,
    "amount": 0.0,
    "awp": 7.78,
    "ndc": "5011178751",
    "quantity": 1.0,
    "fillNumber": 0,
    "refills": 0,
    "direction": "TAKE PO UD",
    "daySupply": 1,
    "discount": 0.0,
    "drugForm": "TAB",
    "diagnosisCode": "0",
    "status": "RX_RECEIVED",
    "patient": {
        "firstName": "ODALY",
        "lastName": "MORALES",
        "dob": "01/15/1988",
        "gender": "F",
        "telephone": "9174554398",
        "mmsId": 72560,
        "address": {
            "line1": "1225 SHERIDAN AVE APT 3G",
            "city": "BRONX",
            "state": "NY",
            "zipcode": "10456"
        }
    },
    "prescriber": {
        "npi": "1184752446",
        "lastName": "Blake Pharmacy",
        "address": {
            "city": "NEW YORK,",
            "zipcode": "10029"
        }
    },
    "insurance": {
        "bin": "003858",
        "pcn": "MA",
        "name": "EMPIRE BLUE CROSS BLUE"
    },
    "pharmacyNpi": "3308055"
}

module.exports = {getPrescriptionServiceResponse};