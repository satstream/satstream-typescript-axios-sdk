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

import { GithubComSatstreamSsUtilsOrdServerResponsesTransactionInput } from './github-com-satstream-ss-utils-ord-server-responses-transaction-input';
import { GithubComSatstreamSsUtilsOrdServerResponsesTransactionOutput } from './github-com-satstream-ss-utils-ord-server-responses-transaction-output';
 /**
 * 
 *
 * @export
 * @interface GithubComSatstreamSsUtilsOrdServerResponsesTransactionDetails
 */
export interface GithubComSatstreamSsUtilsOrdServerResponsesTransactionDetails {

    /**
     * @type {Array<GithubComSatstreamSsUtilsOrdServerResponsesTransactionInput>}
     * @memberof GithubComSatstreamSsUtilsOrdServerResponsesTransactionDetails
     */
    input?: Array<GithubComSatstreamSsUtilsOrdServerResponsesTransactionInput>;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsOrdServerResponsesTransactionDetails
     */
    lockTime?: number;

    /**
     * @type {Array<GithubComSatstreamSsUtilsOrdServerResponsesTransactionOutput>}
     * @memberof GithubComSatstreamSsUtilsOrdServerResponsesTransactionDetails
     */
    output?: Array<GithubComSatstreamSsUtilsOrdServerResponsesTransactionOutput>;

    /**
     * @type {number}
     * @memberof GithubComSatstreamSsUtilsOrdServerResponsesTransactionDetails
     */
    version?: number;
}
