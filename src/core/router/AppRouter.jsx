import { createHashRouter } from "react-router-dom";
import SeguridadView from "../../pages/seguridad/views/SeguridadView"
import MeteorogiaView from "../../pages/meteorologia/views/MeteorologiaView"
import RglamentacionView from "../../pages/reglamentacion/views/ReglamentacionView"
import GeneralLayout from "../layouts/GeneralLayout";
import ReglamentacionView from "../../pages/reglamentacion/views/ReglamentacionView";


export const appRouter = createHashRouter([
    {
        path: "/",
        element: (
            <GeneralLayout>
                <SeguridadView />
            </GeneralLayout>

        ),
    },
    {
        path: "/meteorologia",
        element: (
            <GeneralLayout>
                <MeteorogiaView />
            </GeneralLayout>

        ),
    },
    {
        path: "/reglamentacion",
        element: (
            <GeneralLayout>
                <ReglamentacionView />
            </GeneralLayout>

        ),
    },
]);