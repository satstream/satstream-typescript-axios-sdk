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

import { BlockchainInfo } from './blockchain-info';
 /**
 * 
 *
 * @export
 * @interface GetBlockchainInfoResponse
 */
export interface GetBlockchainInfoResponse {

    /**
     * @type {number}
     * @memberof GetBlockchainInfoResponse
     */
    code?: number;

    /**
     * @type {BlockchainInfo}
     * @memberof GetBlockchainInfoResponse
     */
    data?: BlockchainInfo;

    /**
     * @type {string}
     * @memberof GetBlockchainInfoResponse
     */
    msg?: string;
}
