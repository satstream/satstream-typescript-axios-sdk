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

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { InlineResponse20032 } from '../models';
import { RequestsDecodeScriptRequest } from '../models';
import { UtilsResponseEnvelope } from '../models';
/**
 * ScriptsApi - axios parameter creator
 * @export
 */
export const ScriptsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Decode a hex-encoded script and return detailed information about it.
         * @summary Decode Script
         * @param {RequestsDecodeScriptRequest} body Script to decode
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        decodeScript: async (body: RequestsDecodeScriptRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling decodeScript.');
            }
            const localVarPath = `/script/decode`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-KEY")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-KEY"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ScriptsApi - functional programming interface
 * @export
 */
export const ScriptsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Decode a hex-encoded script and return detailed information about it.
         * @summary Decode Script
         * @param {RequestsDecodeScriptRequest} body Script to decode
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async decodeScript(body: RequestsDecodeScriptRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20032>>> {
            const localVarAxiosArgs = await ScriptsApiAxiosParamCreator(configuration).decodeScript(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ScriptsApi - factory interface
 * @export
 */
export const ScriptsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Decode a hex-encoded script and return detailed information about it.
         * @summary Decode Script
         * @param {RequestsDecodeScriptRequest} body Script to decode
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async decodeScript(body: RequestsDecodeScriptRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20032>> {
            return ScriptsApiFp(configuration).decodeScript(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ScriptsApi - object-oriented interface
 * @export
 * @class ScriptsApi
 * @extends {BaseAPI}
 */
export class ScriptsApi extends BaseAPI {
    /**
     * Decode a hex-encoded script and return detailed information about it.
     * @summary Decode Script
     * @param {RequestsDecodeScriptRequest} body Script to decode
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScriptsApi
     */
    public async decodeScript(body: RequestsDecodeScriptRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20032>> {
        return ScriptsApiFp(this.configuration).decodeScript(body, options).then((request) => request(this.axios, this.basePath));
    }
}
