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

import { BlocksResponse } from './blocks-response';
import { UtilsResponseEnvelope } from './utils-response-envelope';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20012
 */
export interface InlineResponse20012 extends UtilsResponseEnvelope {

    /**
     * @type {BlocksResponse}
     * @memberof InlineResponse20012
     */
    data?: BlocksResponse;
}