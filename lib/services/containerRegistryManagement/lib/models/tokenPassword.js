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
 * The password that will be used for authenticating the token of a container
 * registry.
 *
 */
class TokenPassword {
  /**
   * Create a TokenPassword.
   * @property {date} [creationTime] The password created datetime of the
   * password.
   * @property {date} [expiry] The expiry datetime of the password.
   * @property {string} [name] The password name "password" or "password2".
   * Possible values include: 'password1', 'password2'
   * @property {string} [value] The password value.
   */
  constructor() {
  }

  /**
   * Defines the metadata of TokenPassword
   *
   * @returns {object} metadata of TokenPassword
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TokenPassword',
      type: {
        name: 'Composite',
        className: 'TokenPassword',
        modelProperties: {
          creationTime: {
            required: false,
            serializedName: 'creationTime',
            type: {
              name: 'DateTime'
            }
          },
          expiry: {
            required: false,
            serializedName: 'expiry',
            type: {
              name: 'DateTime'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            readOnly: true,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = TokenPassword;