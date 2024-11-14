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

import { GithubComSatstreamSsUtilsRpcScriptPubKey } from './github-com-satstream-ss-utils-rpc-script-pub-key';
import { GithubComSatstreamSsUtilsRpcUtxoRune } from './github-com-satstream-ss-utils-rpc-utxo-rune';
 /**
 * 
 *
 * @export
 * @interface GithubComSatstreamSsUtilsRpcVout
 */
export interface GithubComSatstreamSsUtilsRpcVout {

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsRpcVout
     */
    n?: number;

    /**
     * @type {Array<GithubComSatstreamSsUtilsRpcUtxoRune>}
     * @memberof GithubComSatstreamSsUtilsRpcVout
     */
    runeHoldings?: Array<GithubComSatstreamSsUtilsRpcUtxoRune>;

    /**
     * @type {GithubComSatstreamSsUtilsRpcScriptPubKey}
     * @memberof GithubComSatstreamSsUtilsRpcVout
     */
    scriptPubKey?: GithubComSatstreamSsUtilsRpcScriptPubKey;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsRpcVout
     */
    value?: number;
}
