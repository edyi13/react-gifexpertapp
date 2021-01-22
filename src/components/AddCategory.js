import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Se llama setCategories del componente GifExpertApp
//Se pasa setCategories como props desestructuradas (propiedades) 
export const AddCategory = ( {setCategories} ) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        //console.log(e.target.value)
        setInputValue(e.target.value);
    };

    const hanldeSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setCategories(cats => [ inputValue, ...cats ]);
            setInputValue('');
        }
    };

    return (
            <form onSubmit={ hanldeSubmit }>
                <input
                    type="text"
                    value={ inputValue }
                    onChange= { handleInputChange  }/>
            </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
