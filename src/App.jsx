import { useState } from 'react'
import RootProvider from "./core/providers/RootProvider";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/router/AppRouter";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RootProvider>
      <RouterProvider router={appRouter} />
    </RootProvider>
  )
}

export default App
