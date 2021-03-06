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

const models = require('./index');

/**
 * Issue Attachment Contract details.
 *
 * @extends models['Resource']
 */
class IssueAttachmentContract extends models['Resource'] {
  /**
   * Create a IssueAttachmentContract.
   * @property {string} title Filename by which the binary data will be saved.
   * @property {string} contentFormat Either 'link' if content is provided via
   * an HTTP link or the MIME type of the Base64-encoded binary data provided
   * in the 'content' property.
   * @property {string} content An HTTP link or Base64-encoded binary data.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of IssueAttachmentContract
   *
   * @returns {object} metadata of IssueAttachmentContract
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IssueAttachmentContract',
      type: {
        name: 'Composite',
        className: 'IssueAttachmentContract',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          title: {
            required: true,
            serializedName: 'properties.title',
            type: {
              name: 'String'
            }
          },
          contentFormat: {
            required: true,
            serializedName: 'properties.contentFormat',
            type: {
              name: 'String'
            }
          },
          content: {
            required: true,
            serializedName: 'properties.content',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = IssueAttachmentContract;
