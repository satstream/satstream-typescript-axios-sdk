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

import { GithubComSatstreamSsUtilsBitcoinCliBtcTx2 } from './github-com-satstream-ss-utils-bitcoin-cli-btc-tx2';
 /**
 * 
 *
 * @export
 * @interface GithubComSatstreamSsUtilsBitcoinCliBlock2
 */
export interface GithubComSatstreamSsUtilsBitcoinCliBlock2 {

    /**
     * @type {string}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock2
     */
    bits?: string;

    /**
     * @type {string}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock2
     */
    chainwork?: string;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock2
     */
    confirmations?: number;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock2
     */
    difficulty?: number;

    /**
     * @type {string}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock2
     */
    hash?: string;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock2
     */
    height?: number;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock2
     */
    mediantime?: number;

    /**
     * @type {string}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock2
     */
    merkleroot?: string;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock2
     */
    nTx?: number;

    /**
     * @type {string}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock2
     */
    nextblockhash?: string;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock2
     */
    nonce?: number;

    /**
     * @type {string}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock2
     */
    previousblockhash?: string;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock2
     */
    size?: number;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock2
     */
    strippedsize?: number;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock2
     */
    time?: number;

    /**
     * List of detailed transactions
     *
     * @type {Array<GithubComSatstreamSsUtilsBitcoinCliBtcTx2>}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock2
     */
    tx?: Array<GithubComSatstreamSsUtilsBitcoinCliBtcTx2>;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock2
     */
    version?: number;

    /**
     * @type {string}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock2
     */
    versionHex?: string;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock2
     */
    weight?: number;
}
