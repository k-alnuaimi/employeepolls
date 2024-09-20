import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { createMemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import routesConfig from "../routes/routesConfig";
import store from "../store";
import Providers from "../utils/Providers";
import { Select } from "@chakra-ui/react";




describe('Login', () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/Login"]
  })

  it('render Login', () => {



    render(<Providers router={router} store={store} />)
    screen.debug()
    const btn = screen.getByRole("button", { name: "Login" })
    const selectAUser = screen.getByRole("option", { name: "Select a user" })
    expect(btn).toBeInTheDocument()
    expect(selectAUser.selected).toBe(true)

  })

  /* it('maching snapshot', () => {

    const loginPage = render(<Providers router={router} store={store} />)
    expect(loginPage).toMatchSnapshot()

  }) */




})

