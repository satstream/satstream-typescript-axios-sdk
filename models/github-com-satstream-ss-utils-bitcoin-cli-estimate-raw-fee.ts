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

import { GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate } from './github-com-satstream-ss-utils-bitcoin-cli-fee-horizon-estimate';
 /**
 * 
 *
 * @export
 * @interface GithubComSatstreamSsUtilsBitcoinCliEstimateRawFee
 */
export interface GithubComSatstreamSsUtilsBitcoinCliEstimateRawFee {

    /**
     * Estimate for long time horizon
     *
     * @type {GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliEstimateRawFee
     */
    _long?: GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate;

    /**
     * Estimate for medium time horizon
     *
     * @type {GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliEstimateRawFee
     */
    medium?: GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate;

    /**
     * Estimate for short time horizon
     *
     * @type {GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate}
     * @memberof GithubComSatstreamSsUtilsBitcoinCliEstimateRawFee
     */
    _short?: GithubComSatstreamSsUtilsBitcoinCliFeeHorizonEstimate;
}
