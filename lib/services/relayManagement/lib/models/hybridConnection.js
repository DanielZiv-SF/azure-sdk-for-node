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
 * Description of hybrid connection resource.
 *
 * @extends models['Resource']
 */
class HybridConnection extends models['Resource'] {
  /**
   * Create a HybridConnection.
   * @member {date} [createdAt] The time the hybrid connection was created.
   * @member {date} [updatedAt] The time the namespace was updated.
   * @member {number} [listenerCount] The number of listeners for this hybrid
   * connection. Note that min : 1 and max:25 are supported.
   * @member {boolean} [requiresClientAuthorization] Returns true if client
   * authorization is needed for this hybrid connection; otherwise, false.
   * @member {string} [userMetadata] The usermetadata is a placeholder to store
   * user-defined string data for the hybrid connection endpoint. For example,
   * it can be used to store descriptive data, such as a list of teams and
   * their contact information. Also, user-defined configuration settings can
   * be stored.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of HybridConnection
   *
   * @returns {object} metadata of HybridConnection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HybridConnection',
      type: {
        name: 'Composite',
        className: 'HybridConnection',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          createdAt: {
            required: false,
            readOnly: true,
            serializedName: 'properties.createdAt',
            type: {
              name: 'DateTime'
            }
          },
          updatedAt: {
            required: false,
            readOnly: true,
            serializedName: 'properties.updatedAt',
            type: {
              name: 'DateTime'
            }
          },
          listenerCount: {
            required: false,
            readOnly: true,
            serializedName: 'properties.listenerCount',
            constraints: {
              InclusiveMaximum: 25,
              InclusiveMinimum: 0
            },
            type: {
              name: 'Number'
            }
          },
          requiresClientAuthorization: {
            required: false,
            serializedName: 'properties.requiresClientAuthorization',
            type: {
              name: 'Boolean'
            }
          },
          userMetadata: {
            required: false,
            serializedName: 'properties.userMetadata',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = HybridConnection;