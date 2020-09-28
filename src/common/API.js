import queryString from 'query-string';
import axios from 'axios';
import { APIErrors } from './Constants';
// import languageObject from '../translations/messages';

axios.defaults.baseURL = process.env.REACT_APP_API_URL_BASE;
const handleReponseSuccess = (response) => new Promise((resolve) => resolve(response.data));

const handleErrors = (response) => new Promise((resolve, reject) => {
    switch (response.status) {
        case 400:
            return reject(handleBadRequestError(response.data));
        case 401:
            return reject(API.specifyError(
                APIErrors.authExpired,
                // languageObject.ja['apiErrors.auth'],
            ));
        case 403:
            return reject(API.specifyError(
                APIErrors.permissionDenied,
                // languageObject.ja['apiErrors.permissionDenied'],
            ));
        case 404:
        case 500:
            return reject(API.specifyError(
                APIErrors.server,
                // languageObject.ja['apiErrors.default'],
            ));
        case 503:
            return reject(API.specifyError(
                APIErrors.maitenance,
                // languageObject.ja['apiErrors.default'],
            ));
        default:
            return reject(API.specifyError(
                APIErrors.server,
                // languageObject.ja['apiErrors.default'],
            ));
    }
});

const handleBadRequestError = (parsedJson) => {
    let resolveObject = {
        code: APIErrors.badRequest,
    };
    Object.keys(parsedJson.detail_msg).forEach((key) => {
        resolveObject = {
            ...resolveObject,
            [key]: {
                result: 'error',
                message: parsedJson.detail_msg[key][0],
            },
        };
    });
    return {
        errors: {
            ...resolveObject,
        },
    };
};

const API = {

    /**
     * Login
     */
    login: async ({ endpoint, body }) => {
        let response;
        try {
            response = await axios({
                method: 'POST',
                url: endpoint,
                headers: API.buildHeaderWithoutToken(),
                data: JSON.stringify({ ...body }),
            });
            return handleReponseSuccess(response);
        } catch (error) {
            return handleErrors(error.response);
        }
    },

    /**
     * POST method
     */
    post: async ({ endpoint, body, token = '' }) => {
        let response;
        try {
            response = await axios({
                method: 'POST',
                url: endpoint,
                headers: API.buildHeader(token),
                data: JSON.stringify({ ...body }),
            });
            return handleReponseSuccess(response);
        } catch (error) {
            return handleErrors(error.response);
        }
    },

    /**
     * POST with file
     */
    postWithFile: async ({
        endpoint, body, token = '', onProgress,
    }) => {
        const formData = new FormData();
        Object.keys(body).forEach((key) => {
            formData.append(key, body[key]);
        });
        let response;
        try {
            response = await axios({
                method: 'POST',
                url: endpoint,
                headers: API.buildHeaderWithFile(token),
                data: formData,
                onUploadProgress: onProgress,
            });
            return handleReponseSuccess(response);
        } catch (error) {
            return handleErrors(error.response);
        }
    },

    /**
     * PUT method
     */
    put: async ({ endpoint, body, token = '' }) => {
        let response;
        try {
            response = await axios({
                method: 'PUT',
                url: endpoint,
                headers: API.buildHeader(token),
                data: JSON.stringify({ ...body }),
            });
            return handleReponseSuccess(response);
        } catch (error) {
            return handleErrors(error.response);
        }
    },

    /**
     * PUT with file method
     */
    putWithFile: async ({
        endpoint, body, token = '', onProgress,
    }) => {
        let response;
        const formData = new FormData();
        Object.keys(body).forEach((key) => {
            formData.append(key, body[key]);
        });
        try {
            response = await axios({
                method: 'PUT',
                url: endpoint,
                headers: API.buildHeaderWithFile(token),
                data: formData,
                onUploadProgress: onProgress,
            });
            return handleReponseSuccess(response);
        } catch (error) {
            return handleErrors(error.response);
        }
    },

    /**
     * DELETE method
     */
    delete: async ({ endpoint, token = '' }) => {
        let response;

        try {
            response = await axios({
                method: 'DELETE',
                url: endpoint,
                headers: API.buildHeader(token),
            });
            return handleReponseSuccess(response);
        } catch (error) {
            return handleErrors(error.response);
        }
    },

    /**
     * GET method
     */
    get: async ({ endpoint, body, token = '' }) => {
        let response;
        const query = queryString.stringify(body, { arrayFormat: 'comma' });
        let apiUrl = endpoint;

        if (query) {
            apiUrl = `${endpoint}?${query}`;
        }

        try {
            response = await axios({
                method: 'GET',
                url: apiUrl,
                headers: API.buildHeader(token),
            });
            return handleReponseSuccess(response);
        } catch (error) {
            return handleErrors(error.response);
        }
    },

    /**
     * POST header without token
     */
    buildHeaderWithoutToken: () => ({ 'content-type': 'application/json; utf-8' }),

    /**
     * POST PUT GET header
     * @requstToken api token
     */
    buildHeader: (token) => {
        const headers = { 'content-Type': 'application/json; utf-8' };
        if (token) {
            return { ...headers, Authorization: `Bearer ${token}` };
        }
        return headers;
    },

    /**
     * POST header with file
     * @requstToken api token
     */
    buildHeaderWithFile: (token) => {
        const headers = { 'content-type': 'multipart/form-data' };
        if (token) {
            return { ...headers, Authorization: `Bearer ${token}` };
        }
        return headers;
    },

    /**
     * GET no token header
     */
    buildGetHeader: () => ({ 'content-type': 'text/plain; utf-8' }),

    /**
     * @code string
     * @msg string
     */
    specifyError: (code, message) => ({
        errors: {
            code,
            message,
        },
    }),
};

export default API;
