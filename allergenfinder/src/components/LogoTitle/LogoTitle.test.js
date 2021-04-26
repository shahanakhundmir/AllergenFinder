import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LogoTitle from './LogoTitle'
import NavDropdown from 'react-bootstrap/NavDropdown';
 describe('LogoTitle', () => {
    test(`Given the required props, when the LogoTitle is rendered, 
        the names of the restaurant should be listed`, () => {

        const requiredProps = {
            restaurants: [
                { rest_id: '001', rest_name: 'Nandos', rest_branch: 'London, Wembley', },
                { rest_id: '002', rest_name: 'Bills', rest_branch: 'Swindon' }],
            selectRestaurant: () => { },
            selectedRestaurant: ['001']
        }
        render(<LogoTitle {...requiredProps} />)
        render(<NavDropdown />)
        expect(screen.getAllByRole('button').getByText('Nandos (London, Wembley)')).toBeInTheDocument()
      //  expect(screen.getByText('Nandos')).toBeInTheDocument()
    })



/** test(`Given the required props, when a restaurant is selected from the list, 
    it should appear as the title`, () => {

        const requiredProps = {
            restaurants: [
                { rest_id: '001', rest_name: 'Nandos', rest_branch: 'London, Wembley', },
                { rest_id: '002', rest_name: 'Bills', rest_branch: 'Swindon' }],
            selectRestaurant: () => { },
            selectedRestaurant: ['001']
        }
        render(<LogoTitle {...requiredProps} />)
        expect(screen.getByText('Nandos')).toBeInTheDocument()
      //  expect(screen.getByText('Nandos')).toBeInTheDocument()
    })

    test(`Given the required props, when the LogoTitle is rendered
    on selecting a restaurant from the drop down the function selectRestaurant should execute`, () => {

        const mockselectRestaurant = jest.fn()
        const requiredProps = {
            restaurants: [
                { rest_id: '001', rest_name: 'Nandos', rest_branch: 'London, Wembley', },
                { rest_id: '002', rest_name: 'Bills', rest_branch: 'Swindon' }],
            selectRestaurant:  mockselectRestaurant,
            selectedRestaurant: ['001']
        }
        render(<LogoTitle { ...requiredProps} />)
        const clickRestaurant = screen.getByRole('img')
        userEvent.click(clickRestaurant)
        expect(mockselectRestaurant).toHaveBeenCalledWith('001')
    }) */
    

})
    /** test(`Given the required props, when an allergen icon is selected, 
       the function selectAllergen should be called`, () => {
           const requiredProps = {
               allergens: [{ allergen_id: '001', allergen_name: 'Gluten', allergen_image: '/images/image1a.png'}],
               selectAllergen: () => {}, 
               selectedAllergens: ['Gluten']
           }
           render(<Footer { ...requiredProps} />)
           expect(screen.getByRole("img")).toHaveProperty('path', 'allergen-icon allergen-selected');
       })
       getByRole('image', { name: 'fancy image' })*/
