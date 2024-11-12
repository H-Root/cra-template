import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userData } from "../store/user";

const Login = () => {
	const [, setUserData] = useRecoilState(userData);

	useEffect(() => {
		setUserData({
			username: "any",
		});
	}, []);

	return <div>Login</div>;
};

export default Login;
