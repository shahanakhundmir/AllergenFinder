/* eslint-disable jest/valid-title */
/* eslint-disable no-restricted-globals */
import NavbarMenu from './NavbarMenu'
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'

describe('NavbarMenu component', () => {
    test(`
        Given the required props,
        The submenu shoud be present`, () => {
            const mockClickFunction = jest.fn()
            const getProps = {
                selectSubMenu: mockClickFunction
            }
            render(<NavbarMenu { ...getProps} />)
            const clickButton = screen.getProps("button").find(button => button.textContent = "subMenu" )
            userEvent.click(clickButton)
            expect(mockClickFunction).toHaveBeenLastCalledWith("001")
        })
    });