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

import { AddressResponse } from './address-response';
import { UtilsResponseEnvelope } from './utils-response-envelope';
 /**
 * 
 *
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 extends UtilsResponseEnvelope {

    /**
     * @type {AddressResponse}
     * @memberof InlineResponse2001
     */
    data?: AddressResponse;
}