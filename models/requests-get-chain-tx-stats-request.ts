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

 /**
 * 
 *
 * @export
 * @interface RequestsGetChainTxStatsRequest
 */
export interface RequestsGetChainTxStatsRequest {

    /**
     * Optional: The hash of the block that ends the window (default=chain tip)
     *
     * @type {string}
     * @memberof RequestsGetChainTxStatsRequest
     */
    blockhash?: string;

    /**
     * Optional: Size of the window in number of blocks (default=one month)
     *
     * @type {number}
     * @memberof RequestsGetChainTxStatsRequest
     */
    nblocks?: number;
}