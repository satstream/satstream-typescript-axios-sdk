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

import { GithubComSatstreamSsUtilsOrdServerResponsesRuneListEntry } from './github-com-satstream-ss-utils-ord-server-responses-rune-list-entry';
 /**
 * 
 *
 * @export
 * @interface GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse
 */
export interface GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse {

    /**
     * @type {Array<GithubComSatstreamSsUtilsOrdServerResponsesRuneListEntry>}
     * @memberof GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse
     */
    entries?: Array<GithubComSatstreamSsUtilsOrdServerResponsesRuneListEntry>;

    /**
     * @type {boolean}
     * @memberof GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse
     */
    more?: boolean;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse
     */
    next?: number;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsOrdServerResponsesRunesListResponse
     */
    prev?: number;
}
