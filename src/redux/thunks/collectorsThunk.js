import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../api/api";


export const addCollectorThunk = createAsyncThunk(
    'collectors/addNew',
    async (userDetails) => {
        try {
            const location_details = userDetails.location;
            delete userDetails.location;
            const resLoc = await Post.addLocation({ location: location_details});
            if(!resLoc.insert_Location_one){
                throw new Error()
            }
            const location_id = resLoc.insert_Location_one.location_id;
            const userToSend = {...userDetails, address: location_id};
            delete userToSend.location;
            delete userToSend.email;
            const resUser = await Post.addUser({user: userToSend});
            if(!resUser.insert_user_one){
                throw new Error()
            }
            const user = resUser.insert_user_one;
            const resCollector = await Post.addCollector({collector: {user_id: user.user_id}});
            if(!resCollector.insert_collector_one) throw new Error();
            const collector = resCollector.insert_collector_one;

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