// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45/endpoints?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'd4df4727-8c1f-43dd-89c0-c06a3bfec6f3',
  'x-ms-client-request-id': 'ee7c2124-1882-406e-97a4-79b50428b8fb',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '1ad9550b-f650-48fa-aec5-3b30a5da3abc',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T221716Z:1ad9550b-f650-48fa-aec5-3b30a5da3abc',
  date: 'Tue, 01 Mar 2016 22:17:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45/endpoints?api-version=2015-06-01')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'd4df4727-8c1f-43dd-89c0-c06a3bfec6f3',
  'x-ms-client-request-id': 'ee7c2124-1882-406e-97a4-79b50428b8fb',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '1ad9550b-f650-48fa-aec5-3b30a5da3abc',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T221716Z:1ad9550b-f650-48fa-aec5-3b30a5da3abc',
  date: 'Tue, 01 Mar 2016 22:17:16 GMT',
  connection: 'close' });
 return result; }]];