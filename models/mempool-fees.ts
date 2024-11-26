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
 * @interface MempoolFees
 */
export interface MempoolFees {

    /**
     * Ancestor transaction fees in BTC
     *
     * @type {number}
     * @memberof MempoolFees
     */
    ancestor?: number;

    /**
     * Base transaction fee in BTC
     *
     * @type {number}
     * @memberof MempoolFees
     */
    base?: number;

    /**
     * Descendant transaction fees in BTC
     *
     * @type {number}
     * @memberof MempoolFees
     */
    descendant?: number;

    /**
     * Modified transaction fee in BTC
     *
     * @type {number}
     * @memberof MempoolFees
     */
    modified?: number;
}
