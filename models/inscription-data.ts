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

 /**
 * 
 *
 * @export
 * @interface InscriptionData
 */
export interface InscriptionData {

    /**
     * @type {Array<number>}
     * @memberof InscriptionData
     */
    body?: Array<number>;

    /**
     * @type {string}
     * @memberof InscriptionData
     */
    contentEncoding?: string;

    /**
     * @type {Array<number>}
     * @memberof InscriptionData
     */
    contentType?: Array<number>;

    /**
     * @type {string}
     * @memberof InscriptionData
     */
    delegate?: string;

    /**
     * @type {boolean}
     * @memberof InscriptionData
     */
    duplicateField?: boolean;

    /**
     * @type {boolean}
     * @memberof InscriptionData
     */
    incompleteField?: boolean;

    /**
     * @type {string}
     * @memberof InscriptionData
     */
    metadata?: string;

    /**
     * @type {string}
     * @memberof InscriptionData
     */
    metaprotocol?: string;

    /**
     * @type {Array<string>}
     * @memberof InscriptionData
     */
    parents?: Array<string>;

    /**
     * @type {string}
     * @memberof InscriptionData
     */
    pointer?: string;

    /**
     * @type {string}
     * @memberof InscriptionData
     */
    rune?: string;

    /**
     * @type {boolean}
     * @memberof InscriptionData
     */
    unrecognizedEvenField?: boolean;
}
