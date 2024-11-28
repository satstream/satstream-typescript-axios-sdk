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
import { GetLatestRunesResponse } from '../models';
import { GetRuneResponse } from '../models';
import { UtilsResponseEnvelope } from '../models';
/**
 * RunesApi - axios parameter creator
 * @export
 */
export const RunesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve information about the last 100 inscribed runes (first page)
         * @summary Get latest runes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLatestRunes: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/runes`;
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
         * Retrieve a specific page of 100 inscribed runes
         * @summary Get latest runes page
         * @param {number} page Page number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLatestRunesPage: async (page: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'page' is not null or undefined
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling getLatestRunesPage.');
            }
            const localVarPath = `/runes/{page}`
                .replace(`{${"page"}}`, encodeURIComponent(String(page)));
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
         * Retrieve information about a specific rune by name or ID (e.g., \"UNCOMMON•GOODS\" or \"1:0\")
         * @summary Get rune info
         * @param {string} identifier Rune Name or ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRune: async (identifier: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling getRune.');
            }
            const localVarPath = `/rune/{identifier}`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)));
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
    }
};

/**
 * RunesApi - functional programming interface
 * @export
 */
export const RunesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieve information about the last 100 inscribed runes (first page)
         * @summary Get latest runes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLatestRunes(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GetLatestRunesResponse>>> {
            const localVarAxiosArgs = await RunesApiAxiosParamCreator(configuration).getLatestRunes(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve a specific page of 100 inscribed runes
         * @summary Get latest runes page
         * @param {number} page Page number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLatestRunesPage(page: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GetLatestRunesResponse>>> {
            const localVarAxiosArgs = await RunesApiAxiosParamCreator(configuration).getLatestRunesPage(page, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve information about a specific rune by name or ID (e.g., \"UNCOMMON•GOODS\" or \"1:0\")
         * @summary Get rune info
         * @param {string} identifier Rune Name or ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRune(identifier: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GetRuneResponse>>> {
            const localVarAxiosArgs = await RunesApiAxiosParamCreator(configuration).getRune(identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RunesApi - factory interface
 * @export
 */
export const RunesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieve information about the last 100 inscribed runes (first page)
         * @summary Get latest runes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLatestRunes(options?: AxiosRequestConfig): Promise<AxiosResponse<GetLatestRunesResponse>> {
            return RunesApiFp(configuration).getLatestRunes(options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a specific page of 100 inscribed runes
         * @summary Get latest runes page
         * @param {number} page Page number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLatestRunesPage(page: number, options?: AxiosRequestConfig): Promise<AxiosResponse<GetLatestRunesResponse>> {
            return RunesApiFp(configuration).getLatestRunesPage(page, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve information about a specific rune by name or ID (e.g., \"UNCOMMON•GOODS\" or \"1:0\")
         * @summary Get rune info
         * @param {string} identifier Rune Name or ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRune(identifier: string, options?: AxiosRequestConfig): Promise<AxiosResponse<GetRuneResponse>> {
            return RunesApiFp(configuration).getRune(identifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RunesApi - object-oriented interface
 * @export
 * @class RunesApi
 * @extends {BaseAPI}
 */
export class RunesApi extends BaseAPI {
    /**
     * Retrieve information about the last 100 inscribed runes (first page)
     * @summary Get latest runes
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunesApi
     */
    public async getLatestRunes(options?: AxiosRequestConfig) : Promise<AxiosResponse<GetLatestRunesResponse>> {
        return RunesApiFp(this.configuration).getLatestRunes(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve a specific page of 100 inscribed runes
     * @summary Get latest runes page
     * @param {number} page Page number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunesApi
     */
    public async getLatestRunesPage(page: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<GetLatestRunesResponse>> {
        return RunesApiFp(this.configuration).getLatestRunesPage(page, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve information about a specific rune by name or ID (e.g., \"UNCOMMON•GOODS\" or \"1:0\")
     * @summary Get rune info
     * @param {string} identifier Rune Name or ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RunesApi
     */
    public async getRune(identifier: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<GetRuneResponse>> {
        return RunesApiFp(this.configuration).getRune(identifier, options).then((request) => request(this.axios, this.basePath));
    }
}
