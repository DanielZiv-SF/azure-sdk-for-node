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
 * Class representing a GetPaymentMethodsOKResponse.
 */
class GetPaymentMethodsOKResponse {
  /**
   * Create a GetPaymentMethodsOKResponse.
   * @property {array} [value]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetPaymentMethodsOKResponse
   *
   * @returns {object} metadata of GetPaymentMethodsOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetPaymentMethodsOKResponse',
      type: {
        name: 'Composite',
        className: 'GetPaymentMethodsOKResponse',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PaymentMethodElementType',
                  type: {
                    name: 'Composite',
                    className: 'PaymentMethod'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GetPaymentMethodsOKResponse;