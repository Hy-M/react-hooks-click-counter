import React from "react";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<Header />
			<ClickCounter />
		</div>
	);
}

export default App;
