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

import { OutputResponse } from './output-response';
import { UtilsResponseEnvelope } from './utils-response-envelope';
 /**
 * 
 *
 * @export
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 extends UtilsResponseEnvelope {

    /**
     * @type {Array<OutputResponse>}
     * @memberof InlineResponse2002
     */
    data?: Array<OutputResponse>;
}