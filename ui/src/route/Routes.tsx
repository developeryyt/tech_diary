import { createBrowserRouter } from "react-router";
import Layout from "../layout/layout/Layout.tsx";
import Blog from "../pages/blog";


// interface IndexRouteObject {
//     caseSensitive?: AgnosticIndexRouteObject["caseSensitive"];
//     path?: AgnosticIndexRouteObject["path"];
//     id?: AgnosticIndexRouteObject["id"];
//     unstable_middleware?: AgnosticIndexRouteObject["unstable_middleware"];
//     loader?: AgnosticIndexRouteObject["loader"];
//     action?: AgnosticIndexRouteObject["action"];
//     hasErrorBoundary?: AgnosticIndexRouteObject["hasErrorBoundary"];
//     shouldRevalidate?: AgnosticIndexRouteObject["shouldRevalidate"];
//     handle?: AgnosticIndexRouteObject["handle"];
//     index: true;
//     children?: undefined;
//     element?: React.ReactNode | null;
//     hydrateFallbackElement?: React.ReactNode | null;
//     errorElement?: React.ReactNode | null;
//     Component?: React.ComponentType | null;
//     HydrateFallback?: React.ComponentType | null;
//     ErrorBoundary?: React.ComponentType | null;
//     lazy?: LazyRouteDefinition<RouteObject>;
// }

export const Routes = createBrowserRouter([
    {
        id: 'home',
        path: '/',
        element: <Layout />,
        children: [
            {
                id: 'blog',
                path: '/blog',
                element: <Blog />,
            }
        ]
    }
])