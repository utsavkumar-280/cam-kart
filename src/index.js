import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { AppDataProvider, AuthProvider } from "./Context";

ReactDOM.render(
	<StrictMode>
		<Router>
			<AuthProvider>
				<AppDataProvider>
					<App />
				</AppDataProvider>
			</AuthProvider>
		</Router>
	</StrictMode>,
	document.getElementById("root")
);
