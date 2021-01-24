import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe('Pruebas en el <GifExpertApp/>', () => {
    test('Deberia de hacer match con el snapshot', () => {
        //Assert
        const wrapper = shallow(<GifExpertApp/>);
        //Act
        //Assert
        expect(wrapper).toMatchSnapshot();
    })

    test('Deberia de mostrar una lista de categorias', () => {
        //Arrange
        const categories = ['One Piece','Jujutsu kaizen'];
        const wrapper = shallow(<GifExpertApp defaultCategories = { categories } />);
        //Act
        //Assert
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    
    
})
