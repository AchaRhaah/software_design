import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../api/api";


export const addCustomerThunk = createAsyncThunk(
    'customers/addNew',
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

            const resCustomer = await Post.addCustomer({customer: {user_id: user.user_id}});
            if(!resCustomer.insert_customer_one) throw new Error();
            const customer = resCustomer.insert_customer_one;

            return customer;
        } catch {
            return { status: 400 }
        }
    }
)

export const subscribeToCollector = createAsyncThunk(
    'customers/subscribe',
    async (subDetails) => {
        try {  
            const resSub = await Post.addSubscription(subDetails);
            if(!resSub.insert_subscription_one) throw new Error('Subscription Failed')

            return resSub.insert_subscription_one.subscription_id
        } catch {
            return { status: 400}
        }
    }
)

export const fetchCustomerSubscriptions = createAsyncThunk(
    'customers/fetchSubscriptions',
    async (id) => {
        try {  
            const { subscriptions } = await Post.getCustomerSubscriptions(id);
            
            return subscriptions;
        } catch {
            return { status: 400}
        }
    }
)

export const loginCustomer = createAsyncThunk(
    'customers/login',
    async (phone_number, password) => {
        try {
            const { customers } = await Post.loginCustomer({phone_number, password});
            if(!customers.length) throw new Error('Incorrect Credentials');
            const customer = customers[0];

            return customer;
        } catch {
            return { status: 400 }
        }
    }
)
