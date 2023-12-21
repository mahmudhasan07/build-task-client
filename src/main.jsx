import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LogIn from './Components/User/logIn.jsx'
import Registration from './Components/User/Registration.jsx'
import Home from './Components/Home/Home.jsx'
import ContextAPI from './Components/ContextAPI/ContextAPI.jsx'
import DashBoard from './Components/DashBoard/DashBoard.jsx'
import DashInfo from './Components/DashBoard/DashInfo.jsx'
import Createtask from './Components/DashBoard/CreateTask/Createtask.jsx'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Tasks from './Components/Tasks/Tasks.jsx'
import Preview from './Components/DashBoard/Preview/Preview.jsx'
import TaskInfo from './Components/Tasks/TaskInfo.jsx'
import Updatetask from './Components/DashBoard/Preview/Updatetask.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/tasks',
        element: <Tasks></Tasks>
      },
      {
        path: '/tasks/:id',
        element: <TaskInfo></TaskInfo>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },

    ]
  },
  {
    path: '/dashboard',
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: '/dashboard',
        element: <DashInfo></DashInfo>
      },
      {
        path: 'create-task',
        element: <Createtask></Createtask>
      },
      {
        path: "previews-task",
        element: <Preview></Preview>
      },
      {
        path :'previews-task/update/:id',
        element : <Updatetask></Updatetask>
      }
    ]
  }
])

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextAPI>
        <RouterProvider router={router}></RouterProvider>
      </ContextAPI>
    </QueryClientProvider>
  </React.StrictMode>,
)
