// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45/endpoints?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cdnTestEndpoint1818\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45/endpoints/cdnTestEndpoint1818\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n        \"tag1\":\"val1\"\r\n      },\"location\":\"WestUs\",\"properties\":{\r\n        \"hostName\":\"cdnTestEndpoint1818.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n          {\r\n            \"name\":\"newname\",\"properties\":{\r\n              \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n            }\r\n          }\r\n        ],\"contentTypesToCompress\":[\r\n          \r\n        ],\"isCompressionEnabled\":false\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '884',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '671266ae-5e7a-4bb9-86c0-1657714e6198',
  'x-ms-client-request-id': '19f37cd9-9d5a-488a-b5e0-cbf721fe0980',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '0de8c52c-5767-4bf0-b39b-df1840a5e336',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T221117Z:0de8c52c-5767-4bf0-b39b-df1840a5e336',
  date: 'Tue, 01 Mar 2016 22:11:17 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45/endpoints?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    {\r\n      \"name\":\"cdnTestEndpoint1818\",\"id\":\"/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45/endpoints/cdnTestEndpoint1818\",\"type\":\"Microsoft.Cdn/profiles/endpoints\",\"tags\":{\r\n        \"tag1\":\"val1\"\r\n      },\"location\":\"WestUs\",\"properties\":{\r\n        \"hostName\":\"cdnTestEndpoint1818.azureedge.net\",\"originHostHeader\":null,\"provisioningState\":\"Succeeded\",\"resourceState\":\"Running\",\"isHttpAllowed\":true,\"isHttpsAllowed\":true,\"queryStringCachingBehavior\":\"IgnoreQueryString\",\"originPath\":null,\"origins\":[\r\n          {\r\n            \"name\":\"newname\",\"properties\":{\r\n              \"hostName\":\"newname.azure.com\",\"httpPort\":null,\"httpsPort\":null\r\n            }\r\n          }\r\n        ],\"contentTypesToCompress\":[\r\n          \r\n        ],\"isCompressionEnabled\":false\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '884',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '671266ae-5e7a-4bb9-86c0-1657714e6198',
  'x-ms-client-request-id': '19f37cd9-9d5a-488a-b5e0-cbf721fe0980',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '0de8c52c-5767-4bf0-b39b-df1840a5e336',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T221117Z:0de8c52c-5767-4bf0-b39b-df1840a5e336',
  date: 'Tue, 01 Mar 2016 22:11:17 GMT',
  connection: 'close' });
 return result; }]];