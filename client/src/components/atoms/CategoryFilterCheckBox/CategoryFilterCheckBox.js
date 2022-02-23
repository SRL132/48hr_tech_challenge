import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
export default function CategoryFilterCheckBox({ value }) {
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    const handleChange = () => {

        if (!checked) {
            dispatch({ type: 'FILTER_BY_CATEGORY', payload: value })
        } else {
            dispatch({ type: 'UNSET_FILTER_BY_CATEGORY', payload: value })
        }
        setChecked(!checked);
    }

    return (
        <input type="checkBox" value={value} onChange={handleChange} />
    )
}
