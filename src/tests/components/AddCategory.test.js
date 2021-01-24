import {shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
describe('Pruebas en el componente <AddCategory/>', () => {
    
    //jest.fn() simula la funcion y sus propiedades
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });
    test('Deberia de mostrase <AddCategory/> correctamente', () => {
        //Arrange
        //Act
        //Assert
        expect(wrapper).toMatchSnapshot();
    })

    test('Deberia de cambiar la caja de texto', () => {
        //Arrange
        const input =  wrapper.find('input');
        const value = 'Insecto';
        //Act
        input.simulate('change',{ target: { value } });
        //Assert
        expect(wrapper.find('p').text().trim()).toBe(value);
        
    })
    
    test('No deberia de postear la información con submit', () => {
        //Arrange
        //Act
        wrapper.find('form').simulate('submit',{preventDefault:() => {}});
        //Assert
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('Deberia de llamar el setCategories y limpiar la caja de texto', () => {
        //Arrange
        //Si en el código se guarda en constantes el input y el form el código no funcionara 
        //y dará como resultado que nunca se ejecutó el setCategories porque por alguna
        //razón el inputValue no existe en la prueba.
        // const input = wrapper.find('input');
        // const form = wrapper.find('form');
        const value = 'Kakaroto!!!';
        //Act
        wrapper.find('input').simulate('change',{ target: { value }});
        wrapper.find('form').simulate('submit',{ preventDefault:() => {} });
        //setCategories(cats => [ value, ...cats ]);
        //Assert
        expect(setCategories).toHaveBeenCalled();
        //toHaveBeenCalledTimes() que se haya llamado una cantidad de veces especifica
        expect(setCategories).toHaveBeenCalledTimes(1);
        //toHaveBeenCalledWith() que se haya llamadp con argumentos especificos
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').text().trim()).toBe('');
    })
    
    
})
