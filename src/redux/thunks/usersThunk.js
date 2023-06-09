import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../api/api";


export const addUserThunk = createAsyncThunk(
    'users/addNew',
    async (userDetails) => {
        try {
            const location_details = userDetails.location;
            const resLoc = await Post.addLocation({ location: location_details});
            if(!resLoc.insert_Location_one){
                throw new Error()
            }
            const location_id = resLoc.insert_Location_one.location_id;
            const userToSend = {...userDetails, address: location_id};
            delete userToSend.location;
            const resUser = await Post.addUser({user: userToSend});
            if(!resUser.insert_user_one){
                throw new Error()
            }
            const user = resUser.insert_user_one.user;

            return user;
        } catch {
            return { status: 400 }
        }
    }
)