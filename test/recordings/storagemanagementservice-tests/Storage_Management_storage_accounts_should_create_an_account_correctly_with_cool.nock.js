// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'westus';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup8499/providers/Microsoft.Storage/storageAccounts/testacc8405?api-version=2018-02-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/westus/asyncoperations/bb25b513-4ecc-4c82-af6a-8f1fbe620feb?monitor=true&api-version=2017-10-01',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'x-ms-request-id': 'c94e2726-6f2e-40aa-88bb-a87494046a60',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': 'c94e2726-6f2e-40aa-88bb-a87494046a60',
  'x-ms-routing-request-id': 'EASTASIA:20171212T055019Z:c94e2726-6f2e-40aa-88bb-a87494046a60',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 05:50:18 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodeTestGroup8499/providers/Microsoft.Storage/storageAccounts/testacc8405?api-version=2018-02-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/westus/asyncoperations/bb25b513-4ecc-4c82-af6a-8f1fbe620feb?monitor=true&api-version=2017-10-01',
  'retry-after': '17',
  'x-ms-ratelimit-remaining-subscription-writes': '1190',
  'x-ms-request-id': 'c94e2726-6f2e-40aa-88bb-a87494046a60',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-correlation-request-id': 'c94e2726-6f2e-40aa-88bb-a87494046a60',
  'x-ms-routing-request-id': 'EASTASIA:20171212T055019Z:c94e2726-6f2e-40aa-88bb-a87494046a60',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 05:50:18 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/westus/asyncoperations/bb25b513-4ecc-4c82-af6a-8f1fbe620feb?monitor=true&api-version=2017-10-01')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodetestgroup8499/providers/Microsoft.Storage/storageAccounts/testacc8405\",\"kind\":\"BlobStorage\",\"location\":\"westus\",\"name\":\"testacc8405\",\"properties\":{\"accessTier\":\"Cool\",\"creationTime\":\"2017-12-12T05:50:19.7116957Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2017-12-12T05:50:19.7516788Z\"},\"file\":{\"enabled\":true,\"lastEnabledTime\":\"2017-12-12T05:50:19.7516788Z\"}}},\"networkAcls\":{\"bypass\":\"AzureServices\",\"defaultAction\":\"Allow\",\"ipRules\":[],\"virtualNetworkRules\":[]},\"primaryEndpoints\":{\"blob\":\"https://testacc8405.blob.core.windows.net/\",\"table\":\"https://testacc8405.table.core.windows.net/\"},\"primaryLocation\":\"westus\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '952',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '4f03220b-c436-4dc3-82bf-10bfa5d3a559',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14950',
  'x-ms-correlation-request-id': '4f03220b-c436-4dc3-82bf-10bfa5d3a559',
  'x-ms-routing-request-id': 'EASTASIA:20171212T055050Z:4f03220b-c436-4dc3-82bf-10bfa5d3a559',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 05:50:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/providers/Microsoft.Storage/locations/westus/asyncoperations/bb25b513-4ecc-4c82-af6a-8f1fbe620feb?monitor=true&api-version=2017-10-01')
  .reply(200, "{\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/nodetestgroup8499/providers/Microsoft.Storage/storageAccounts/testacc8405\",\"kind\":\"BlobStorage\",\"location\":\"westus\",\"name\":\"testacc8405\",\"properties\":{\"accessTier\":\"Cool\",\"creationTime\":\"2017-12-12T05:50:19.7116957Z\",\"encryption\":{\"keySource\":\"Microsoft.Storage\",\"services\":{\"blob\":{\"enabled\":true,\"lastEnabledTime\":\"2017-12-12T05:50:19.7516788Z\"},\"file\":{\"enabled\":true,\"lastEnabledTime\":\"2017-12-12T05:50:19.7516788Z\"}}},\"networkAcls\":{\"bypass\":\"AzureServices\",\"defaultAction\":\"Allow\",\"ipRules\":[],\"virtualNetworkRules\":[]},\"primaryEndpoints\":{\"blob\":\"https://testacc8405.blob.core.windows.net/\",\"table\":\"https://testacc8405.table.core.windows.net/\"},\"primaryLocation\":\"westus\",\"provisioningState\":\"Succeeded\",\"statusOfPrimary\":\"available\",\"supportsHttpsTrafficOnly\":false},\"sku\":{\"name\":\"Standard_LRS\",\"tier\":\"Standard\"},\"tags\":{},\"type\":\"Microsoft.Storage/storageAccounts\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '952',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '4f03220b-c436-4dc3-82bf-10bfa5d3a559',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14950',
  'x-ms-correlation-request-id': '4f03220b-c436-4dc3-82bf-10bfa5d3a559',
  'x-ms-routing-request-id': 'EASTASIA:20171212T055050Z:4f03220b-c436-4dc3-82bf-10bfa5d3a559',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 05:50:49 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['testacc8405'];};