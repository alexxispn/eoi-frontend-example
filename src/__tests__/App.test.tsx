import { render, screen } from "@testing-library/react";
import App from "../App";

describe('App', () => {
  it('should render Hello world', () => {
    render(<App />);

    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });
  it('should render This is a simple React app', () => {
    render(<App />);

    expect(screen.getByText(/This is a simple React app/i)).toBeInTheDocument();
  });
  it('should render "The cake is a lie"', () => {
    render(<App />);

    expect(screen.getByText(/The cake is a lie/i)).toBeInTheDocument();
  });
});
