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
 * Node Closed event.
 *
 * @extends models['NodeEvent']
 */
class NodeClosedEvent extends models['NodeEvent'] {
  /**
   * Create a NodeClosedEvent.
   * @property {string} nodeId Id of Node.
   * @property {number} nodeInstance Id of Node instance.
   * @property {string} error Describes error.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of NodeClosedEvent
   *
   * @returns {object} metadata of NodeClosedEvent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NodeClosed',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'Kind',
          clientName: 'kind'
        },
        uberParent: 'FabricEvent',
        className: 'NodeClosedEvent',
        modelProperties: {
          eventInstanceId: {
            required: true,
            serializedName: 'EventInstanceId',
            type: {
              name: 'String'
            }
          },
          category: {
            required: false,
            serializedName: 'Category',
            type: {
              name: 'String'
            }
          },
          timeStamp: {
            required: true,
            serializedName: 'TimeStamp',
            type: {
              name: 'DateTime'
            }
          },
          hasCorrelatedEvents: {
            required: false,
            serializedName: 'HasCorrelatedEvents',
            type: {
              name: 'Boolean'
            }
          },
          kind: {
            required: true,
            serializedName: 'Kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          nodeName: {
            required: true,
            serializedName: 'NodeName',
            type: {
              name: 'String'
            }
          },
          nodeId: {
            required: true,
            serializedName: 'NodeId',
            type: {
              name: 'String'
            }
          },
          nodeInstance: {
            required: true,
            serializedName: 'NodeInstance',
            type: {
              name: 'Number'
            }
          },
          error: {
            required: true,
            serializedName: 'Error',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = NodeClosedEvent;