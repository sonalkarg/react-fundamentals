import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReducerLearn from "./ReducerLearn";

test("reducer test", () => {
  const { getByText } = render(<ReducerLearn />);
  const buttonHello = getByText(/hello/i);
  const divOutput = getByText(/hello/i);

  userEvent.click(buttonHello);
  console.log(divOutput);
  expect(divOutput).toHaveTextContent("hello");
});
