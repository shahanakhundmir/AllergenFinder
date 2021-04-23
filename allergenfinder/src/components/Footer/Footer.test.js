import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Footer from './Footer'

describe('Footer', () => {
    test(`Given the required props, when the footer is rendered, 
        allergen icons and labels should be visable`, () => {

        const requiredProps = {
            allergens: [{ allergen_id: '001', allergen_name: 'Gluten', allergen_image: '/images/image1a.png'}],
            selectAllergen: () => {}, 
            selectedAllergens: ['Gluten', 'Celery']
        }
        render(<Footer { ...requiredProps} />)
        expect(screen.getByText('Gluten')).toBeInTheDocument()
    })


    test(`Given the required props, the allergen image should be displayed`, () => {
        const requiredProps = {
            allergens: [{ allergen_id: '001', allergen_name: 'Gluten', allergen_image: '/images/image1a.png'}],
            selectAllergen: () => {}, 
            selectedAllergens: ['Gluten', 'Celery']
        }
        render(<Footer { ...requiredProps} />)
        expect(screen.getByAltText('Gluten icon')).toBeInTheDocument()
    })

    test(`Given the required props, when an allergen icon is selected, 
    the function selectAllergen should be called`, () => {
        const mockSelectFunction = jest.fn()
        const requiredProps = {
            allergens: [{ allergen_id: '001', allergen_name: 'Gluten', allergen_image: '/images/image1a.png'}],
            selectAllergen:  mockSelectFunction,
            selectedAllergens: ['Gluten']
        }
        render(<Footer { ...requiredProps} />)
        const clickAllergen = screen.getByRole('img')
        userEvent.click(clickAllergen)
        expect(mockSelectFunction).toHaveBeenCalledWith('Gluten')
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


})