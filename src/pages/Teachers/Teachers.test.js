import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import Teachers from "./Teachers"



describe("Teachers" , () =>{
  const setup = () => render(<Teachers />);

  test("Title check", () => {
    setup()
    const title = screen.getByText("Bästa lärarna i landet")
    expect(title).toBeInTheDocument()


  })


})