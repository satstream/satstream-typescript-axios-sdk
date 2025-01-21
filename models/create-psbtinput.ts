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
 * @interface CreatePSBTInput
 */
export interface CreatePSBTInput {

    /**
     * The sequence number to use for the input
     *
     * @type {number}
     * @memberof CreatePSBTInput
     */
    sequence?: number;

    /**
     * The transaction id of the output to spend
     *
     * @type {string}
     * @memberof CreatePSBTInput
     */
    txid: string;

    /**
     * The output index number (vout) of the output to spend
     *
     * @type {number}
     * @memberof CreatePSBTInput
     */
    vout: number;
}
