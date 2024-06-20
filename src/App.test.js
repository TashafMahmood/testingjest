import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// INPUT BOX TESTING USING FIRE EVENT
test("onchange testing", () => {
  render(<App />);
  let input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "a" } });
  expect(input.value).toBe("a");
});

// GET ALL BY ROLE
test("onchange testing", () => {
  render(<App />);
  let input = screen.getAllByRole("textbox");
  fireEvent.change(input, { target: { value: "a" } });
  expect(input.value).toBe("a");
});

// CLICK BUTTON TESTING USING FIRE EVENT
test("click button testing", () => {
  render(<App />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("test")).toBeInTheDocument();
});


// Test by Test
test('test by id',()=>{
  render(<App/>);
  const btn = screen.getByTestId('btn1');
  fireEvent.click(btn);
  expect(screen.getByText("hello")).toBeInTheDocument()
})



// GET BY LABEL TEXT
test("get by label text",()=>{
  render(<App/>);
  const input = screen.getByLabelText("Username");
  expect(input).toBeInTheDocument();
})

// GET BY LABEL TEXT
test("get all by label text",()=>{
  render(<App/>);
  const input = screen.getAllByLabelText("Username");
  expect(input).toBeInTheDocument();
})

// GET PLACEHOLDER BY TEXT
test("get by placeholder text",()=>{
  render(<App/>);
  const input = screen.getByPlaceholderText("enter your name");
  expect(input).toBeInTheDocument();
  expect(input).toHaveValue('username')
})


// GET BY TITLE
test("get by title",()=>{
  render(<App/>);
  const input = screen.getByTitle("click now");
  expect(input).toBeInTheDocument();
})
