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
import { FetchInscriptionsResponse } from '../models';
import { GetBlockInscriptionsResponse } from '../models';
import { GetInscriptionChildResponse } from '../models';
import { GetInscriptionResponse } from '../models';
import { GetLatestInscriptionsResponse } from '../models';
import { UtilsResponseEnvelope } from '../models';
/**
 * InscriptionsApi - axios parameter creator
 * @export
 */
export const InscriptionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve information about a specific child of an inscription
         * @summary Get inscription child info
         * @param {string} inscriptionId Inscription ID
         * @param {number} childIndex Child Index
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchInscriptionChild: async (inscriptionId: string, childIndex: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'inscriptionId' is not null or undefined
            if (inscriptionId === null || inscriptionId === undefined) {
                throw new RequiredError('inscriptionId','Required parameter inscriptionId was null or undefined when calling fetchInscriptionChild.');
            }
            // verify required parameter 'childIndex' is not null or undefined
            if (childIndex === null || childIndex === undefined) {
                throw new RequiredError('childIndex','Required parameter childIndex was null or undefined when calling fetchInscriptionChild.');
            }
            const localVarPath = `/inscription/{inscription_id}/{child_index}`
                .replace(`{${"inscription_id"}}`, encodeURIComponent(String(inscriptionId)))
                .replace(`{${"child_index"}}`, encodeURIComponent(String(childIndex)));
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
         * Retrieve information about multiple inscriptions
         * @summary Fetch multiple inscriptions
         * @param {Array<string>} body Inscription IDs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        fetchInscriptions: async (body: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling fetchInscriptions.');
            }
            const localVarPath = `/inscriptions`;
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
        /**
         * Retrieve all inscriptions in a specific block
         * @summary Get inscriptions in a specific block
         * @param {number} blockHeight Block Height
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBlockInscriptions: async (blockHeight: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'blockHeight' is not null or undefined
            if (blockHeight === null || blockHeight === undefined) {
                throw new RequiredError('blockHeight','Required parameter blockHeight was null or undefined when calling getBlockInscriptions.');
            }
            const localVarPath = `/inscriptions/block/{block_height}`
                .replace(`{${"block_height"}}`, encodeURIComponent(String(blockHeight)));
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
         * Retrieve paginated inscriptions in a specific block
         * @summary Get paginated inscriptions in a specific block
         * @param {number} blockHeight Block Height
         * @param {number} page Page Number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBlockInscriptionsPage: async (blockHeight: number, page: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'blockHeight' is not null or undefined
            if (blockHeight === null || blockHeight === undefined) {
                throw new RequiredError('blockHeight','Required parameter blockHeight was null or undefined when calling getBlockInscriptionsPage.');
            }
            // verify required parameter 'page' is not null or undefined
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling getBlockInscriptionsPage.');
            }
            const localVarPath = `/inscriptions/block/{block_height}/{page}`
                .replace(`{${"block_height"}}`, encodeURIComponent(String(blockHeight)))
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
         * Get information about a specific inscription
         * @summary Get inscription info
         * @param {string} inscriptionId Inscription ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInscription: async (inscriptionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'inscriptionId' is not null or undefined
            if (inscriptionId === null || inscriptionId === undefined) {
                throw new RequiredError('inscriptionId','Required parameter inscriptionId was null or undefined when calling getInscription.');
            }
            const localVarPath = `/inscription/{inscription_id}`
                .replace(`{${"inscription_id"}}`, encodeURIComponent(String(inscriptionId)));
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
         * Retrieve the latest 100 inscriptions (first page)
         * @summary Get latest inscriptions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLatestInscriptions: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/inscriptions`;
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
         * Retrieve a specific page of 100 inscriptions
         * @summary Get latest inscriptions page
         * @param {number} page Page number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLatestInscriptionsPage: async (page: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'page' is not null or undefined
            if (page === null || page === undefined) {
                throw new RequiredError('page','Required parameter page was null or undefined when calling getLatestInscriptionsPage.');
            }
            const localVarPath = `/inscriptions/{page}`
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
    }
};

/**
 * InscriptionsApi - functional programming interface
 * @export
 */
export const InscriptionsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieve information about a specific child of an inscription
         * @summary Get inscription child info
         * @param {string} inscriptionId Inscription ID
         * @param {number} childIndex Child Index
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchInscriptionChild(inscriptionId: string, childIndex: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GetInscriptionChildResponse>>> {
            const localVarAxiosArgs = await InscriptionsApiAxiosParamCreator(configuration).fetchInscriptionChild(inscriptionId, childIndex, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve information about multiple inscriptions
         * @summary Fetch multiple inscriptions
         * @param {Array<string>} body Inscription IDs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchInscriptions(body: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<FetchInscriptionsResponse>>> {
            const localVarAxiosArgs = await InscriptionsApiAxiosParamCreator(configuration).fetchInscriptions(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve all inscriptions in a specific block
         * @summary Get inscriptions in a specific block
         * @param {number} blockHeight Block Height
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBlockInscriptions(blockHeight: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GetBlockInscriptionsResponse>>> {
            const localVarAxiosArgs = await InscriptionsApiAxiosParamCreator(configuration).getBlockInscriptions(blockHeight, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve paginated inscriptions in a specific block
         * @summary Get paginated inscriptions in a specific block
         * @param {number} blockHeight Block Height
         * @param {number} page Page Number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBlockInscriptionsPage(blockHeight: number, page: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GetBlockInscriptionsResponse>>> {
            const localVarAxiosArgs = await InscriptionsApiAxiosParamCreator(configuration).getBlockInscriptionsPage(blockHeight, page, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about a specific inscription
         * @summary Get inscription info
         * @param {string} inscriptionId Inscription ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInscription(inscriptionId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GetInscriptionResponse>>> {
            const localVarAxiosArgs = await InscriptionsApiAxiosParamCreator(configuration).getInscription(inscriptionId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve the latest 100 inscriptions (first page)
         * @summary Get latest inscriptions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLatestInscriptions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GetLatestInscriptionsResponse>>> {
            const localVarAxiosArgs = await InscriptionsApiAxiosParamCreator(configuration).getLatestInscriptions(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieve a specific page of 100 inscriptions
         * @summary Get latest inscriptions page
         * @param {number} page Page number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLatestInscriptionsPage(page: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<GetLatestInscriptionsResponse>>> {
            const localVarAxiosArgs = await InscriptionsApiAxiosParamCreator(configuration).getLatestInscriptionsPage(page, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * InscriptionsApi - factory interface
 * @export
 */
export const InscriptionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieve information about a specific child of an inscription
         * @summary Get inscription child info
         * @param {string} inscriptionId Inscription ID
         * @param {number} childIndex Child Index
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchInscriptionChild(inscriptionId: string, childIndex: number, options?: AxiosRequestConfig): Promise<AxiosResponse<GetInscriptionChildResponse>> {
            return InscriptionsApiFp(configuration).fetchInscriptionChild(inscriptionId, childIndex, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve information about multiple inscriptions
         * @summary Fetch multiple inscriptions
         * @param {Array<string>} body Inscription IDs
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async fetchInscriptions(body: Array<string>, options?: AxiosRequestConfig): Promise<AxiosResponse<FetchInscriptionsResponse>> {
            return InscriptionsApiFp(configuration).fetchInscriptions(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve all inscriptions in a specific block
         * @summary Get inscriptions in a specific block
         * @param {number} blockHeight Block Height
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBlockInscriptions(blockHeight: number, options?: AxiosRequestConfig): Promise<AxiosResponse<GetBlockInscriptionsResponse>> {
            return InscriptionsApiFp(configuration).getBlockInscriptions(blockHeight, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve paginated inscriptions in a specific block
         * @summary Get paginated inscriptions in a specific block
         * @param {number} blockHeight Block Height
         * @param {number} page Page Number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBlockInscriptionsPage(blockHeight: number, page: number, options?: AxiosRequestConfig): Promise<AxiosResponse<GetBlockInscriptionsResponse>> {
            return InscriptionsApiFp(configuration).getBlockInscriptionsPage(blockHeight, page, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information about a specific inscription
         * @summary Get inscription info
         * @param {string} inscriptionId Inscription ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInscription(inscriptionId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<GetInscriptionResponse>> {
            return InscriptionsApiFp(configuration).getInscription(inscriptionId, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve the latest 100 inscriptions (first page)
         * @summary Get latest inscriptions
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLatestInscriptions(options?: AxiosRequestConfig): Promise<AxiosResponse<GetLatestInscriptionsResponse>> {
            return InscriptionsApiFp(configuration).getLatestInscriptions(options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieve a specific page of 100 inscriptions
         * @summary Get latest inscriptions page
         * @param {number} page Page number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLatestInscriptionsPage(page: number, options?: AxiosRequestConfig): Promise<AxiosResponse<GetLatestInscriptionsResponse>> {
            return InscriptionsApiFp(configuration).getLatestInscriptionsPage(page, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * InscriptionsApi - object-oriented interface
 * @export
 * @class InscriptionsApi
 * @extends {BaseAPI}
 */
export class InscriptionsApi extends BaseAPI {
    /**
     * Retrieve information about a specific child of an inscription
     * @summary Get inscription child info
     * @param {string} inscriptionId Inscription ID
     * @param {number} childIndex Child Index
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InscriptionsApi
     */
    public async fetchInscriptionChild(inscriptionId: string, childIndex: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<GetInscriptionChildResponse>> {
        return InscriptionsApiFp(this.configuration).fetchInscriptionChild(inscriptionId, childIndex, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve information about multiple inscriptions
     * @summary Fetch multiple inscriptions
     * @param {Array<string>} body Inscription IDs
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InscriptionsApi
     */
    public async fetchInscriptions(body: Array<string>, options?: AxiosRequestConfig) : Promise<AxiosResponse<FetchInscriptionsResponse>> {
        return InscriptionsApiFp(this.configuration).fetchInscriptions(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve all inscriptions in a specific block
     * @summary Get inscriptions in a specific block
     * @param {number} blockHeight Block Height
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InscriptionsApi
     */
    public async getBlockInscriptions(blockHeight: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<GetBlockInscriptionsResponse>> {
        return InscriptionsApiFp(this.configuration).getBlockInscriptions(blockHeight, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve paginated inscriptions in a specific block
     * @summary Get paginated inscriptions in a specific block
     * @param {number} blockHeight Block Height
     * @param {number} page Page Number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InscriptionsApi
     */
    public async getBlockInscriptionsPage(blockHeight: number, page: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<GetBlockInscriptionsResponse>> {
        return InscriptionsApiFp(this.configuration).getBlockInscriptionsPage(blockHeight, page, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get information about a specific inscription
     * @summary Get inscription info
     * @param {string} inscriptionId Inscription ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InscriptionsApi
     */
    public async getInscription(inscriptionId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<GetInscriptionResponse>> {
        return InscriptionsApiFp(this.configuration).getInscription(inscriptionId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve the latest 100 inscriptions (first page)
     * @summary Get latest inscriptions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InscriptionsApi
     */
    public async getLatestInscriptions(options?: AxiosRequestConfig) : Promise<AxiosResponse<GetLatestInscriptionsResponse>> {
        return InscriptionsApiFp(this.configuration).getLatestInscriptions(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieve a specific page of 100 inscriptions
     * @summary Get latest inscriptions page
     * @param {number} page Page number
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InscriptionsApi
     */
    public async getLatestInscriptionsPage(page: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<GetLatestInscriptionsResponse>> {
        return InscriptionsApiFp(this.configuration).getLatestInscriptionsPage(page, options).then((request) => request(this.axios, this.basePath));
    }
}
