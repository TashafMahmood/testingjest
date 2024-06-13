import { render, screen } from "@testing-library/react";
import App from './App'


test('testing app',()=>{
  render(<App/>);
  const text = screen.getByText("First react test case")
  expect(text).toBeInTheDocument()
})