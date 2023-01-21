
import { render, screen } from '@testing-library/react';
import DetailCourse from "./DetailsCourse"

describe('Teachers detail page', () => {
    const setup = () => render(<DetailCourse/>)
    test('title exists', () => {
        setup()
        const title = screen.getByText("Detaljer om kursen")
        expect(title).toBeInTheDocument()
    })
});