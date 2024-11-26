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
import { InlineResponse20033 } from '../models';
import { UtilsResponseEnvelope } from '../models';
/**
 * StatusApi - axios parameter creator
 * @export
 */
export const StatusApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve information about the server installation and index
         * @summary Get server status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStatus: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/status`;
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
 * StatusApi - functional programming interface
 * @export
 */
export const StatusApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieve information about the server installation and index
         * @summary Get server status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatus(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20033>>> {
            const localVarAxiosArgs = await StatusApiAxiosParamCreator(configuration).getStatus(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * StatusApi - factory interface
 * @export
 */
export const StatusApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieve information about the server installation and index
         * @summary Get server status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatus(options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20033>> {
            return StatusApiFp(configuration).getStatus(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StatusApi - object-oriented interface
 * @export
 * @class StatusApi
 * @extends {BaseAPI}
 */
export class StatusApi extends BaseAPI {
    /**
     * Retrieve information about the server installation and index
     * @summary Get server status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatusApi
     */
    public async getStatus(options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20033>> {
        return StatusApiFp(this.configuration).getStatus(options).then((request) => request(this.axios, this.basePath));
    }
}