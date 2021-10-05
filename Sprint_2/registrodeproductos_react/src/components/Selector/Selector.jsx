import React from 'react'
import '../Inputs/Input.css'

const Selector = ({nameLabel}) => {
    return (
        <div>
            <label className="input-label">{nameLabel}</label>
            <select className="form-select " aria-label="Default select example">
                <option selected>Choose...</option>
                <option value="1">In-stock</option>
                <option value="2">Out-of-stock</option>
            </select>
        </div>
    )
}

export default Selector
