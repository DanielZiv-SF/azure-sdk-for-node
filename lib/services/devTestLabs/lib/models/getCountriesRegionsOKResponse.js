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
 * Class representing a GetCountriesRegionsOKResponse.
 */
class GetCountriesRegionsOKResponse {
  /**
   * Create a GetCountriesRegionsOKResponse.
   * @property {array} [value]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetCountriesRegionsOKResponse
   *
   * @returns {object} metadata of GetCountriesRegionsOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetCountriesRegionsOKResponse',
      type: {
        name: 'Composite',
        className: 'GetCountriesRegionsOKResponse',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CountryRegionElementType',
                  type: {
                    name: 'Composite',
                    className: 'CountryRegion'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GetCountriesRegionsOKResponse;