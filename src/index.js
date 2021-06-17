import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AppDataProvider } from "./Context";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ChakraProvider>
				<AppDataProvider>
					<App />
				</AppDataProvider>
			</ChakraProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
