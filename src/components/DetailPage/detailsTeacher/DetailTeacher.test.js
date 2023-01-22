

import { render, screen } from '@testing-library/react';
import DetailTeacher from "./DetailTeacher"

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {}
  })
}));

describe('Teacher details component', () => {
  const setup = () => render(<DetailTeacher />);

  test('page title', () => {
    setup();

    const title = screen.getByText("Detaljer om läraren")


    expect(title).toBeInTheDocument();

  });

});