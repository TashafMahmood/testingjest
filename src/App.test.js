import { render, screen } from "@testing-library/react";
import App from './App'


test('testing app',()=>{
  render(<App/>);
  const text = screen.getByText("First react test case")
  expect(text).toBeInTheDocument()
})

// Testing Input Box
test("testing input box",()=>{
  render(<App/>)
  const checkInputField = screen.getByRole("textbox")
  const checkInputPlaceholder = screen.getByPlaceholderText("Enter username")
  expect(checkInputField).toBeInTheDocument()
  expect(checkInputPlaceholder).toBeInTheDocument()
  expect(checkInputField).toHaveAttribute("name","input-field")
  expect(checkInputField).toHaveAttribute("id","myinput")
})