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

import { GithubComSatstreamSsUtilsBitcoinCliBtcTx3 } from './github-com-satstream-ss-utils-bitcoin-cli-btc-tx3';
 /**
 * 
 *
 * @export
 * @interface GithubComSatstreamSsUtilsBitcoinCliBlock3
 */
export interface GithubComSatstreamSsUtilsBitcoinCliBlock3 {

    /**
     * @type {string}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock3
     */
    bits?: string;

    /**
     * @type {string}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock3
     */
    chainwork?: string;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock3
     */
    confirmations?: number;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock3
     */
    difficulty?: number;

    /**
     * @type {string}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock3
     */
    hash?: string;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock3
     */
    height?: number;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock3
     */
    mediantime?: number;

    /**
     * @type {string}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock3
     */
    merkleroot?: string;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock3
     */
    nTx?: number;

    /**
     * @type {string}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock3
     */
    nextblockhash?: string;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock3
     */
    nonce?: number;

    /**
     * @type {string}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock3
     */
    previousblockhash?: string;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock3
     */
    size?: number;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock3
     */
    strippedsize?: number;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock3
     */
    time?: number;

    /**
     * List of fully detailed transactions
     *
     * @type {Array<GithubComSatstreamSsUtilsBitcoinCliBtcTx3>}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock3
     */
    tx?: Array<GithubComSatstreamSsUtilsBitcoinCliBtcTx3>;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock3
     */
    version?: number;

    /**
     * @type {string}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock3
     */
    versionHex?: string;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliBlock3
     */
    weight?: number;
}
