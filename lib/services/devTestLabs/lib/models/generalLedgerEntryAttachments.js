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
 * Class representing a GeneralLedgerEntryAttachments.
 */
class GeneralLedgerEntryAttachments {
  /**
   * Create a GeneralLedgerEntryAttachments.
   * @property {number} [generalLedgerEntryNumber] The generalLedgerEntryNumber
   * property for the generalLedgerEntryAttachments entity
   * @property {uuid} [id] The id property for the
   * generalLedgerEntryAttachments entity
   * @property {string} [fileName] The fileName property for the
   * generalLedgerEntryAttachments entity
   * @property {number} [byteSize] The byteSize property for the
   * generalLedgerEntryAttachments entity
   * @property {string} [content] The content property for the
   * generalLedgerEntryAttachments entity
   * @property {date} [createdDateTime] The createdDateTime property for the
   * generalLedgerEntryAttachments entity
   * @property {object} [generalLedgerEntry]
   * @property {number} [generalLedgerEntry.id] The id property for the
   * generalLedgerEntry entity
   * @property {date} [generalLedgerEntry.postingDate] The postingDate property
   * for the generalLedgerEntry entity
   * @property {string} [generalLedgerEntry.documentNumber] The documentNumber
   * property for the generalLedgerEntry entity
   * @property {string} [generalLedgerEntry.documentType] The documentType
   * property for the generalLedgerEntry entity
   * @property {uuid} [generalLedgerEntry.accountId] The accountId property for
   * the generalLedgerEntry entity
   * @property {string} [generalLedgerEntry.accountNumber] The accountNumber
   * property for the generalLedgerEntry entity
   * @property {string} [generalLedgerEntry.description] The description
   * property for the generalLedgerEntry entity
   * @property {number} [generalLedgerEntry.debitAmount] The debitAmount
   * property for the generalLedgerEntry entity
   * @property {number} [generalLedgerEntry.creditAmount] The creditAmount
   * property for the generalLedgerEntry entity
   * @property {array} [generalLedgerEntry.dimensions]
   * @property {date} [generalLedgerEntry.lastModifiedDateTime] The
   * lastModifiedDateTime property for the generalLedgerEntry entity
   * @property {object} [generalLedgerEntry.account]
   * @property {uuid} [generalLedgerEntry.account.id] The id property for the
   * account entity
   * @property {string} [generalLedgerEntry.account.number] The number property
   * for the account entity
   * @property {string} [generalLedgerEntry.account.displayName] The
   * displayName property for the account entity
   * @property {string} [generalLedgerEntry.account.category] The category
   * property for the account entity
   * @property {string} [generalLedgerEntry.account.subCategory] The
   * subCategory property for the account entity
   * @property {boolean} [generalLedgerEntry.account.blocked] The blocked
   * property for the account entity
   * @property {date} [generalLedgerEntry.account.lastModifiedDateTime] The
   * lastModifiedDateTime property for the account entity
   */
  constructor() {
  }

  /**
   * Defines the metadata of GeneralLedgerEntryAttachments
   *
   * @returns {object} metadata of GeneralLedgerEntryAttachments
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'generalLedgerEntryAttachments',
      type: {
        name: 'Composite',
        className: 'GeneralLedgerEntryAttachments',
        modelProperties: {
          generalLedgerEntryNumber: {
            required: false,
            serializedName: 'generalLedgerEntryNumber',
            type: {
              name: 'Number'
            }
          },
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          fileName: {
            required: false,
            serializedName: 'fileName',
            constraints: {
              MaxLength: 250
            },
            type: {
              name: 'String'
            }
          },
          byteSize: {
            required: false,
            serializedName: 'byteSize',
            type: {
              name: 'Number'
            }
          },
          content: {
            required: false,
            serializedName: 'content',
            type: {
              name: 'String'
            }
          },
          createdDateTime: {
            required: false,
            serializedName: 'createdDateTime',
            type: {
              name: 'DateTime'
            }
          },
          generalLedgerEntry: {
            required: false,
            serializedName: 'generalLedgerEntry',
            type: {
              name: 'Composite',
              className: 'GeneralLedgerEntry'
            }
          }
        }
      }
    };
  }
}

module.exports = GeneralLedgerEntryAttachments;