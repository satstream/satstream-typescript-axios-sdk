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

import { BlocksResponse } from './blocks-response';
 /**
 * 
 *
 * @export
 * @interface GetBlocksResponse
 */
export interface GetBlocksResponse {

    /**
     * @type {number}
     * @memberof GetBlocksResponse
     */
    code?: number;

    /**
     * @type {BlocksResponse}
     * @memberof GetBlocksResponse
     */
    data?: BlocksResponse;

    /**
     * @type {string}
     * @memberof GetBlocksResponse
     */
    msg?: string;
}
