import React, { useReducer } from 'react';
import CotzContext from './cotz_context';
import CotzReducer from './cotz_reducer';
import axios from 'axios';

const CotzState = (props) => {
    const initialState = {
        prospectList: [],
        prospectSelc: [],
        prospectAmounts: []
    }

    const [state, dispatch] = useReducer(CotzReducer, initialState)

    const getProspectList = async () => {
        let config = {
            headers : {
                Authorization: "Basic YWRtaW5AYWdlbmNzaS5jb206OGRHZ1NZLVB3NkR0LVBXVzloWS1lYkFHZg==",
            }
        }
    
        const rspn = await axios.get('https://aut.creceidea.com/public/sximoapi?module=cotzmodlpers',config)

        dispatch({
            type: 'COTZ_GET_PROS_LIST',
            payload: rspn.data
        })
    }
    
    const getProspect = async (prosId, prosInfo) => {
        let {cotz_tdoc,cotz_ndoc,cotz_telf,cotz_placa} = prosInfo
        
        let config = {
            headers : {
                Authorization: "Basic YWRtaW5AYWdlbmNzaS5jb206OGRHZ1NZLVB3NkR0LVBXVzloWS1lYkFHZg==",
            }
        }
    
        const rspn = await axios.get('https://aut.creceidea.com/public/sximoapi/'+prosId+'?module=cotzmodlpers',config)

        let pros_data = [];
        if (rspn.data){
            pros_data = rspn.data;
        }
        
        let pros_info = {}
        pros_info.tdoc = cotz_tdoc
        pros_info.ndoc = cotz_ndoc
        pros_info.telf = cotz_telf
        pros_info.placa = cotz_placa
        pros_info.nombre = pros_data.cotz_nomb        
        
        dispatch({
            type: 'COTZ_SET_PROS_INFO',
            payload : pros_info
        })

    }

    const setProspectAmounts = (sumaAsegurada, cuotaMensual) => {
        let montos = {}
        montos.sumaAsegurada = sumaAsegurada
        montos.cuotaMensual = cuotaMensual

        dispatch({
            type: 'COTZ_SET_PROS_AMOUNTS',
            payload: montos
        })
    }
    
    return (
        <CotzContext.Provider value={{
            prospectList: state.prospectList,
            prospectSelc: state.prospectSelc,
            prospectAmounts: state.prospectAmounts,
            getProspectList,
            getProspect,
            setProspectAmounts
        }}>
            {props.children}
        </CotzContext.Provider>
    )
}

export default CotzState;