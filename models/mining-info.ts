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
 * @interface MiningInfo
 */
export interface MiningInfo {

    /**
     * The current block
     *
     * @type {number}
     * @memberof MiningInfo
     */
    blocks?: number;

    /**
     * Current network name
     *
     * @type {string}
     * @memberof MiningInfo
     */
    chain?: string;

    /**
     * The number of block transactions of the last assembled block
     *
     * @type {number}
     * @memberof MiningInfo
     */
    currentblocktx?: number;

    /**
     * The block weight of the last assembled block
     *
     * @type {number}
     * @memberof MiningInfo
     */
    currentblockweight?: number;

    /**
     * The current difficulty
     *
     * @type {number}
     * @memberof MiningInfo
     */
    difficulty?: number;

    /**
     * The network hashes per second
     *
     * @type {number}
     * @memberof MiningInfo
     */
    networkhashps?: number;

    /**
     * The size of the mempool
     *
     * @type {number}
     * @memberof MiningInfo
     */
    pooledtx?: number;

    /**
     * Any network and blockchain warnings
     *
     * @type {string}
     * @memberof MiningInfo
     */
    warnings?: string;
}