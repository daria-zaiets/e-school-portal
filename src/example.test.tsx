import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hello component", () => {
	render(<App />);
	expect(
		screen.getByText("Click on the Vite and React logos to learn more"),
	).toBeInTheDocument();
});
