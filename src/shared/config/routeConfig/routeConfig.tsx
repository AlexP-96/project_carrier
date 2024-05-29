import { RouteProps } from 'react-router-dom';
import { AdminChangeOrder } from 'pages/adminChangeOrder';
import { MainTable } from 'pages/mainTable';
import { PageNotFound } from 'pages/not_found';

export enum AppRoutes {
    MAIN = 'main',
    ADMIN_CHANGE_ORDER = 'admin_change_order',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ADMIN_CHANGE_ORDER]: '/admin_change_order',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainTable />,
    },
    [AppRoutes.ADMIN_CHANGE_ORDER]: {
        path: RoutePath.admin_change_order,
        element: <AdminChangeOrder />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <PageNotFound />,
    },
};