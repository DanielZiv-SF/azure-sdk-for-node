/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * The application upgrade policy.
 *
 */
class ApplicationUpgradePolicy {
  /**
   * Create a ApplicationUpgradePolicy.
   * @member {number} [upgradeReplicaSetCheckTimeout]
   * @member {boolean} [forceRestart]
   * @member {object} [rollingUpgradeMonitoringPolicy]
   * @member {string} [rollingUpgradeMonitoringPolicy.healthCheckWaitDuration]
   * @member {string}
   * [rollingUpgradeMonitoringPolicy.healthCheckStableDuration]
   * @member {string} [rollingUpgradeMonitoringPolicy.healthCheckRetryTimeout]
   * @member {string} [rollingUpgradeMonitoringPolicy.upgradeTimeout]
   * @member {string} [rollingUpgradeMonitoringPolicy.upgradeDomainTimeout]
   * @member {object} [applicationHealthPolicy]
   * @member {boolean} [applicationHealthPolicy.considerWarningAsError]
   * Indicates whether warnings are treated with the same severity as errors.
   * @member {number}
   * [applicationHealthPolicy.maxPercentUnhealthyDeployedApplications] The
   * maximum allowed percentage of unhealthy deployed applications. Allowed
   * values are Byte values from zero to 100.
   * The percentage represents the maximum tolerated percentage of deployed
   * applications that can be unhealthy before the application is considered in
   * error.
   * This is calculated by dividing the number of unhealthy deployed
   * applications over the number of nodes where the application is currently
   * deployed on in the cluster.
   * The computation rounds up to tolerate one failure on small numbers of
   * nodes. Default percentage is zero.
   * @member {object} [applicationHealthPolicy.defaultServiceTypeHealthPolicy]
   * @member {number}
   * [applicationHealthPolicy.defaultServiceTypeHealthPolicy.maxPercentUnhealthyPartitionsPerService]
   * The maximum allowed percentage of unhealthy partitions per service.
   * Allowed values are Byte values from zero to 100
   *
   * The percentage represents the maximum tolerated percentage of partitions
   * that can be unhealthy before the service is considered in error.
   * If the percentage is respected but there is at least one unhealthy
   * partition, the health is evaluated as Warning.
   * The percentage is calculated by dividing the number of unhealthy
   * partitions over the total number of partitions in the service.
   * The computation rounds up to tolerate one failure on small numbers of
   * partitions. Default percentage is zero.
   * @member {number}
   * [applicationHealthPolicy.defaultServiceTypeHealthPolicy.maxPercentUnhealthyReplicasPerPartition]
   * The maximum allowed percentage of unhealthy replicas per partition.
   * Allowed values are Byte values from zero to 100.
   *
   * The percentage represents the maximum tolerated percentage of replicas
   * that can be unhealthy before the partition is considered in error.
   * If the percentage is respected but there is at least one unhealthy
   * replica, the health is evaluated as Warning.
   * The percentage is calculated by dividing the number of unhealthy replicas
   * over the total number of replicas in the partition.
   * The computation rounds up to tolerate one failure on small numbers of
   * replicas. Default percentage is zero.
   * @member {number}
   * [applicationHealthPolicy.defaultServiceTypeHealthPolicy.maxPercentUnhealthyServices]
   * The maximum maximum allowed percentage of unhealthy services. Allowed
   * values are Byte values from zero to 100.
   *
   * The percentage represents the maximum tolerated percentage of services
   * that can be unhealthy before the application is considered in error.
   * If the percentage is respected but there is at least one unhealthy
   * service, the health is evaluated as Warning.
   * This is calculated by dividing the number of unhealthy services of the
   * specific service type over the total number of services of the specific
   * service type.
   * The computation rounds up to tolerate one failure on small numbers of
   * services. Default percentage is zero.
   * @member {array} [applicationHealthPolicy.serviceTypeHealthPolicyMap]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationUpgradePolicy
   *
   * @returns {object} metadata of ApplicationUpgradePolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationUpgradePolicy',
      type: {
        name: 'Composite',
        className: 'ApplicationUpgradePolicy',
        modelProperties: {
          upgradeReplicaSetCheckTimeout: {
            required: false,
            serializedName: 'upgradeReplicaSetCheckTimeout',
            type: {
              name: 'Number'
            }
          },
          forceRestart: {
            required: false,
            serializedName: 'forceRestart',
            type: {
              name: 'Boolean'
            }
          },
          rollingUpgradeMonitoringPolicy: {
            required: false,
            serializedName: 'rollingUpgradeMonitoringPolicy',
            type: {
              name: 'Composite',
              className: 'RollingUpgradeMonitoringPolicy'
            }
          },
          applicationHealthPolicy: {
            required: false,
            serializedName: 'applicationHealthPolicy',
            type: {
              name: 'Composite',
              className: 'ApplicationHealthPolicy'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationUpgradePolicy;
