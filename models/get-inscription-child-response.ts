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
 * @interface GetInscriptionChildResponse
 */
export interface GetInscriptionChildResponse {

    /**
     * @type {number}
     * @memberof GetInscriptionChildResponse
     */
    code?: number;

    /**
     * @type {InscriptionResponse}
     * @memberof GetInscriptionChildResponse
     */
    data?: InscriptionResponse;

    /**
     * @type {string}
     * @memberof GetInscriptionChildResponse
     */
    msg?: string;
}
