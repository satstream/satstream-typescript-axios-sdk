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
 * @interface GithubComSatstreamSsUtilsBitcoinCliMempoolInfo
 */
export interface GithubComSatstreamSsUtilsBitcoinCliMempoolInfo {

    /**
     * Sum of all virtual transaction sizes
     *
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliMempoolInfo
     */
    bytes?: number;

    /**
     * True if mempool accepts RBF without signaling inspection
     *
     * @type {boolean}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliMempoolInfo
     */
    fullrbf?: boolean;

    /**
     * Minimum fee rate increment for mempool limiting
     *
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliMempoolInfo
     */
    incrementalrelayfee?: number;

    /**
     * True if the mempool is fully loaded
     *
     * @type {boolean}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliMempoolInfo
     */
    loaded?: boolean;

    /**
     * Maximum memory usage for the mempool
     *
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliMempoolInfo
     */
    maxmempool?: number;

    /**
     * Minimum fee rate in BTC/kvB for tx to be accepted
     *
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliMempoolInfo
     */
    mempoolminfee?: number;

    /**
     * Current minimum relay fee for transactions
     *
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliMempoolInfo
     */
    minrelaytxfee?: number;

    /**
     * Current tx count
     *
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliMempoolInfo
     */
    size?: number;

    /**
     * Total fees for the mempool in BTC
     *
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliMempoolInfo
     */
    totalFee?: number;

    /**
     * Number of unbroadcast transactions
     *
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliMempoolInfo
     */
    unbroadcastcount?: number;

    /**
     * Total memory usage for the mempool
     *
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliMempoolInfo
     */
    usage?: number;
}
