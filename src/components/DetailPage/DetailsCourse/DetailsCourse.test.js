

import { render, screen } from '@testing-library/react';
import DetailsCourse from "./DetailsCourse"

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {}
  })
}));

describe('Courses details component', () => {
  const setup = () => render(<DetailsCourse />);

  test('page title', () => {
    setup();

    const title = screen.getByText("Detaljer om kursen")


    expect(title).toBeInTheDocument();

  });

});