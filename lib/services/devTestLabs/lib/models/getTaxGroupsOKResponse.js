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
 * Class representing a GetTaxGroupsOKResponse.
 */
class GetTaxGroupsOKResponse {
  /**
   * Create a GetTaxGroupsOKResponse.
   * @property {array} [value]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetTaxGroupsOKResponse
   *
   * @returns {object} metadata of GetTaxGroupsOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetTaxGroupsOKResponse',
      type: {
        name: 'Composite',
        className: 'GetTaxGroupsOKResponse',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TaxGroupElementType',
                  type: {
                    name: 'Composite',
                    className: 'TaxGroup'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GetTaxGroupsOKResponse;