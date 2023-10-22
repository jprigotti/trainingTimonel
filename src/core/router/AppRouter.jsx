import { createHashRouter } from "react-router-dom";
import SeguridadView from "../../pages/seguridad/views/SeguridadView"
import MeteorogiaView from "../../pages/meteorologia/views/MeteorologiaView"
import GeneralLayout from "../layouts/GeneralLayout";


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
    }
]);