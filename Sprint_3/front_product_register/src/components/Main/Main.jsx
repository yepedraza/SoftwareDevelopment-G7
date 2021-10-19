import React from 'react'
import Container from '../Container/Container'
import Button from '../Buttons/Buttons'
import Input from '../Inputs/Input'
import Selector from '../Selector/Selector'

import { faBarcode, faAlignJustify, faDollarSign} from '@fortawesome/free-solid-svg-icons'

const Main = () => {

    /* Acá va la lógica*/
    const makeAlert = () => {
        alert("Product saved")
    }

    return (
        <main>
            <div className = "main">
                <Container titulo="PRODUCT REGISTER">
                <section class = "main-input">
                    <Input nameLabel="Product ID:" value ="e.g., 123" nameIcon={faBarcode} />
                    <Input nameLabel="Description:" value ="e.g., Tenis" nameIcon={faAlignJustify} />
                    <Input nameLabel="Unit Value:" value ="e.g., 125000" nameIcon={faDollarSign} />
                    <Selector nameLabel="Product state:" />
                </section>

                <div className="Buttons">
                    <Button title="Save" disabled={false} onClick={makeAlert}/>
                    <Button title="Clear" disabled={true} onClick={makeAlert}/>
                    <Button title="Product List" disabled={true} onClick={makeAlert}/>
                </div>
                
                </Container>
                
            </div>
        </main>
    )
}

export default Main