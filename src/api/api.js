import axios from "axios";
import { baseURL, hasuraHeader } from "./appEnv";

const instance = axios.create({
    baseURL,
    timeout: 300000
});

const headers = {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': hasuraHeader,
};

const responseBody = (response) => response.data;

export const requests = {
    get: (url) => instance.get(url, { headers }).then(responseBody),
    post: (url, body) => instance.post(url, body, {
      headers: {
        ...headers,
      }
    }).then(responseBody),
};


export const Post = {
    getAllCollectors: () => requests.get(`collectors/get`),
    getCollectorByID: (id) => requests.get(`collector/${id}/getByID`),
    getCustomerSubscriptions: (custID) => requests.get(`customer/${custID}/subscriptions/get`),
    getCollectorRoutes: (id) => requests.get(`collector/${id}/routes`),

    addCollectionPoint: (data) => requests.post(`collector/points/add`, data),
    addRoute: (data) => requests.post(`collector/routes/add`, data),
    addCollector: (data) => requests.post(`collectors/add`, data),
    addRoutePoints: (data) => requests.post(`collectors/routes/points/add`, data),
    addCustomer: (data) => requests.post(`customers/add`, data),
    addLocation: (data) => requests.post(`location/add`, data),
    addSubscription: (data) => requests.post(`subscriptions/add`, data),
    addUser: (data) => requests.post(`users/add`, data),

    loginCustomer: (data) => requests.post(`customer/login`, data),
    loginCollector: (data) => requests.post(`collector/login`, data),

    deleteCollectorLocations: (data) => requests.post(`collector/locations/delete`, data)
}