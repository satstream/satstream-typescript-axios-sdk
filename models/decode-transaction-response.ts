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

import { DecodeResponse } from './decode-response';
 /**
 * 
 *
 * @export
 * @interface DecodeTransactionResponse
 */
export interface DecodeTransactionResponse {

    /**
     * @type {number}
     * @memberof DecodeTransactionResponse
     */
    code?: number;

    /**
     * @type {DecodeResponse}
     * @memberof DecodeTransactionResponse
     */
    data?: DecodeResponse;

    /**
     * @type {string}
     * @memberof DecodeTransactionResponse
     */
    msg?: string;
}