import {shallow} from 'enzyme';
import { GifGridItem } from '../../Components/GifGridItem';


describe('Pruebas en el <GifGridItem/>', () => {
    //Global
    const title = 'Dragon Ball Z GIF';
    const url = 'http://gph.is/2cLjMwm';
    let wrapper = shallow(<GifGridItem title={title} url={url} />);
    beforeEach( () => {
        wrapper = shallow(<GifGridItem title={title} url={url} />);
    });
  
    test('Deberia de mostrar <GifGridItem/> correctamente', () => {
        //Arrange
        //Act
        //Assert
        expect(wrapper).toMatchSnapshot();
    })

    test('Deber de tener un parrafo con el title', () => {
        //Arrange
        
        //Act
        const p = wrapper.find('p');
        //Expect
        expect(p.text().trim()).toBe(title);
    })

    test('Debe tener la imagen igual url y alt de props', () => {
        //Arrange
        //Act
        const img = wrapper.find('img');
        //Assert
        expect(img.props().src).toBe(url);
        expect(img.props().alt).toBe(title);
    })
    
    test('Deberia de tener la clase animate_fadeIn', () => {
        //Arrange
        //Act
        const div =wrapper.find('div');
        //Assert
        expect(div.props().className).toContain('animate__fadeIn');

        //Forma de Fernando
        //Arrange
        //Act
        const className = div.prop('className');
        //Assert
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
    
    
})
