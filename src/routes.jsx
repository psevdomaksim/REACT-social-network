import {
    DIALOGS_ROUTE,
    FRIENDS_ROUTE,
    FRIEND_REQUESTS_ROUTE,
    LOGIN_ROUTE, 
    PROFILE_ROUTE, 
    REGISTRATION_ROUTE,
    USERS_ROUTE,
} from './utils/routes_consts';

import Profile from "./pages/ProfilePage"
import Dialogs from "./pages/Dialogs"
import DialogPage from "./pages/DialogPage"
import UserPage from "./pages/UsersPage"
import FriendsPage from "./pages/FriendsPage"
import FriendRequestsPage from "./pages/FriendRequestsPage"
import Auth from './pages/Auth';

export const authRoutes = [
    {
        path: PROFILE_ROUTE + '/:id',
        Component: Profile
    },
    {
        path: DIALOGS_ROUTE,
        Component: Dialogs
    },
    {
        path: DIALOGS_ROUTE + '/:id',
        Component: DialogPage
    },

    {
        path: USERS_ROUTE,
        Component: UserPage
    },

    {
        path: FRIENDS_ROUTE + '/:id',
        Component: FriendsPage
    },

    {
        path: FRIEND_REQUESTS_ROUTE + '/:id',
        Component: FriendRequestsPage
    },


];

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
];