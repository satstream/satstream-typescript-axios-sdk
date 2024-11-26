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
import { InlineResponse2002 } from '../models';
import { InlineResponse20026 } from '../models';
import { UtilsResponseEnvelope } from '../models';
/**
 * OutputsApi - axios parameter creator
 * @export
 */
export const OutputsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve information about a specific UTXO using outpoint string
         * @summary Get output info by outpoint
         * @param {string} outpoint Outpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOutputByOutpoint: async (outpoint: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'outpoint' is not null or undefined
            if (outpoint === null || outpoint === undefined) {
                throw new RequiredError('outpoint','Required parameter outpoint was null or undefined when calling getOutputByOutpoint.');
            }
            const localVarPath = `/output/{outpoint}`
                .replace(`{${"outpoint"}}`, encodeURIComponent(String(outpoint)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKeyAuth required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-API-KEY")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-API-KEY"] = localVarApiKeyValue;
            }

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

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieve information about multiple UTXOs
         * @summary Get multiple outputs
         * @param {Array<string>} body Outpoints
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOutputs: async (body: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling getOutputs.');
            }
            const localVarPath = `/outputs`;
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
 * OutputsApi - functional programming interface
 * @export
 */
export const OutputsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieve information about a specific UTXO using outpoint string
         * @summary Get output info by outpoint
         * @param {string} outpoint Outpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOutputByOutpoint(outpoint: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20026>>> {
            const localVarAxiosArgs = await OutputsApiAxiosParamCreator(configuration).getOutputByOutpoint(outpoint, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve information about multiple UTXOs
         * @summary Get multiple outputs
         * @param {Array<string>} body Outpoints
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOutputs(body: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse2002>>> {
            const localVarAxiosArgs = await OutputsApiAxiosParamCreator(configuration).getOutputs(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * OutputsApi - factory interface
 * @export
 */
export const OutputsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieve information about a specific UTXO using outpoint string
         * @summary Get output info by outpoint
         * @param {string} outpoint Outpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOutputByOutpoint(outpoint: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20026>> {
            return OutputsApiFp(configuration).getOutputByOutpoint(outpoint, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve information about multiple UTXOs
         * @summary Get multiple outputs
         * @param {Array<string>} body Outpoints
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOutputs(body: Array<string>, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse2002>> {
            return OutputsApiFp(configuration).getOutputs(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OutputsApi - object-oriented interface
 * @export
 * @class OutputsApi
 * @extends {BaseAPI}
 */
export class OutputsApi extends BaseAPI {
    /**
     * Retrieve information about a specific UTXO using outpoint string
     * @summary Get output info by outpoint
     * @param {string} outpoint Outpoint
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutputsApi
     */
    public async getOutputByOutpoint(outpoint: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20026>> {
        return OutputsApiFp(this.configuration).getOutputByOutpoint(outpoint, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve information about multiple UTXOs
     * @summary Get multiple outputs
     * @param {Array<string>} body Outpoints
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutputsApi
     */
    public async getOutputs(body: Array<string>, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse2002>> {
        return OutputsApiFp(this.configuration).getOutputs(body, options).then((request) => request(this.axios, this.basePath));
    }
}