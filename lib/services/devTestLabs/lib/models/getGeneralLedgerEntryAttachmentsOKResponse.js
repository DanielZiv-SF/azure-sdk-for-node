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
 * Class representing a GetGeneralLedgerEntryAttachmentsOKResponse.
 */
class GetGeneralLedgerEntryAttachmentsOKResponse {
  /**
   * Create a GetGeneralLedgerEntryAttachmentsOKResponse.
   * @property {array} [value]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetGeneralLedgerEntryAttachmentsOKResponse
   *
   * @returns {object} metadata of GetGeneralLedgerEntryAttachmentsOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetGeneralLedgerEntryAttachmentsOKResponse',
      type: {
        name: 'Composite',
        className: 'GetGeneralLedgerEntryAttachmentsOKResponse',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'GeneralLedgerEntryAttachmentsElementType',
                  type: {
                    name: 'Composite',
                    className: 'GeneralLedgerEntryAttachments'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GetGeneralLedgerEntryAttachmentsOKResponse;