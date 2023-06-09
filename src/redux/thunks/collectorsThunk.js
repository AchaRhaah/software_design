import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../api/api";


export const addCollectorThunk = createAsyncThunk(
    'collectors/addNew',
    async (collectorDetails) => {
        try {
            const resCollector = await Post.addCollector({collector: collectorDetails});
            if(!resCollector.insert_collector_one) throw new Error();
            const collector = resCollector.insert_collector_one.collector;

            return collector;
        } catch {
            return { status: 400 }
        }
    }
)

export const addRoute = createAsyncThunk(
    'collectors/addRoute',
    async (routeDetails) => {
        try {  
            const collectionPoints = routeDetails.collectionPoints;
            const points = [];
            for(let point of collectionPoints){
                const id = (await Post.addCollectionPoint({point})).insert_collectionpoint_one.point_id;
                points.push(id);
            }

            const routeID = (await Post.addRoute({route: { collector_id: routeDetails.collector_id}})).insert_route_one.route_id;
            const response = Post.addRoutePoints({ routepoints: points.map((id) => ({point_id: id, route_id: routeID}))})

            return response.insert_routepoints;
        } catch {
            return { status: 400}
        }
    }
)

export const fetchCollectorByID = createAsyncThunk(
    'collectors/fetchByID',
    async (id) => {
        try {
            const { collectors } = await Post.getCollectorByID(id);
            if (!collectors.length) throw new Error('Not found');
            const collector = collectors[0];

            return collector;
        } catch {
            return {status: 400}
        }
    }
)

export const fetchAllCollectors = createAsyncThunk(
    'collectors/fetchAll',
    async () => {
        try {
            const { collectors } = await Post.getAllCollectors();

            return collectors
        } catch {
            return { status: 400 }
        }
    }
)

export const loginCollector = createAsyncThunk(
    'collectors/login',
    async (phone_number, password) => {
        try {
            const { collectors } = await Post.loginCollector({phone_number, password});
            if(!collectors.length) throw new Error('Incorrect Credentials');
            const collector = collectors[0];

            return collector;
        } catch {
            return { status: 400 }
        }
    }
)