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
 * Class representing a Unitofmeasuretype.
 */
class Unitofmeasuretype {
  /**
   * Create a Unitofmeasuretype.
   * @property {string} [code] The code property for the unitofmeasuretype
   * entity
   * @property {string} [displayName] The displayName property for the
   * unitofmeasuretype entity
   * @property {string} [symbol] The symbol property for the unitofmeasuretype
   * entity
   * @property {object} [unitConversion]
   * @property {string} [unitConversion.toUnitOfMeasure] The toUnitOfMeasure
   * property for the itemunitofmeasureconversiontype entity
   * @property {number} [unitConversion.fromToConversionRate] The
   * fromToConversionRate property for the itemunitofmeasureconversiontype
   * entity
   * @property {array} [unitConversion.picture]
   * @property {array} [unitConversion.defaultDimensions]
   * @property {object} [unitConversion.itemCategory]
   * @property {uuid} [unitConversion.itemCategory.id] The id property for the
   * itemCategory entity
   * @property {string} [unitConversion.itemCategory.code] The code property
   * for the itemCategory entity
   * @property {string} [unitConversion.itemCategory.displayName] The
   * displayName property for the itemCategory entity
   * @property {date} [unitConversion.itemCategory.lastModifiedDateTime] The
   * lastModifiedDateTime property for the itemCategory entity
   * @property {array} [picture]
   * @property {array} [defaultDimensions]
   * @property {object} [itemCategory]
   * @property {uuid} [itemCategory.id] The id property for the itemCategory
   * entity
   * @property {string} [itemCategory.code] The code property for the
   * itemCategory entity
   * @property {string} [itemCategory.displayName] The displayName property for
   * the itemCategory entity
   * @property {date} [itemCategory.lastModifiedDateTime] The
   * lastModifiedDateTime property for the itemCategory entity
   */
  constructor() {
  }

  /**
   * Defines the metadata of Unitofmeasuretype
   *
   * @returns {object} metadata of Unitofmeasuretype
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'unitofmeasuretype',
      type: {
        name: 'Composite',
        className: 'Unitofmeasuretype',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            constraints: {
              MaxLength: 10
            },
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            constraints: {
              MaxLength: 50
            },
            type: {
              name: 'String'
            }
          },
          symbol: {
            required: false,
            serializedName: 'symbol',
            constraints: {
              MaxLength: 10
            },
            type: {
              name: 'String'
            }
          },
          unitConversion: {
            required: false,
            serializedName: 'unitConversion',
            type: {
              name: 'Composite',
              className: 'Itemunitofmeasureconversiontype'
            }
          },
          picture: {
            required: false,
            serializedName: 'picture',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PictureElementType',
                  type: {
                    name: 'Composite',
                    className: 'Picture'
                  }
              }
            }
          },
          defaultDimensions: {
            required: false,
            serializedName: 'defaultDimensions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DefaultDimensionsElementType',
                  type: {
                    name: 'Composite',
                    className: 'DefaultDimensions'
                  }
              }
            }
          },
          itemCategory: {
            required: false,
            serializedName: 'itemCategory',
            type: {
              name: 'Composite',
              className: 'ItemCategory'
            }
          }
        }
      }
    };
  }
}

module.exports = Unitofmeasuretype;