// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadla8443.azuredatalakeanalytics.net:443')
  .get('/Jobs?api-version=2015-11-01-preview')
  .reply(200, "{\"value\":[{\"jobId\":\"8501bb33-fe54-41dd-9053-98f561f9cac6\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"Tue, 01 Mar 2016 02:22:33 GMT\",\"startTime\":\"Tue, 01 Mar 2016 02:23:06 GMT\",\"endTime\":\"Tue, 01 Mar 2016 02:23:06 GMT\",\"state\":\"Ended\",\"result\":\"Succeeded\",\"errorMessage\":null,\"storageAccounts\":null,\"stateAuditRecords\":null,\"properties\":null},{\"jobId\":\"268f9006-62df-4b45-88ec-cd808f723b4a\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"Tue, 01 Mar 2016 02:23:40 GMT\",\"startTime\":null,\"endTime\":\"Tue, 01 Mar 2016 02:23:41 GMT\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":null,\"storageAccounts\":null,\"stateAuditRecords\":null,\"properties\":null}],\"nextLink\":null,\"count\":null}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0c3dcfde-1727-4b8c-a81f-e608bcb9d6fd',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:23:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadla8443.azuredatalakeanalytics.net:443')
  .get('/Jobs?api-version=2015-11-01-preview')
  .reply(200, "{\"value\":[{\"jobId\":\"8501bb33-fe54-41dd-9053-98f561f9cac6\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"Tue, 01 Mar 2016 02:22:33 GMT\",\"startTime\":\"Tue, 01 Mar 2016 02:23:06 GMT\",\"endTime\":\"Tue, 01 Mar 2016 02:23:06 GMT\",\"state\":\"Ended\",\"result\":\"Succeeded\",\"errorMessage\":null,\"storageAccounts\":null,\"stateAuditRecords\":null,\"properties\":null},{\"jobId\":\"268f9006-62df-4b45-88ec-cd808f723b4a\",\"name\":\"xplattestjob\",\"type\":\"USql\",\"submitter\":\"adlsvc01@benwgoldoutlook.onmicrosoft.com\",\"account\":null,\"degreeOfParallelism\":1,\"priority\":0,\"submitTime\":\"Tue, 01 Mar 2016 02:23:40 GMT\",\"startTime\":null,\"endTime\":\"Tue, 01 Mar 2016 02:23:41 GMT\",\"state\":\"Ended\",\"result\":\"Cancelled\",\"errorMessage\":null,\"storageAccounts\":null,\"stateAuditRecords\":null,\"properties\":null}],\"nextLink\":null,\"count\":null}", { 'cache-control': 'private',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0c3dcfde-1727-4b8c-a81f-e608bcb9d6fd',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Tue, 01 Mar 2016 02:23:42 GMT',
  connection: 'close' });
 return result; }]];