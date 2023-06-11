import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../../api/api";

export const addCollectorThunk = createAsyncThunk(
  "collectors/addNew",
  async (userDetails) => {
    try {
      const location_details = userDetails.location;
      delete userDetails.location;
      const resLoc = await Post.addLocation({ location: location_details });
      if (!resLoc.insert_Location_one) {
        throw new Error();
      }
      const location_id = resLoc.insert_Location_one.location_id;
      const userToSend = { ...userDetails, address: location_id };
      delete userToSend.location;
      delete userToSend.email;
      const resUser = await Post.addUser({ user: userToSend });
      if (!resUser.insert_user_one) {
        throw new Error();
      }
      const user = resUser.insert_user_one;
      const resCollector = await Post.addCollector({
        collector: { user_id: user.user_id },
      });
      if (!resCollector.insert_collector_one) throw new Error();
      const collector = resCollector.insert_collector_one;

      return collector;
    } catch {
      return { status: 400 };
    }
  }
);

export const addRoute = createAsyncThunk(
  "collectors/addRoute",
  async ({ routes, collector_id, deletedPoints, route_ids }) => {
    try {
      for (let day in routes) {
        const route = routes[day];
        const point_ids = [];
        let route_id = route_ids[day];
        if (!route_id) {
          const resRoute = await Post.addRoute({
            route: { collector_id, day },
          });
          if (!resRoute.insert_route_one) throw new Error();
          route_id = resRoute.insert_route_one.route_id;
        }
        for (let routepoint of route) {
          if (!routepoint.point_id) {
            const location_details = {
              name: routepoint.collectionpoint.Location.name,
            };
            const resLoc = await Post.addLocation({
              location: location_details,
            });
            if (!resLoc.insert_Location_one) {
              throw new Error();
            }

            const location_id = resLoc.insert_Location_one.location_id;
            const resColPoint = await Post.addCollectionPoint({
              point: { location_id, collector_id },
            });
            if (!resColPoint.insert_collectionpoint_one) throw new Error();
            const point_id = resColPoint.insert_collectionpoint_one.point_id;
            point_ids.push(point_id);
          }
        }
        if(point_ids.length > 0){
            const pointsToSend = point_ids.map((pid) => ({
                point_id: pid,
                route_id,
              }));
              const resRoutePoints = await Post.addRoutePoints({
                routepoints: pointsToSend,
              });
              if (!resRoutePoints.insert_routepoints) throw new Error();
        }
    }
    if (deletedPoints?.length > 0) {
      await Post.deleteCollectorLocations({ locationIDs: deletedPoints });
    }
    } catch {
      return { status: 400 };
    }
  }
);

export const fetchCollectorByID = createAsyncThunk(
  "collectors/fetchByID",
  async (id) => {
    try {
      const { collectors } = await Post.getCollectorByID(id);
      if (!collectors.length) throw new Error("Not found");
      const collector = collectors[0];

      return collector;
    } catch {
      return { status: 400 };
    }
  }
);

export const fetchCollectorRoutes = createAsyncThunk(
  "collectors/fetchRoutes",
  async (id) => {
    try {
      const { route } = await Post.getCollectorRoutes(id);
      let routes = [...Array(7)].map(() => []);
      let route_ids = [];
      route.forEach((obj) => {
        routes[obj.day] = [...(routes[obj.day] || []), ...(obj.routepoints || [])];
        route_ids[obj.day] = obj.route_id || null;
      });

      return {routes, route_ids};
    } catch {
      return { status: 400 };
    }
  }
);

export const fetchAllCollectors = createAsyncThunk(
  "collectors/fetchAll",
  async () => {
    try {
      const { collector } = await Post.getAllCollectors();

      return collector;
    } catch {
      return { status: 400 };
    }
  }
);

export const loginCollector = createAsyncThunk(
  "collectors/login",
  async ({ phone_number, password }) => {
    try {
      const { collector } = await Post.loginCollector({
        phone_number,
        password,
      });
      if (!collector.length) throw new Error("Incorrect Credentials");
      const fcollector = collector[0];

      return fcollector;
    } catch {
      return { status: 400 };
    }
  }
);
