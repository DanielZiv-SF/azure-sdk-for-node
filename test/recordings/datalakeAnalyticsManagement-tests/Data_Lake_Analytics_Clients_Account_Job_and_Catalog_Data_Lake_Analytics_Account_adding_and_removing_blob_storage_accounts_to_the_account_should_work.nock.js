// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'ce4a7590-4722-4bcf-a2c6-e473e9f11778';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.Storage/storageAccounts/xplattestadls2028/listKeys?api-version=2018-02-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"4WAzFpE/4uyA7bfXAffhAebyePQrNHchBxJY+fKIo8OvEj8wCBboBP2KQBDkoPiae96/RTGB7nhgQoNCGLa5YQ==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"Gywy0lBILHByV9I3io/SvixzcxSIpL/BMSjqybITGElur2nHck4YreHRw48FVIMv+UZHDbf9BnbsdNDFA//BGA==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '790e28d7-7fb1-4079-b24f-a7249505ceb9',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '790e28d7-7fb1-4079-b24f-a7249505ceb9',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064212Z:790e28d7-7fb1-4079-b24f-a7249505ceb9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:42:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.Storage/storageAccounts/xplattestadls2028/listKeys?api-version=2018-02-01')
  .reply(200, "{\"keys\":[{\"keyName\":\"key1\",\"permissions\":\"Full\",\"value\":\"4WAzFpE/4uyA7bfXAffhAebyePQrNHchBxJY+fKIo8OvEj8wCBboBP2KQBDkoPiae96/RTGB7nhgQoNCGLa5YQ==\"},{\"keyName\":\"key2\",\"permissions\":\"Full\",\"value\":\"Gywy0lBILHByV9I3io/SvixzcxSIpL/BMSjqybITGElur2nHck4YreHRw48FVIMv+UZHDbf9BnbsdNDFA//BGA==\"}]}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '289',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '790e28d7-7fb1-4079-b24f-a7249505ceb9',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1191',
  'x-ms-correlation-request-id': '790e28d7-7fb1-4079-b24f-a7249505ceb9',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064212Z:790e28d7-7fb1-4079-b24f-a7249505ceb9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:42:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391/StorageAccounts/xplattestadls2028?api-version=2016-11-01', '*')
  .reply(200, "{\"properties\":{\"suffix\":\"core.windows.net\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391/storageAccounts/xplattestadls2028\",\"name\":\"xplattestadls2028\",\"type\":\"Microsoft.DataLakeAnalytics/accounts/storageAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '324',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '3746d74a-e8fe-4129-b518-4d5e96f74728',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': 'e51dcca6-6a61-45e4-9105-10ef207c1ff1',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064215Z:e51dcca6-6a61-45e4-9105-10ef207c1ff1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:42:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391/StorageAccounts/xplattestadls2028?api-version=2016-11-01', '*')
  .reply(200, "{\"properties\":{\"suffix\":\"core.windows.net\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391/storageAccounts/xplattestadls2028\",\"name\":\"xplattestadls2028\",\"type\":\"Microsoft.DataLakeAnalytics/accounts/storageAccounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '324',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '3746d74a-e8fe-4129-b518-4d5e96f74728',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1193',
  'x-ms-correlation-request-id': 'e51dcca6-6a61-45e4-9105-10ef207c1ff1',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064215Z:e51dcca6-6a61-45e4-9105-10ef207c1ff1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:42:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"debugDataAccessLevel\":\"All\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls8812\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls8812\"}],\"publicDataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"adltrainingsampledata\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"ghinsights\"}],\"storageAccounts\":[{\"properties\":{\"suffix\":\"core.windows.net\"},\"name\":\"xplattestadls2028\"}],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"maxDegreeOfParallelismPerJob\":30,\"minPriorityPerJob\":1,\"computePolicies\":[],\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8391.azuredatalakeanalytics.net\",\"accountId\":\"3c0c8e99-02e5-40f5-bec0-7b97f622ea9c\",\"creationTime\":\"2017-12-12T06:40:35.8008952Z\",\"lastModifiedTime\":\"2017-12-12T06:41:59.8179058Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391\",\"name\":\"xplattestadla8391\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1419',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '7d75302c-ec52-471d-a4f3-86f62dd1eb8d',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14945',
  'x-ms-correlation-request-id': 'e0863a39-5c36-4f31-ba77-e2ebb52fd736',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064217Z:e0863a39-5c36-4f31-ba77-e2ebb52fd736',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:42:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"debugDataAccessLevel\":\"All\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls8812\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls8812\"}],\"publicDataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"adltrainingsampledata\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"ghinsights\"}],\"storageAccounts\":[{\"properties\":{\"suffix\":\"core.windows.net\"},\"name\":\"xplattestadls2028\"}],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"maxDegreeOfParallelismPerJob\":30,\"minPriorityPerJob\":1,\"computePolicies\":[],\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8391.azuredatalakeanalytics.net\",\"accountId\":\"3c0c8e99-02e5-40f5-bec0-7b97f622ea9c\",\"creationTime\":\"2017-12-12T06:40:35.8008952Z\",\"lastModifiedTime\":\"2017-12-12T06:41:59.8179058Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391\",\"name\":\"xplattestadla8391\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1419',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '7d75302c-ec52-471d-a4f3-86f62dd1eb8d',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14945',
  'x-ms-correlation-request-id': 'e0863a39-5c36-4f31-ba77-e2ebb52fd736',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064217Z:e0863a39-5c36-4f31-ba77-e2ebb52fd736',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:42:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391/StorageAccounts/xplattestadls2028?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '49b39735-e3c1-4553-b911-331ea59089ed',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-correlation-request-id': 'c98ac1c8-e232-43d3-b08c-93ef067b766c',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064219Z:c98ac1c8-e232-43d3-b08c-93ef067b766c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:42:18 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391/StorageAccounts/xplattestadls2028?api-version=2016-11-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '49b39735-e3c1-4553-b911-331ea59089ed',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1188',
  'x-ms-correlation-request-id': 'c98ac1c8-e232-43d3-b08c-93ef067b766c',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064219Z:c98ac1c8-e232-43d3-b08c-93ef067b766c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:42:18 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"debugDataAccessLevel\":\"All\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls8812\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls8812\"}],\"publicDataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"adltrainingsampledata\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"ghinsights\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"maxDegreeOfParallelismPerJob\":30,\"minPriorityPerJob\":1,\"computePolicies\":[],\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8391.azuredatalakeanalytics.net\",\"accountId\":\"3c0c8e99-02e5-40f5-bec0-7b97f622ea9c\",\"creationTime\":\"2017-12-12T06:40:35.8008952Z\",\"lastModifiedTime\":\"2017-12-12T06:41:59.8179058Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391\",\"name\":\"xplattestadla8391\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1348',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c6a10da5-8518-4752-8bea-53e961bfdcbc',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14501',
  'x-ms-correlation-request-id': '5780cf46-797b-48e6-b355-9894f5b8e79b',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064220Z:5780cf46-797b-48e6-b355-9894f5b8e79b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:42:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391?api-version=2016-11-01')
  .reply(200, "{\"properties\":{\"firewallState\":\"Disabled\",\"firewallAllowAzureIps\":\"Disabled\",\"debugDataAccessLevel\":\"All\",\"firewallRules\":[],\"defaultDataLakeStoreAccount\":\"xplattestadls8812\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls8812\"}],\"publicDataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"adltrainingsampledata\"},{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"ghinsights\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":30,\"maxJobCount\":3,\"systemMaxDegreeOfParallelism\":100,\"systemMaxJobCount\":20,\"maxDegreeOfParallelismPerJob\":30,\"minPriorityPerJob\":1,\"computePolicies\":[],\"queryStoreRetention\":30,\"hiveMetastores\":[],\"currentTier\":\"Consumption\",\"newTier\":\"Consumption\",\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla8391.azuredatalakeanalytics.net\",\"accountId\":\"3c0c8e99-02e5-40f5-bec0-7b97f622ea9c\",\"creationTime\":\"2017-12-12T06:40:35.8008952Z\",\"lastModifiedTime\":\"2017-12-12T06:41:59.8179058Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8391\",\"name\":\"xplattestadla8391\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1348',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c6a10da5-8518-4752-8bea-53e961bfdcbc',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14501',
  'x-ms-correlation-request-id': '5780cf46-797b-48e6-b355-9894f5b8e79b',
  'x-ms-routing-request-id': 'EASTASIA:20171212T064220Z:5780cf46-797b-48e6-b355-9894f5b8e79b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 12 Dec 2017 06:42:20 GMT',
  connection: 'close' });
 return result; }]];