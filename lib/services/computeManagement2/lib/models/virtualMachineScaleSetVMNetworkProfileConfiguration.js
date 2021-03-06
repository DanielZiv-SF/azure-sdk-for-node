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

/**
 * Describes a virtual machine scale set VM network profile.
 *
 */
class VirtualMachineScaleSetVMNetworkProfileConfiguration {
  /**
   * Create a VirtualMachineScaleSetVMNetworkProfileConfiguration.
   * @property {array} [networkInterfaceConfigurations] The list of network
   * configurations.
   */
  constructor() {
  }

  /**
   * Defines the metadata of VirtualMachineScaleSetVMNetworkProfileConfiguration
   *
   * @returns {object} metadata of VirtualMachineScaleSetVMNetworkProfileConfiguration
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualMachineScaleSetVMNetworkProfileConfiguration',
      type: {
        name: 'Composite',
        className: 'VirtualMachineScaleSetVMNetworkProfileConfiguration',
        modelProperties: {
          networkInterfaceConfigurations: {
            required: false,
            serializedName: 'networkInterfaceConfigurations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VirtualMachineScaleSetNetworkConfigurationElementType',
                  type: {
                    name: 'Composite',
                    className: 'VirtualMachineScaleSetNetworkConfiguration'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualMachineScaleSetVMNetworkProfileConfiguration;
