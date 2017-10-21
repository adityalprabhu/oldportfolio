/*

localStorage.IPaddress = "16.177.125.217/hpid";

app.constant('URL_CONFIG', {
    inputFile: 'assets/data/input.txt', //get
    outputPacket: 'assets/data/output.txt', //get
    categoryList: 'http://' + localStorage.IPaddress + '/api/CategoryList/UK/IN/IMS', //get
    //categoryList :'http://15.79.246.220/HPID/api/CategoryList/UK/IN/IBE', //get
    getApplicant: 'http://' + localStorage.IPaddress + '/api/applicant/',
    UPS: 'http://' + localStorage.IPaddress + '/api/UPSList/UK/IN/IMS',//get
    //UPS: 'http://15.79.246.220/HPID/api/UPSList/UK/IN/IBE', //get
    courierZone: 'http://' + localStorage.IPaddress + '/api/CourierZones/IN', //get
    enroll: 'http://' + localStorage.IPaddress + '/hpidservice/api/Applicant/Enroll', //post
    authToken: 'http://' + localStorage.IPaddress + '/Token', //post
    configURL : 'http://' + localStorage.IPaddress + '/api/ConfigureStation', //post
    isServiceable : 'http://' + localStorage.IPaddress + '/api/IsPinServiceable/GB/IN/IMN/', //get
    HALList : 'http://' + localStorage.IPaddress + '/api/HALList/UK/IN/IMS', //get
    header: {
        Authorization : 'bearer ' + localStorage.accessToken
    },
    accessToken : 'bearer ' + localStorage.getItem('accessToken'),
    enrollApp: 'http://'+ localStorage.IPaddress +'/api/Applicant/Enroll/',
    ICR : 'http://'+ localStorage.IPaddress +'/api/GetICRText/UK/IN',
    noOfBarcodes : 2,
    serviceTaxNo: "AACCC7513PST002",
    tax: "14.00%",
    categoryCode: "VISA",
    tenantCode: "GB",
    stationCode: "IMN3120021479",
    lessthan6Id: '11',
    sixto12subcat:'10',
    barcodePrinter : 'ZDesigner GX420d',
    //categoryList: 'assets/data/UK_IN_Categories.txt',
    //UPSList: 'assets/data/UK_IN_ServiceablePins.txt',
    //serviceablePin : 'assets/data/UK_IN_UPSList.txt',
    //HALList : 'assets/data/UK_IN_HALList.txt'
});*/


var parsedObj = localStorage.getItem('configObj');
var parsedConst = "";
if (parsedObj) {
    parsedConst = JSON.parse(parsedObj);
}
else
{
    parsedConst = { stationCode: "BEN0001", VAC: "VAC-UK-IN-MBN-13", country: "IN", categoryCode: "Visa", VACShortCode: "IMN", barcodePrinterName: "ZDesigner GX420d", receiptPrinterName: "BTP-R580II(U) 1", noOfBarcodes: "2", serverIP: "16.177.125.217/HPEIDKiosk" }
}

localStorage.IPaddress = parsedConst.serverIP;

app.constant('URL_CONFIG', {
    inputFile: 'assets/data/inputBiometric.txt', //get
    outputPacket: 'assets/data/output.txt', //get
    categoryList: 'http://' + localStorage.IPaddress + '/api/CategoryList/UK/IN/IMS', //get
    //categoryList :'http://15.79.246.220/HPID/api/CategoryList/UK/IN/IBE', //get
    getApplicant: 'http://' + localStorage.IPaddress + '/api/applicant/',
    UPS: 'http://' + localStorage.IPaddress + '/api/UPSList/UK/IN/IMS',//get
    //UPS: 'http://15.79.246.220/HPID/api/UPSList/UK/IN/IBE', //get
    courierZone: 'http://' + localStorage.IPaddress + '/api/CourierZones/IN', //get
    enroll: 'http://' + localStorage.IPaddress + '/hpidservice/api/Applicant/Enroll', //post
    authToken: 'http://' + localStorage.IPaddress + '/Token', //post
    configURL: 'http://' + localStorage.IPaddress + '/api/ConfigureStation', //post
    isServiceable: 'http://' + localStorage.IPaddress + '/api/IsPinServiceable/GB/IN/IMN/', //get
    HALList: 'http://' + localStorage.IPaddress + '/api/HALList/UK/IN/IMS', //get
    header: {
        Authorization: 'bearer ' + localStorage.accessToken
    },
    accessToken: 'bearer ' + localStorage.getItem('accessToken'),
    enrollApp: 'http://' + localStorage.IPaddress + '/api/Applicant/Enroll/',
    ICR: 'http://' + localStorage.IPaddress + '/api/GetICRText/UK/IN',
    serviceTaxNo: "AACCC7513PST002",
    tax: "14.00%",
    tenantCode: "GB",
    //stationCode: "IMN3120021479",
    lessthan6Id: '11',
    sixto12subcat: '10',
    configObj: parsedObj,
    stationCode: parsedConst.stationCode,
    VAC: parsedConst.VAC,
    country: parsedConst.country,
    categoryCode: parsedConst.categoryCode,
    VACShortCode: parsedConst.VACShortCode,
    barcodePrinterName: parsedConst.barcodePrinterName,
    receiptPrinterName: parsedConst.receiptPrinterName,
    noOfBarcodes: parsedConst.noOfBarcodes,
    configObj: parsedConst,
    serverIP: parsedConst.serverIP
    
});

/* configObj: parsedObj,
 stationCode: parsedConst.stationCode,
 VAC: parsedConst.VAC,
 country: parsedConst.country,
 categoryCode: parsedConst.categoryCode,
 VACShortCode: parsedConst.VACShortCode,
 barcodePrinterName: parsedConst.barcodePrinterName,
 receiptPrinterName: parsedConst.receiptPrinterName,
 noOfBarcodes: parsedConst.noOfBarcodes,
 configObj: parsedConst
 serverIP: parsedConst.serverIP*/
/*
 stationCode: "IMN3120021479",
 VAC: "1",
 country: "IN",
 categoryCode: "2",
 VACShortCode: "2",
 barcodePrinterName: "ddd",
 receiptPrinterName: "fff",
 noOfBarcodes: "3",
 serverIP: "34343"
 */