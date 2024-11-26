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
 * @interface GithubComSatstreamSsUtilsBitcoinCliSmartFeeEstimate
 */
export interface GithubComSatstreamSsUtilsBitcoinCliSmartFeeEstimate {

    /**
     * Block number where estimate was found
     *
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliSmartFeeEstimate
     */
    blocks?: number;

    /**
     * Errors encountered during processing
     *
     * @type {Array<string>}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliSmartFeeEstimate
     */
    errors?: Array<string>;

    /**
     * Estimate fee rate in BTC/kvB
     *
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliSmartFeeEstimate
     */
    feerate?: number;
}
