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

import { RuneEntry } from './rune-entry';
 /**
 * 
 *
 * @export
 * @interface RuneListEntry
 */
export interface RuneListEntry {

    /**
     * The first element is the ID
     *
     * @type {string}
     * @memberof RuneListEntry
     */
    _0?: string;

    /**
     * The second element is the entry data
     *
     * @type {RuneEntry}
     * @memberof RuneListEntry
     */
    _1?: RuneEntry;
}