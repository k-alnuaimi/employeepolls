import { describe, expect } from "vitest"
import { useAuth } from "../AuthContext"
import { createMemoryRouter } from "react-router-dom"
import routesConfig from "../routes/routesConfig"
import { fireEvent, getByRole, render, screen } from "@testing-library/react"
import Providers from "../utils/Providers"
import store from "../store"



describe('NewQuestion', () => {
    const router = createMemoryRouter(routesConfig, {
        initialEntries: ["/add"]
    })


    it('New Question', () => {



        render(<Providers router={router} store={store} />)

        const btn = screen.getByRole("button", { name: "Login" })
        const sarahedoOption = screen.getByRole("option", { name: "sarahedo" })
        const selectElement = screen.getByDisplayValue("Select a user")
        expect(btn).toBeInTheDocument()
        fireEvent.change(selectElement, { target: { value: 2 } })
        screen.debug()
        // expect(sarahedoOption.selected).toBe(true)

    })






})