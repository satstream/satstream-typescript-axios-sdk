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
 * @interface RequestsGetBlockStatsRequest
 */
export interface RequestsGetBlockStatsRequest {

    /**
     * Required: The block hash (string) or height (numeric)
     *
     * @type {any}
     * @memberof RequestsGetBlockStatsRequest
     */
    hashOrHeight?: any;

    /**
     * Optional: Values to plot (if empty, all values will be included)
     *
     * @type {Array<string>}
     * @memberof RequestsGetBlockStatsRequest
     */
    stats?: Array<string>;
}