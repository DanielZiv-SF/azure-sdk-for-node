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
 * @summary A reference to a Certificate to be installed on Compute Nodes in a
 * Pool.
  *
 */
class CertificateReference {
  /**
   * Create a CertificateReference.
   * @property {string} thumbprint The thumbprint of the Certificate.
   * @property {string} thumbprintAlgorithm The algorithm with which the
   * thumbprint is associated. This must be sha1.
   * @property {string} [storeLocation] The location of the Certificate store
   * on the Compute Node into which to install the Certificate. The default
   * value is currentuser. This property is applicable only for Pools
   * configured with Windows Compute Nodes (that is, created with
   * cloudServiceConfiguration, or with virtualMachineConfiguration using a
   * Windows Image reference). For Linux Compute Nodes, the Certificates are
   * stored in a directory inside the Task working directory and an environment
   * variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for
   * this location. For Certificates with visibility of 'remoteUser', a 'certs'
   * directory is created in the user's home directory (e.g.,
   * /home/{user-name}/certs) and Certificates are placed in that directory.
   * Possible values include: 'currentUser', 'localMachine'
   * @property {string} [storeName] The name of the Certificate store on the
   * Compute Node into which to install the Certificate. This property is
   * applicable only for Pools configured with Windows Compute Nodes (that is,
   * created with cloudServiceConfiguration, or with
   * virtualMachineConfiguration using a Windows Image reference). Common store
   * names include: My, Root, CA, Trust, Disallowed, TrustedPeople,
   * TrustedPublisher, AuthRoot, AddressBook, but any custom store name can
   * also be used. The default value is My.
   * @property {array} [visibility] Which user Accounts on the Compute Node
   * should have access to the private data of the Certificate. You can specify
   * more than one visibility in this collection. The default is all Accounts.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CertificateReference
   *
   * @returns {object} metadata of CertificateReference
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CertificateReference',
      type: {
        name: 'Composite',
        className: 'CertificateReference',
        modelProperties: {
          thumbprint: {
            required: true,
            serializedName: 'thumbprint',
            type: {
              name: 'String'
            }
          },
          thumbprintAlgorithm: {
            required: true,
            serializedName: 'thumbprintAlgorithm',
            type: {
              name: 'String'
            }
          },
          storeLocation: {
            required: false,
            serializedName: 'storeLocation',
            type: {
              name: 'Enum',
              allowedValues: [ 'currentUser', 'localMachine' ]
            }
          },
          storeName: {
            required: false,
            serializedName: 'storeName',
            type: {
              name: 'String'
            }
          },
          visibility: {
            required: false,
            serializedName: 'visibility',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CertificateVisibilityElementType',
                  type: {
                    name: 'Enum',
                    allowedValues: [ 'startTask', 'task', 'remoteUser' ]
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CertificateReference;
