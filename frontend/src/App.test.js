import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";
import Exercise from "./pages/Exercise";
import Diet from "./pages/Diet";
import Routine from "./pages/Routine";
import Home from "./pages/Home";

test ("renders App", () => {
  render(<App />);
  const linkElement = screen.getByTestId("App");
  expect(linkElement).toBeInTheDocument();
});

test ("renders Home", () => {
  render(<App />);
  const linkElement = screen.getByTestId("Home");
  expect(linkElement).toBeInTheDocument();
});

test ("renders Home Page", () => {
  render(<Home />);
  const linkElement = screen.getByTestId("Home");
  expect(linkElement).toBeInTheDocument();
});

test ("renders NavigationBar", () => {
  render(<App />);
  const linkElement = screen.getByTestId("NavigationBar");
  expect(linkElement).toBeInTheDocument();
});

test ("renders HomeBackground", () => {
  render(<App />);
  const linkElement = screen.getByTestId("HomeBackground");
  expect(linkElement).toBeInTheDocument();
});

test ("renders ExercisePage", () => {
  render(<Exercise />);
  const linkElement = screen.getByTestId("ExercisePage");
  expect(linkElement).toBeInTheDocument();
});

//!axios error but it passes
// test ("renders Summaries", () => {
//   render(<Exercise />);
//   const linkElement = screen.getByTestId("Summaries");
//   expect(linkElement).toBeInTheDocument();
// });

test ("renders DietPage", () => {
  render(<Diet />);
  const linkElement = screen.getByTestId("DietPage");
  expect(linkElement).toBeInTheDocument();
});

test ("renders RoutinePage", () => {
  render(<Routine />);
  const linkElement = screen.getByTestId("RoutinePage");
  expect(linkElement).toBeInTheDocument();
});

//!axios error but it passes
// test ("renders ExerciseForm", () => {
//   render(<Exercise />);
//   const linkElement = screen.getByTestId("ExerciseForm");
//   expect(linkElement).toBeInTheDocument();
// });

//!axios error but it fails
// test ("renders Header", () => {
//   render(<Exercise />);
//   const linkElement = screen.getByTestId("Header");
//   expect(linkElement).toBeInTheDocument();
// });