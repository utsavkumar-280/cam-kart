import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AppDataProvider } from "./Context";

ReactDOM.render(
	<React.StrictMode>
		<AppDataProvider>
			<Router>
				<App />
			</Router>
		</AppDataProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
