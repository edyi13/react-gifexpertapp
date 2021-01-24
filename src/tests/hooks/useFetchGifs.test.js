import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en el custom hook useFecthGifs', () => {

    test('Deberia de retornar eñ estado inicial', async() => {
        //Arrange
        // const {data, loading} = useFetchGifs('One Piece');
        const { result, waitForNextUpdate} = renderHook( () => useFetchGifs('One Piece') );
        //Act        
        const {data, loading} = result.current;
        await waitForNextUpdate();
        //Assert
        expect( data ).toEqual( [] );
        expect( loading ).toBeTruthy();
    });
    
    test('Deberia de retornar un arreglo de imagenes y el loading en false', async() => {
        //Arrange
        const { result, waitForNextUpdate  } = renderHook( () => useFetchGifs('One Piece') );
        //Act
        await waitForNextUpdate();
        const {data, loading} = result.current;
        //Assert
        expect( data.length ).toBe( 10 );
        expect( loading ).toBeFalsy();
    })
    
});
