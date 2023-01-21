
import { render, screen } from '@testing-library/react';
import CourseList from './courseList';

describe('Courses list page tests', () => {
    const setup = () => render(<CourseList/>)
    test('title exists', () => {
        setup()
        const title = screen.getByText("Lista med våra kurser")
        expect(title).toBeInTheDocument()
    })
});