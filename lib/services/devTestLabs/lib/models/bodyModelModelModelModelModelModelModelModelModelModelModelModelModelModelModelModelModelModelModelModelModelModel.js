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
 * Class representing a BodyModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModel.
 */
class BodyModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModel {
  /**
   * Create a BodyModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModel.
   * @property {uuid} [id] The id property for the countryRegion entity
   * @property {string} [code] The code property for the countryRegion entity
   * @property {string} [displayName] The displayName property for the
   * countryRegion entity
   * @property {string} [addressFormat] The addressFormat property for the
   * countryRegion entity
   * @property {date} [lastModifiedDateTime] The lastModifiedDateTime property
   * for the countryRegion entity
   */
  constructor() {
  }

  /**
   * Defines the metadata of BodyModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModel
   *
   * @returns {object} metadata of BodyModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'body',
      type: {
        name: 'Composite',
        className: 'BodyModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModel',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
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
          addressFormat: {
            required: false,
            serializedName: 'addressFormat',
            type: {
              name: 'String'
            }
          },
          lastModifiedDateTime: {
            required: false,
            serializedName: 'lastModifiedDateTime',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = BodyModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModelModel;