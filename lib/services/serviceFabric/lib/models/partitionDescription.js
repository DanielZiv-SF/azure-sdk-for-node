/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the PartitionDescription class.
 * @constructor
 * @member {number} [partitionScheme]
 * 
 * @member {number} [count]
 * 
 * @member {array} [names]
 * 
 * @member {string} [lowKey]
 * 
 * @member {string} [highKey]
 * 
 */
function PartitionDescription() {
}

/**
 * Defines the metadata of PartitionDescription
 *
 * @returns {object} metadata of PartitionDescription
 *
 */
PartitionDescription.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PartitionDescription',
    type: {
      name: 'Composite',
      className: 'PartitionDescription',
      modelProperties: {
        partitionScheme: {
          required: false,
          serializedName: 'PartitionScheme',
          type: {
            name: 'Number'
          }
        },
        count: {
          required: false,
          serializedName: 'Count',
          type: {
            name: 'Number'
          }
        },
        names: {
          required: false,
          serializedName: 'Names',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        lowKey: {
          required: false,
          serializedName: 'LowKey',
          type: {
            name: 'String'
          }
        },
        highKey: {
          required: false,
          serializedName: 'HighKey',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = PartitionDescription;