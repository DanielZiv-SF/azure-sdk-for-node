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
 * Class representing a GetVendorPurchasesOKResponse.
 */
class GetVendorPurchasesOKResponse {
  /**
   * Create a GetVendorPurchasesOKResponse.
   * @property {array} [value]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetVendorPurchasesOKResponse
   *
   * @returns {object} metadata of GetVendorPurchasesOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetVendorPurchasesOKResponse',
      type: {
        name: 'Composite',
        className: 'GetVendorPurchasesOKResponse',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VendorPurchaseElementType',
                  type: {
                    name: 'Composite',
                    className: 'VendorPurchase'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GetVendorPurchasesOKResponse;