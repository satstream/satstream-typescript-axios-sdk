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
 * @interface ResponsesGetAddressRunesBalanceListItem
 */
export interface ResponsesGetAddressRunesBalanceListItem {

    /**
     * @type {string}
     * @memberof ResponsesGetAddressRunesBalanceListItem
     * @example 52286
     */
    amount?: string;

    /**
     * @type {string}
     * @memberof ResponsesGetAddressRunesBalanceListItem
     * @example 52.286
     */
    parsedAmount?: string;

    /**
     * @type {string}
     * @memberof ResponsesGetAddressRunesBalanceListItem
     * @example 50400003
     */
    runeId?: string;

    /**
     * @type {string}
     * @memberof ResponsesGetAddressRunesBalanceListItem
     * @example DECENTRALIZED
     */
    spacedRune?: string;
}
