/* tslint:disable */
/* eslint-disable */
/**
 * Satstream API
 * Satstream API
 *
 * OpenAPI spec version: 1.0
 * Contact: team@satstream.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { ValidateAddressResult } from './validate-address-result';
 /**
 * 
 *
 * @export
 * @interface ValidateAddressResponse
 */
export interface ValidateAddressResponse {

    /**
     * @type {number}
     * @memberof ValidateAddressResponse
     */
    code?: number;

    /**
     * @type {ValidateAddressResult}
     * @memberof ValidateAddressResponse
     */
    data?: ValidateAddressResult;

    /**
     * @type {string}
     * @memberof ValidateAddressResponse
     */
    msg?: string;
}