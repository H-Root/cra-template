import { useQuery } from "@tanstack/react-query";
import React from "react";
import useServices from "../hooks/useServices";
import { FaSpinner } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
	const { fetchAllTodos } = useServices();

	const { data, isError, isLoading } = useQuery({
		queryKey: ["fetchRandomData"],
		queryFn: () => fetchAllTodos(),
		select: (data) => {
			console.log(data);
			return data;
		},
	});

	console.log(data);

	if (isLoading) {
		return (
			<div className="flex items-center justify-center my-10">
				<FaSpinner className="animate-spin duration-700" />
			</div>
		);
	}

	if (isError) {
		return <div>error</div>;
	}

	return (
		<div className="flex flex-col gap-10">
			{data.data.map((todo) => {
				return <Link to={`/todos/${todo.id}`}>Go to {todo.title}</Link>;
			})}
		</div>
	);
};

export default Home;
