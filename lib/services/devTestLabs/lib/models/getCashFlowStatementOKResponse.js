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
 * Class representing a GetCashFlowStatementOKResponse.
 */
class GetCashFlowStatementOKResponse {
  /**
   * Create a GetCashFlowStatementOKResponse.
   * @property {array} [value]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetCashFlowStatementOKResponse
   *
   * @returns {object} metadata of GetCashFlowStatementOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetCashFlowStatementOKResponse',
      type: {
        name: 'Composite',
        className: 'GetCashFlowStatementOKResponse',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CashFlowStatementElementType',
                  type: {
                    name: 'Composite',
                    className: 'CashFlowStatement'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GetCashFlowStatementOKResponse;