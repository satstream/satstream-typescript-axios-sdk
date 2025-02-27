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

import { TxVin1 } from './tx-vin1';
import { Vout } from './vout';
 /**
 * 
 *
 * @export
 * @interface RawTx1
 */
export interface RawTx1 {

    /**
     * @type {string}
     * @memberof RawTx1
     */
    blockhash?: string;

    /**
     * @type {number}
     * @memberof RawTx1
     */
    blocktime?: number;

    /**
     * @type {number}
     * @memberof RawTx1
     */
    confirmations?: number;

    /**
     * @type {string}
     * @memberof RawTx1
     */
    hash?: string;

    /**
     * @type {string}
     * @memberof RawTx1
     */
    hex?: string;

    /**
     * @type {number}
     * @memberof RawTx1
     */
    locktime?: number;

    /**
     * @type {number}
     * @memberof RawTx1
     */
    size?: number;

    /**
     * @type {number}
     * @memberof RawTx1
     */
    time?: number;

    /**
     * @type {string}
     * @memberof RawTx1
     */
    txid?: string;

    /**
     * @type {number}
     * @memberof RawTx1
     */
    version?: number;

    /**
     * @type {Array<TxVin1>}
     * @memberof RawTx1
     */
    vin?: Array<TxVin1>;

    /**
     * @type {Array<Vout>}
     * @memberof RawTx1
     */
    vout?: Array<Vout>;

    /**
     * @type {number}
     * @memberof RawTx1
     */
    vsize?: number;

    /**
     * @type {number}
     * @memberof RawTx1
     */
    weight?: number;
}
