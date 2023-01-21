import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import App from './App';

describe("routing" , () =>{
  const setup = () => render(<App />);

  test("routing", async () => {
    setup()

    expect(screen.getByText(/WestCoast Education/i)).toBeInTheDocument();


  })


})