import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../api/api";


export const addCustomerThunk = createAsyncThunk(
    'customers/addNew',
    async (customerDetails) => {
        try {
            const resCustomer = await Post.addCustomer({customer: customerDetails});
            if(!resCustomer.insert_customer_one) throw new Error();
            const customer = resCustomer.insert_customer_one.customer;

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
