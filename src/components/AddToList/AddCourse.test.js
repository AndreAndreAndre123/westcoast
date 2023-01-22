
import { render, screen } from '@testing-library/react';
import AddCourse from "./AddCourse";

describe('Add Course list page tests', () => {
    const setup = () => render(<AddCourse/>)
    test('title exists', () => {
        setup()
        const title = screen.getByText("Lägg till ny kurs")
        expect(title).toBeInTheDocument()


        
    })
    describe('inputs', () => {
    test('course input check', () => {
        setup()
        const input = screen.getByLabelText('Startdatum')
        expect(input).toBeInTheDocument()
    })})
});