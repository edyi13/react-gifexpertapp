import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid/>', () => {
    const category = 'Monkey D. Luffy';
    // let wrapper = shallow(<GifGrid category={ category } />);  

    // beforeEach( () => {
    //     wrapper = shallow(<GifGrid category={ category } />);  
    // });  

    test('Deberia de mostrase <GifGrid/> correctamente', () => {
        //Arrange
        //Act
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={ category } />);  

        //Assert
        expect(wrapper).toMatchSnapshot();
    })

    test('Deberia de mostrar items cuando se cargan imagenes con useFetchGifs', () => {
        //Arrange
        const gifs = [{
            id:'ABC',
            url: 'http://gph.is/2tsV7lY',
            title: 'Super Vegeta'
        },
        {
            id:'DEF',
            url: 'http://gph.is/2tsV7lY',
            title: 'Super Vegeta'
        }];
        //Act
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={ category } />);  

        //Asert
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    })
    
    
});
