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
 * @interface Input
 */
export interface Input {

    /**
     * @type {string}
     * @memberof Input
     */
    previousOutput?: string;

    /**
     * @type {string}
     * @memberof Input
     */
    scriptSig?: string;

    /**
     * @type {number}
     * @memberof Input
     */
    sequence?: number;

    /**
     * @type {Array<string>}
     * @memberof Input
     */
    witness?: Array<string>;
}
