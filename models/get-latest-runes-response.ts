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

import { GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse } from './github-com-satstream-ss-utils-ord-server-responses-runes-list-response';
 /**
 * 
 *
 * @export
 * @interface GetLatestRunesResponse
 */
export interface GetLatestRunesResponse {

    /**
     * @type {number}
     * @memberof GetLatestRunesResponse
     */
    code?: number;

    /**
     * @type {GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse}
     * @memberof GetLatestRunesResponse
     */
    data?: GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse;

    /**
     * @type {string}
     * @memberof GetLatestRunesResponse
     */
    msg?: string;
}