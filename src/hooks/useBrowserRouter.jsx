import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SelectedTodo from "../pages/SelectedTodo";
import { userData } from "../store/user";

const useBrowserRouter = () => {
	const value = useRecoilValue(userData);

	const router = createBrowserRouter([
		(() =>
			value
				? {
						path: "/",
						element: <Layout />,
						children: [
							{
								path: "",
								element: <Home />,
							},
              {
                path: "todos/:id",
                element: <SelectedTodo />
              }
						],
				  }
				: {
						path: "/",
						element: <Login />,
				  })(),
	]);

	return { router };
};

export default useBrowserRouter;
