import React from 'react';
import { useState } from 'react';

const useToggle = (boolean = false) => {
    const [value, setValue] = useState();
    const toggle  = () => {
        setValue(!value);
    }
    return [value, toggle];
}

export default useToggle;