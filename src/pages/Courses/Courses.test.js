import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import Courses from "./Courses"



describe("Courses" , () =>{
  const setup = () => render(<Courses />);

  test("Title check", () => {
    setup()

    const title = screen.getByText("Våra kurser")
    expect(title).toBeInTheDocument()


  })


})