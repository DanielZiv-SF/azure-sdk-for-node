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
 * Class representing a GetPurchaseInvoiceLinesForPurchaseInvoiceOKResponse.
 */
class GetPurchaseInvoiceLinesForPurchaseInvoiceOKResponse {
  /**
   * Create a GetPurchaseInvoiceLinesForPurchaseInvoiceOKResponse.
   * @property {array} [value]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetPurchaseInvoiceLinesForPurchaseInvoiceOKResponse
   *
   * @returns {object} metadata of GetPurchaseInvoiceLinesForPurchaseInvoiceOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetPurchaseInvoiceLinesForPurchaseInvoiceOKResponse',
      type: {
        name: 'Composite',
        className: 'GetPurchaseInvoiceLinesForPurchaseInvoiceOKResponse',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PurchaseInvoiceLineElementType',
                  type: {
                    name: 'Composite',
                    className: 'PurchaseInvoiceLine'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GetPurchaseInvoiceLinesForPurchaseInvoiceOKResponse;