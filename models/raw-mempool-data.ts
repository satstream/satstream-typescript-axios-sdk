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

import { MempoolEntry } from './mempool-entry';
import { MempoolSequence } from './mempool-sequence';
 /**
 * 
 *
 * @export
 * @interface RawMempoolData
 */
export interface RawMempoolData {

    /**
     * Only if verbose is true
     *
     * @type {{ [key: string]: MempoolEntry; }}
     * @memberof RawMempoolData
     */
    detailed?: { [key: string]: MempoolEntry; };

    /**
     * Only if mempool_sequence is true
     *
     * @type {MempoolSequence}
     * @memberof RawMempoolData
     */
    sequence?: MempoolSequence;

    /**
     * Only if verbose is false
     *
     * @type {Array<string>}
     * @memberof RawMempoolData
     */
    txids?: Array<string>;
}