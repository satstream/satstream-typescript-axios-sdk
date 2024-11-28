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
 * @interface TransactionSendRawTransactionRequest
 */
export interface TransactionSendRawTransactionRequest {

    /**
     * The hex string of the raw transaction
     *
     * @type {string}
     * @memberof TransactionSendRawTransactionRequest
     */
    hexString?: string;

    /**
     * Optional: Reject transactions whose fee rate is higher than this value (BTC/kvB)
     *
     * @type {number}
     * @memberof TransactionSendRawTransactionRequest
     */
    maxFeeRate?: number;
}