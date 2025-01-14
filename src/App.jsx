import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import useBrowserRouter from "./hooks/useBrowserRouter";

const queryClient = new QueryClient();

function App() {
	const { router } = useBrowserRouter();

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
