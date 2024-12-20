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

import { ScriptSig } from './script-sig';
 /**
 * 
 *
 * @export
 * @interface BlockVin2
 */
export interface BlockVin2 {

    /**
     * Coinbase transaction input
     *
     * @type {string}
     * @memberof BlockVin2
     */
    coinbase?: string;

    /**
     * The script signature
     *
     * @type {ScriptSig}
     * @memberof BlockVin2
     */
    scriptSig?: ScriptSig;

    /**
     * Input sequence number
     *
     * @type {number}
     * @memberof BlockVin2
     */
    sequence?: number;

    /**
     * Transaction ID of the referenced output
     *
     * @type {string}
     * @memberof BlockVin2
     */
    txid?: string;

    /**
     * @type {Array<string>}
     * @memberof BlockVin2
     */
    txinwitness?: Array<string>;

    /**
     * Index of the referenced output
     *
     * @type {number}
     * @memberof BlockVin2
     */
    vout?: number;
}
