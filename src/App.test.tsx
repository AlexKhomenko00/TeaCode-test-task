import { render, screen } from "@testing-library/react";
import App from "./App";

test("<App />", () => {
	render(<App />);
	const appComponent = screen.getByTestId("appComponent");
	expect(appComponent).toBeInTheDocument();
});
