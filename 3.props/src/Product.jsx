import React from 'react'

function Product({ name, price }) {

    return (
        <div>
            <div>
                <div>Ürün Bilgileri</div>
                <div>İsim : {name}</div>
                <div>Fİyat : {price} </div>
            </div>
        </div>
    )
}

export default Product