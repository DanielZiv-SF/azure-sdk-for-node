// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2611?api-version=2015-10-01-preview', '*')
  .reply(400, "{\"error\":{\"code\":\"InvalidInput\",\"message\":\"The deep update for property 'DataLakeStoreAccounts' is not supported.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '116',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '16bc6025-c5ee-4711-be65-674cbad854d2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'b44cdd31-7aea-442c-8f2e-a5c708f78a26',
  'x-ms-routing-request-id': 'WESTUS:20160301T022219Z:b44cdd31-7aea-442c-8f2e-a5c708f78a26',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:22:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla2611?api-version=2015-10-01-preview', '*')
  .reply(400, "{\"error\":{\"code\":\"InvalidInput\",\"message\":\"The deep update for property 'DataLakeStoreAccounts' is not supported.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '116',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '16bc6025-c5ee-4711-be65-674cbad854d2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1195',
  'x-ms-correlation-request-id': 'b44cdd31-7aea-442c-8f2e-a5c708f78a26',
  'x-ms-routing-request-id': 'WESTUS:20160301T022219Z:b44cdd31-7aea-442c-8f2e-a5c708f78a26',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:22:18 GMT',
  connection: 'close' });
 return result; }]];