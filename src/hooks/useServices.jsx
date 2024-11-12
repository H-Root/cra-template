import { useAxiosInstance } from "../lib/axiosClient";

const useServices = () => {
	const { axiosClient } = useAxiosInstance();

	return {
		fetchAllTodos: () => {
			return axiosClient.get("/todos");
		},
		fetchSelectedTodo: (key) => {
			return axiosClient.get(`/todos/${key}`);
		},
	};
};

export default useServices;
