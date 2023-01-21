
import { render, screen } from '@testing-library/react';
import TeacherList from "./TeacherList"

describe('Teachers list page tests', () => {
    const setup = () => render(<TeacherList/>)
    test('title exists', () => {
        setup()
        const title = screen.getByText("Lista med våra lärare")
        expect(title).toBeInTheDocument()
    })
});