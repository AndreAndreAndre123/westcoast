import {render, screen} from "@testing-library/react"

import { BrowserRouter as Router } from "react-router-dom"

import Nav from "./nav"

describe("Nav test" , () =>{
    const setup = () => render(<Router><Nav /></Router>)

    test("Home page", () =>{
        setup()
        const Home= screen.getByText("Hem")
        expect(Home).toHaveAttribute("href", "/")
    })

    test('teachers page', () => {
        setup()
        const teachers = screen.getByText('Lärare')
        expect(teachers).toHaveAttribute('href', '/teachers')
    })
})