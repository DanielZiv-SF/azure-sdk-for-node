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
 * IP rule with specific IP or IP range in CIDR format.
 *
 */
class IPRule {
  /**
   * Create a IPRule.
   * @property {string} [action] The action of IP ACL rule. Possible values
   * include: 'Allow'. Default value: 'Allow' .
   * @property {string} iPAddressOrRange Specifies the IP or IP range in CIDR
   * format. Only IPV4 address is allowed.
   */
  constructor() {
  }

  /**
   * Defines the metadata of IPRule
   *
   * @returns {object} metadata of IPRule
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IPRule',
      type: {
        name: 'Composite',
        className: 'IPRule',
        modelProperties: {
          action: {
            required: false,
            serializedName: 'action',
            defaultValue: 'Allow',
            type: {
              name: 'String'
            }
          },
          iPAddressOrRange: {
            required: true,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = IPRule;