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
 * Class representing a GetPictureForItemOKResponse.
 */
class GetPictureForItemOKResponse {
  /**
   * Create a GetPictureForItemOKResponse.
   * @property {array} [value]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetPictureForItemOKResponse
   *
   * @returns {object} metadata of GetPictureForItemOKResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetPictureForItemOKResponse',
      type: {
        name: 'Composite',
        className: 'GetPictureForItemOKResponse',
        modelProperties: {
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PictureElementType',
                  type: {
                    name: 'Composite',
                    className: 'Picture'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = GetPictureForItemOKResponse;