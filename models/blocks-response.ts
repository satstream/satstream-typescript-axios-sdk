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
 * @interface BlocksResponse
 */
export interface BlocksResponse {

    /**
     * @type {Array<string>}
     * @memberof BlocksResponse
     */
    blocks?: Array<string>;

    /**
     * @type {{ [key: string]: Array<string>; }}
     * @memberof BlocksResponse
     */
    featuredBlocks?: { [key: string]: Array<string>; };

    /**
     * @type {number}
     * @memberof BlocksResponse
     */
    last?: number;
}
