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

import { MempoolAncestorsData } from './mempool-ancestors-data';
import { UtilsResponseEnvelope } from './utils-response-envelope';
 /**
 * 
 *
 * @export
 * @interface InlineResponse20020
 */
export interface InlineResponse20020 extends UtilsResponseEnvelope {

    /**
     * @type {MempoolAncestorsData}
     * @memberof InlineResponse20020
     */
    data?: MempoolAncestorsData;
}