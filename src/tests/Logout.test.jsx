import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { AuthContext } from "../AuthContext";
import routesConfig from "../routes/routesConfig";
import store from "../store";
import ProvidersWithoutAuth from "../utils/ProvidersWithoutAuth";

const mockAuthValue = {
    user: {
        sarahedo: {
            id: 'sarahedo',
            password: 'password123',
            name: 'Sarah Edo',
            avatarURL: "https://img.icons8.com/?size=100&id=20748&format=png&color=000000",
            answers: {
                "8xf0y6ziyjabvozdd253nd": 'optionOne',
                "6ni6ok3ym7mf1p33lnez": 'optionOne',
                "am8ehyc8byjqgar0jgpub9": 'optionTwo',
                "loxhs1bqm25b708cmbf3g": 'optionTwo'
            },
            questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
        }
    },
    isAuthenticated: true,
    logout: vi.fn()
}
const renderWithAuth = (ui, authValue = mockAuthValue) => {
    return render(
        <AuthContext.Provider value={mockAuthValue}>{ui}</AuthContext.Provider>
    );
};


describe('Login', () => {
    const router = createMemoryRouter(routesConfig, {
        initialEntries: ["/questions"]
    })




    it('Test Logout', () => {

        renderWithAuth(<ProvidersWithoutAuth router={router} store={store} />)
        const logOutBtn = screen.getByRole("button", { name: "Logout" })
        fireEvent.click(logOutBtn)
        expect(mockAuthValue.logout).toHaveBeenCalledTimes(1)
        expect(router.state.location.pathname).toBe("/")


    })





})

