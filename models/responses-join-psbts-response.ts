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
 * @interface ResponsesJoinPSBTsResponse
 */
export interface ResponsesJoinPSBTsResponse {

    /**
     * @type {number}
     * @memberof ResponsesJoinPSBTsResponse
     */
    code?: number;

    /**
     * Base64-encoded joined PSBT
     *
     * @type {string}
     * @memberof ResponsesJoinPSBTsResponse
     */
    data?: string;

    /**
     * @type {string}
     * @memberof ResponsesJoinPSBTsResponse
     */
    msg?: string;
}
