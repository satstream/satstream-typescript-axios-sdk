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

import { Block1 } from './block1';
 /**
 * 
 *
 * @export
 * @interface GetBlockSummaryResponse
 */
export interface GetBlockSummaryResponse {

    /**
     * @type {number}
     * @memberof GetBlockSummaryResponse
     */
    code?: number;

    /**
     * @type {Block1}
     * @memberof GetBlockSummaryResponse
     */
    data?: Block1;

    /**
     * @type {string}
     * @memberof GetBlockSummaryResponse
     */
    msg?: string;
}
