import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { withLoading } from "../components/hocs/withLoading";

import { getProjectList, getCertificationList } from "../apis/rest/endpoints";

import DisplayModal from "../components/modals/DisplayModal";

const Home = withLoading(lazy(() => import("../pages/Home")));
const Experience = withLoading(lazy(() => import("../pages/Experience")));
const Skills = withLoading(lazy(() => import("../pages/Skills")));
const Certifications = withLoading(lazy(() => import("../pages/Certifications")));
const Stats = withLoading(lazy(() => import("../pages/Stats")));
const Labs = withLoading(lazy(() => import("../pages/Labs")));
const Roadmap = withLoading(lazy(() => import("../pages/Roadmap")));

export const Routes: RouteObject[] = [
    { path: "/", element: <Home /> },
    { path: "/experience", element: <Experience /> },
    { path: "/skills", element: <Skills /> },
    { path: "/labs", element: <Labs /> },
    { path: "/lab/:id", element: <DisplayModal getDataList={getProjectList} dataRoutePath="/labs" /> },
    { path: "/certifications", element: <Certifications /> },
    { path: "/certification/:id", element: <DisplayModal getDataList={getCertificationList} dataRoutePath="/certifications" /> },
    { path: "/stats", element: <Stats /> },
    { path: "/roadmap", element: <Roadmap /> },
];

if (import.meta.env.DEV) {
    const DevelopmentPage = withLoading(lazy(() => import("../pages/Development")))

    Routes.push(
        {
            path: "/development",
            element: <DevelopmentPage />,
        },
    )
}
