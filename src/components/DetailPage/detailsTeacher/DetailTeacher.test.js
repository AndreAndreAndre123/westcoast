
import { render, screen } from '@testing-library/react';
import DetailTeacher from "./DetailTeacher"

describe('Teachers detail page', () => {
    const setup = () => render(<DetailTeacher/>)
    test('title exists', () => {
        setup()
        const title = screen.getByText("Detaljer om läraren")
        expect(title).toBeInTheDocument()
    })
});