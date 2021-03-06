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
 * Lists Regions operation response details.
 */
class RegionListResult extends Array {
  /**
   * Create a RegionListResult.
   * @property {number} [count] Total record count number across all pages.
   * @property {string} [nextLink] Next page link if any.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RegionListResult
   *
   * @returns {object} metadata of RegionListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RegionListResult',
      type: {
        name: 'Composite',
        className: 'RegionListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RegionContractElementType',
                  type: {
                    name: 'Composite',
                    className: 'RegionContract'
                  }
              }
            }
          },
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RegionListResult;
