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
 * @interface Block1
 */
export interface Block1 {

    /**
     * @type {string}
     * @memberof Block1
     */
    bits?: string;

    /**
     * @type {string}
     * @memberof Block1
     */
    chainwork?: string;

    /**
     * @type {number}
     * @memberof Block1
     */
    confirmations?: number;

    /**
     * @type {number}
     * @memberof Block1
     */
    difficulty?: number;

    /**
     * @type {string}
     * @memberof Block1
     */
    hash?: string;

    /**
     * @type {number}
     * @memberof Block1
     */
    height?: number;

    /**
     * @type {number}
     * @memberof Block1
     */
    mediantime?: number;

    /**
     * @type {string}
     * @memberof Block1
     */
    merkleroot?: string;

    /**
     * @type {number}
     * @memberof Block1
     */
    nTx?: number;

    /**
     * @type {string}
     * @memberof Block1
     */
    nextblockhash?: string;

    /**
     * @type {number}
     * @memberof Block1
     */
    nonce?: number;

    /**
     * @type {string}
     * @memberof Block1
     */
    previousblockhash?: string;

    /**
     * @type {number}
     * @memberof Block1
     */
    size?: number;

    /**
     * @type {number}
     * @memberof Block1
     */
    strippedsize?: number;

    /**
     * @type {number}
     * @memberof Block1
     */
    time?: number;

    /**
     * @type {Array<string>}
     * @memberof Block1
     */
    tx?: Array<string>;

    /**
     * @type {number}
     * @memberof Block1
     */
    version?: number;

    /**
     * @type {string}
     * @memberof Block1
     */
    versionHex?: string;

    /**
     * @type {number}
     * @memberof Block1
     */
    weight?: number;
}