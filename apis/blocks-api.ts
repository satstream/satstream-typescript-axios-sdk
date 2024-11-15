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
import { GithubComSatstreamSsApiServerApiBlocksResponsesError } from '../models';
import { ResponsesGetBlockByHash } from '../models';
import { ResponsesGetBlockHeight } from '../models';
import { ResponsesGetBlockInfo } from '../models';
import { ResponsesGetBlockTransactions } from '../models';
/**
 * BlocksApi - axios parameter creator
 * @export
 */
export const BlocksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get information about a specific block by its hash
         * @summary Get block by hash
         * @param {string} hash Block hash
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBlockByHash: async (hash: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'hash' is not null or undefined
            if (hash === null || hash === undefined) {
                throw new RequiredError('hash','Required parameter hash was null or undefined when calling getBlockByHash.');
            }
            const localVarPath = `/blocks/hash/{hash}`
                .replace(`{${"hash"}}`, encodeURIComponent(String(hash)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
         * Get information about a specific block by height
         * @summary Get block info
         * @param {number} height Block height
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBlockInfo: async (height: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'height' is not null or undefined
            if (height === null || height === undefined) {
                throw new RequiredError('height','Required parameter height was null or undefined when calling getBlockInfo.');
            }
            const localVarPath = `/blocks/{height}`
                .replace(`{${"height"}}`, encodeURIComponent(String(height)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
         * Get transactions for a specific block height
         * @summary Get block transactions
         * @param {number} height Block height
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBlockTransactions: async (height: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'height' is not null or undefined
            if (height === null || height === undefined) {
                throw new RequiredError('height','Required parameter height was null or undefined when calling getBlockTransactions.');
            }
            const localVarPath = `/blocks/{height}/transactions`
                .replace(`{${"height"}}`, encodeURIComponent(String(height)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
         * Get the current block height of the Bitcoin blockchain
         * @summary Get current block height
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentBlockHeight: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/blocks/current-height`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
 * BlocksApi - functional programming interface
 * @export
 */
export const BlocksApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Get information about a specific block by its hash
         * @summary Get block by hash
         * @param {string} hash Block hash
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBlockByHash(hash: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ResponsesGetBlockByHash>>> {
            const localVarAxiosArgs = await BlocksApiAxiosParamCreator(configuration).getBlockByHash(hash, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about a specific block by height
         * @summary Get block info
         * @param {number} height Block height
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBlockInfo(height: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ResponsesGetBlockInfo>>> {
            const localVarAxiosArgs = await BlocksApiAxiosParamCreator(configuration).getBlockInfo(height, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get transactions for a specific block height
         * @summary Get block transactions
         * @param {number} height Block height
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBlockTransactions(height: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ResponsesGetBlockTransactions>>> {
            const localVarAxiosArgs = await BlocksApiAxiosParamCreator(configuration).getBlockTransactions(height, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get the current block height of the Bitcoin blockchain
         * @summary Get current block height
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCurrentBlockHeight(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ResponsesGetBlockHeight>>> {
            const localVarAxiosArgs = await BlocksApiAxiosParamCreator(configuration).getCurrentBlockHeight(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * BlocksApi - factory interface
 * @export
 */
export const BlocksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Get information about a specific block by its hash
         * @summary Get block by hash
         * @param {string} hash Block hash
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBlockByHash(hash: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ResponsesGetBlockByHash>> {
            return BlocksApiFp(configuration).getBlockByHash(hash, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information about a specific block by height
         * @summary Get block info
         * @param {number} height Block height
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBlockInfo(height: number, options?: AxiosRequestConfig): Promise<AxiosResponse<ResponsesGetBlockInfo>> {
            return BlocksApiFp(configuration).getBlockInfo(height, options).then((request) => request(axios, basePath));
        },
        /**
         * Get transactions for a specific block height
         * @summary Get block transactions
         * @param {number} height Block height
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBlockTransactions(height: number, options?: AxiosRequestConfig): Promise<AxiosResponse<ResponsesGetBlockTransactions>> {
            return BlocksApiFp(configuration).getBlockTransactions(height, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the current block height of the Bitcoin blockchain
         * @summary Get current block height
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCurrentBlockHeight(options?: AxiosRequestConfig): Promise<AxiosResponse<ResponsesGetBlockHeight>> {
            return BlocksApiFp(configuration).getCurrentBlockHeight(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BlocksApi - object-oriented interface
 * @export
 * @class BlocksApi
 * @extends {BaseAPI}
 */
export class BlocksApi extends BaseAPI {
    /**
     * Get information about a specific block by its hash
     * @summary Get block by hash
     * @param {string} hash Block hash
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlocksApi
     */
    public async getBlockByHash(hash: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ResponsesGetBlockByHash>> {
        return BlocksApiFp(this.configuration).getBlockByHash(hash, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get information about a specific block by height
     * @summary Get block info
     * @param {number} height Block height
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlocksApi
     */
    public async getBlockInfo(height: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<ResponsesGetBlockInfo>> {
        return BlocksApiFp(this.configuration).getBlockInfo(height, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get transactions for a specific block height
     * @summary Get block transactions
     * @param {number} height Block height
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlocksApi
     */
    public async getBlockTransactions(height: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<ResponsesGetBlockTransactions>> {
        return BlocksApiFp(this.configuration).getBlockTransactions(height, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get the current block height of the Bitcoin blockchain
     * @summary Get current block height
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlocksApi
     */
    public async getCurrentBlockHeight(options?: AxiosRequestConfig) : Promise<AxiosResponse<ResponsesGetBlockHeight>> {
        return BlocksApiFp(this.configuration).getCurrentBlockHeight(options).then((request) => request(this.axios, this.basePath));
    }
}
