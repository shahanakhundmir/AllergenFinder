import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MenuCard from './MenuCard'

describe('MenuCard', () => {
    afterEach(() => jest.clearAllMocks())
    test(`Given the required props, when the MenuCard is rendered, 
       Title and description should be visable`, () => {

        const requiredProps = {
            props:[
            {key:1001},
            {index:1001},
            {card : [{ item_id: 1001, name: 'Halloumi Sticks & Dip', image: '/images/Halloumi Sticks & Dip.png', full_desc:"Five chunky sticks of grilled halloumi with c",
            short_desc:"Five chunky sticks of grilled halloumi with c",factory_contam:"jdjvdfjobjvbjvjvjcvv", kitchen_contam:"As bread is handled in the kitchen, please sp",
            ingredients:"Halloumi cheese,flour,oil", submenu:"Mains"}]},
            {selectedAllergens:['Gluten']},
            {menuItemAllergens : [{item_id: 1001, allergen_id:1}]},
            {allergens :[{ allergen_id: '1', allergen_name: 'Gluten', allergen_image: '/images/image1a.png'}]}
        ]}
        render(<MenuCard {...requiredProps} />)
        expect(screen.getByText('Halloumi Sticks & Dip')).toBeInTheDocument()
        expect(screen.getByText('Five chunky sticks of grilled halloumi with c')).toBeInTheDocument()
        expect(screen.getByText('As bread is handled in the kitchen, please sp')).toBeInTheDocument()
    })

/**test(`Given the required props, the menu item image should be displayed`, () => {
        const requiredProps = {
            show:true,
            image:'/images/Halloumi Sticks & Dip.png',
            id: 1001,
            title:'Halloumi Sticks & Dip',
            description:'Five chunky sticks of grilled halloumi with c',
            ingredients:'Halloumi cheese,flour,oil',
            allergen:[],
            factory_contam: 'jdjvdfjobjvbjvjvjcvv',
            kitchen_contam:'As bread is handled in the kitchen, please sp',
            onClose:false
        }
        render(<MenuCard {...requiredProps} />)
        expect(screen.getByAltText('menu item')).toBeInTheDocument()
    })

    test(`Given the required props, when menu item is clicked the pop up is visible`, () => {
        const mockClosePopup = jest.fn()
        const requiredProps = {
            show:true,
            image:'/images/Halloumi Sticks & Dip.png',
            id: 1001,
            title:'Halloumi Sticks & Dip',
            description:'Five chunky sticks of grilled halloumi with c',
            ingredients:'Halloumi cheese,flour,oil',
            allergen:[],
            factory_contam: 'jdjvdfjobjvbjvjvjcvv',
            kitchen_contam:'As bread is handled in the kitchen, please sp',
            onClose:mockClosePopup
        }
        render(<AppModal {...requiredProps} />)
        const clickClose = screen.getByRole('button', {name: /Close/i})
        userEvent.click(clickClose)
        expect(mockClosePopup).toHaveBeenCalled()
    }) */
    
    
})
