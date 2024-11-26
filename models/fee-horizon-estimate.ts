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

import { FeeRange } from './fee-range';
 /**
 * 
 *
 * @export
 * @interface FeeHorizonEstimate
 */
export interface FeeHorizonEstimate {

    /**
     * Exponential decay (per block) for historical moving average
     *
     * @type {number}
     * @memberof FeeHorizonEstimate
     */
    decay?: number;

    /**
     * Errors encountered during processing
     *
     * @type {Array<string>}
     * @memberof FeeHorizonEstimate
     */
    errors?: Array<string>;

    /**
     * Information about highest range of feerates to fail
     *
     * @type {FeeRange}
     * @memberof FeeHorizonEstimate
     */
    fail?: FeeRange;

    /**
     * Estimate fee rate in BTC/kvB
     *
     * @type {number}
     * @memberof FeeHorizonEstimate
     */
    feerate?: number;

    /**
     * Information about lowest range of feerates to succeed
     *
     * @type {FeeRange}
     * @memberof FeeHorizonEstimate
     */
    pass?: FeeRange;

    /**
     * Resolution of confirmation targets at this time horizon
     *
     * @type {number}
     * @memberof FeeHorizonEstimate
     */
    scale?: number;
}