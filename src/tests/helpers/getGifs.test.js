import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en el helper getGifs', () => {

    test('Deberia de traer 10 elementos', async () => { 
        //Arrange
        const category = 'One Piece';
        //Act
        const gifs = await getGifs(category);
        //Assert
        expect(gifs.length).toBe(10);
    })

    test('Deberia de traer 0 elementos', async () => { 
        //Arrange
        const category = '';
        //Act
        const gifs = await getGifs(category);
        //Assert
        expect(gifs.length).toBe(0);
    })
    

})
