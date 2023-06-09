import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./reducers/usersReducer";
import collectorsReducer from "./reducers/collectorsReducer";
import customerReducer from "./reducers/customerReducer";
import loaderReducer from "./reducers/loaderReducer";

export const store = configureStore({
	reducer: {
		getUser: userReducer,
		getCollectors: collectorsReducer,
		getCustomers: customerReducer,
		getLoader: loaderReducer,
	},
});
