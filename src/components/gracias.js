import React, { useContext } from 'react'

import CotzContext from '../context/cotz/cotz_context';
import Header from './header';

const Gracias = () => {
    const { prospectSelc, prospectAmounts } = useContext(CotzContext)
console.log(prospectAmounts);
    return (
        <>
        <Header/>
        <div>
            <h1>Gracias</h1>
            <h5>Suma asegurada: ${Intl.NumberFormat("es-PE", { minimumFractionDigits: 2 }).format(prospectAmounts.sumaAsegurada)}</h5>
            <h6>Cuota mensual: ${Intl.NumberFormat("es-PE", { minimumFractionDigits: 2 }).format(prospectAmounts.cuotaMensual)}</h6>
        </div>
        </>
    )
}

export default Gracias
