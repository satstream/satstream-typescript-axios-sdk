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

import { InscriptionResponse } from './inscription-response';
 /**
 * 
 *
 * @export
 * @interface GetInscriptionResponse
 */
export interface GetInscriptionResponse {

    /**
     * @type {number}
     * @memberof GetInscriptionResponse
     */
    code?: number;

    /**
     * @type {InscriptionResponse}
     * @memberof GetInscriptionResponse
     */
    data?: InscriptionResponse;

    /**
     * @type {string}
     * @memberof GetInscriptionResponse
     */
    msg?: string;
}
