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

import { RawFeeEstimate } from './raw-fee-estimate';
 /**
 * 
 *
 * @export
 * @interface EstimateRawFeeResponse
 */
export interface EstimateRawFeeResponse {

    /**
     * @type {number}
     * @memberof EstimateRawFeeResponse
     */
    code?: number;

    /**
     * @type {RawFeeEstimate}
     * @memberof EstimateRawFeeResponse
     */
    data?: RawFeeEstimate;

    /**
     * @type {string}
     * @memberof EstimateRawFeeResponse
     */
    msg?: string;
}