import { createHashRouter } from "react-router-dom";
import SeguridadView from "../../pages/seguridad/views/SeguridadView"
import GeneralLayout from "../layouts/GeneralLayout";


export const appRouter = createHashRouter([
    {
        path: "/",
        element: (
            <GeneralLayout>
                <SeguridadView />
            </GeneralLayout>

        ),
    }
]);