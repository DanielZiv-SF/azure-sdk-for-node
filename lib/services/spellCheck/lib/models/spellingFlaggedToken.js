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
 * Class representing a SpellingFlaggedToken.
 */
class SpellingFlaggedToken {
  /**
   * Create a SpellingFlaggedToken.
   * @property {number} offset
   * @property {string} token
   * @property {string} type Possible values include: 'UnknownToken',
   * 'RepeatedToken'. Default value: 'UnknownToken' .
   * @property {array} [suggestions]
   * @property {string} [pingUrlSuffix]
   */
  constructor() {
  }

  /**
   * Defines the metadata of SpellingFlaggedToken
   *
   * @returns {object} metadata of SpellingFlaggedToken
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Spelling/FlaggedToken',
      type: {
        name: 'Composite',
        className: 'SpellingFlaggedToken',
        modelProperties: {
          offset: {
            required: true,
            serializedName: 'offset',
            type: {
              name: 'Number'
            }
          },
          token: {
            required: true,
            serializedName: 'token',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            defaultValue: 'UnknownToken',
            type: {
              name: 'String'
            }
          },
          suggestions: {
            required: false,
            readOnly: true,
            serializedName: 'suggestions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'SpellingTokenSuggestionElementType',
                  type: {
                    name: 'Composite',
                    className: 'SpellingTokenSuggestion'
                  }
              }
            }
          },
          pingUrlSuffix: {
            required: false,
            readOnly: true,
            serializedName: 'pingUrlSuffix',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SpellingFlaggedToken;
