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
 * The properties of the billing account that can be updated.
 *
 */
class BillingAccountUpdateProperties {
  /**
   * Create a BillingAccountUpdateProperties.
   * @property {string} [displayName] The billing account name.
   * @property {string} [accountType] The billing account Type. Possible values
   * include: 'Organization', 'Enrollment'
   * @property {object} [address] The address associated with billing account.
   * @property {string} [address.firstName] First Name.
   * @property {string} [address.lastName] Last Name.
   * @property {string} [address.companyName] Company Name.
   * @property {string} [address.addressLine1] Address Line1.
   * @property {string} [address.addressLine2] Address Line2.
   * @property {string} [address.addressLine3] Address Line3.
   * @property {string} [address.city] Address City.
   * @property {string} [address.region] Address Region.
   * @property {string} [address.country] Country code uses ISO2, 2-digit
   * format.
   * @property {string} [address.postalCode] Address Postal Code.
   * @property {string} [company] Company Name.
   * @property {string} [country] Country Name.
   * @property {array} [invoiceSections] The invoice sections associated to the
   * billing account. By default this is not populated, unless it's specified
   * in $expand.
   * @property {array} [billingProfiles] The billing profiles associated to the
   * billing account. By default this is not populated, unless it's specified
   * in $expand.
   * @property {object} [enrollmentDetails] The details about the associated
   * legacy enrollment. By default this is not populated, unless it's specified
   * in $expand.
   * @property {date} [enrollmentDetails.startDate] Enrollment Start Date
   * @property {date} [enrollmentDetails.endDate] Enrollment End Date
   * @property {string} [enrollmentDetails.currency] The currency associated
   * with enrollment
   * @property {string} [enrollmentDetails.channel] The channel for Enrollment
   * @property {object} [enrollmentDetails.policies] The attributes associated
   * with legacy enrollment.
   * @property {boolean} [enrollmentDetails.policies.accountOwnerViewCharges]
   * The accountOwnerViewCharges flag for Enrollment
   * @property {boolean}
   * [enrollmentDetails.policies.departmentAdminViewCharges] The
   * departmentAdminViewCharges flag for Enrollment
   * @property {boolean} [enrollmentDetails.policies.marketplacesEnabled] The
   * marketplaces flag for Enrollment
   * @property {boolean} [enrollmentDetails.policies.reservedInstancesEnabled]
   * The reserved instances flag for Enrollment
   * @property {string} [enrollmentDetails.language] The language for
   * Enrollment
   * @property {string} [enrollmentDetails.countryCode] The countryCode for
   * Enrollment
   * @property {string} [enrollmentDetails.status] Enrollment status
   * @property {string} [enrollmentDetails.billingCycle] Enrollment billing
   * cycle
   * @property {array} [departments] The departments associated to the
   * enrollment.
   * @property {array} [enrollmentAccounts] The accounts associated to the
   * enrollment.
   * @property {boolean} [hasReadAccess] Specifies whether the user has read
   * access on billing account.
   */
  constructor() {
  }

  /**
   * Defines the metadata of BillingAccountUpdateProperties
   *
   * @returns {object} metadata of BillingAccountUpdateProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BillingAccountUpdateProperties',
      type: {
        name: 'Composite',
        className: 'BillingAccountUpdateProperties',
        modelProperties: {
          displayName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.displayName',
            type: {
              name: 'String'
            }
          },
          accountType: {
            required: false,
            readOnly: true,
            serializedName: 'properties.accountType',
            type: {
              name: 'String'
            }
          },
          address: {
            required: false,
            serializedName: 'properties.address',
            type: {
              name: 'Composite',
              className: 'Address'
            }
          },
          company: {
            required: false,
            readOnly: true,
            serializedName: 'properties.company',
            type: {
              name: 'String'
            }
          },
          country: {
            required: false,
            readOnly: true,
            serializedName: 'properties.country',
            type: {
              name: 'String'
            }
          },
          invoiceSections: {
            required: false,
            serializedName: 'properties.invoiceSections',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'InvoiceSectionElementType',
                  type: {
                    name: 'Composite',
                    className: 'InvoiceSection'
                  }
              }
            }
          },
          billingProfiles: {
            required: false,
            serializedName: 'properties.billingProfiles',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'BillingProfileElementType',
                  type: {
                    name: 'Composite',
                    className: 'BillingProfile'
                  }
              }
            }
          },
          enrollmentDetails: {
            required: false,
            readOnly: true,
            serializedName: 'properties.enrollmentDetails',
            type: {
              name: 'Composite',
              className: 'Enrollment'
            }
          },
          departments: {
            required: false,
            serializedName: 'properties.departments',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DepartmentElementType',
                  type: {
                    name: 'Composite',
                    className: 'Department'
                  }
              }
            }
          },
          enrollmentAccounts: {
            required: false,
            serializedName: 'properties.enrollmentAccounts',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EnrollmentAccountElementType',
                  type: {
                    name: 'Composite',
                    className: 'EnrollmentAccount'
                  }
              }
            }
          },
          hasReadAccess: {
            required: false,
            readOnly: true,
            serializedName: 'properties.hasReadAccess',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = BillingAccountUpdateProperties;