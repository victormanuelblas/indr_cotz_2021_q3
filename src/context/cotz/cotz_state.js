import React, { useReducer } from 'react';
import CotzContext from './cotz_context';
import CotzReducer from './cotz_reducer';
import axios from 'axios';

const CotzState = (props) => {
    const initialState = {
        prospectList: [],
        prospectSelc: null
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
        let {cotz_tdoc,cotz_ndoc,cotz_telf,cotz_plac} = prosInfo
        
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
        
        let pros_info = "{tdoc : '" + cotz_tdoc + "',ndoc : '" + cotz_ndoc + "',telf : '" + cotz_telf + "',plac : '" + cotz_plac + "',nomb : '" + pros_data.cotz_nomb + "'}";
        
        dispatch({
            type: 'COTZ_GET_PROS',
            payload: JSON.stringify(pros_info) 
        })
    }

    const setCarInfo = (carInfo) => {
        console.log(carInfo);
        dispatch({
            type: 'COTZ_CAR_INFO',
            payload: carInfo
        })
    }

    const postClinInfo = async (clinInfo) => {
        console.log(clinInfo);
        let config = {
            headers : {
                Authorization: "Basic YWRtaW5AYWdlbmNzaS5jb206OGRHZ1NZLVB3NkR0LVBXVzloWS1lYkFHZg==",
            }
        }

        const rspn = await axios.post('https://aut.creceidea.com/public/sximoapi/1?module=cotzmodlpers', clinInfo, config)
        console.log(rspn.data)
        dispatch({
            type: 'COTZ_POST_INFO',
            payload: rspn.data
        })

    }
    
    return (
        <CotzContext.Provider value={{
            prospectList: state.prospectList,
            prospectSelc: state.prospectSelc,
            getProspectList,
            getProspect,
            setCarInfo,
            postClinInfo
        }}>
            {props.children}
        </CotzContext.Provider>
    )
}

export default CotzState;