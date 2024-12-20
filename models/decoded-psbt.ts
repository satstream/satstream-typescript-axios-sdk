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

import { DecodedPSBTInput } from './decoded-psbtinput';
import { DecodedPSBTOutput } from './decoded-psbtoutput';
import { RawTx1 } from './raw-tx1';
import { UnknownFields } from './unknown-fields';
 /**
 * 
 *
 * @export
 * @interface DecodedPSBT
 */
export interface DecodedPSBT {

    /**
     * The transaction fee paid if all UTXOs slots are filled
     *
     * @type {number}
     * @memberof DecodedPSBT
     */
    fee?: number;

    /**
     * Array of inputs
     *
     * @type {Array<DecodedPSBTInput>}
     * @memberof DecodedPSBT
     */
    inputs?: Array<DecodedPSBTInput>;

    /**
     * Array of outputs
     *
     * @type {Array<DecodedPSBTOutput>}
     * @memberof DecodedPSBT
     */
    outputs?: Array<DecodedPSBTOutput>;

    /**
     * The decoded network-serialized unsigned transaction
     *
     * @type {RawTx1}
     * @memberof DecodedPSBT
     */
    tx?: RawTx1;

    /**
     * The unknown global fields
     *
     * @type {UnknownFields}
     * @memberof DecodedPSBT
     */
    unknown?: UnknownFields;
}
