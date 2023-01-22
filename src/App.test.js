import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import App from './App';

describe("home" , () =>{
  const setup = () => render(<App />);

  test("home test title", async () => {
    setup()

    expect(screen.getByText(/WestCoast Education/i)).toBeInTheDocument();


  })


})