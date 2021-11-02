import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CotzContext from '../context/cotz/cotz_context';
import Header from './header'
import './armatuplan.scss';

import carinfo_icon_car_svg from '../resources/carinfo-icon-car.svg';
import armaplan_llantarobada_png from '../resources/armaplan-icon-theft.png';
import armaplan_choque_png from '../resources/armaplan-icon-damage.png';
import armaplan_atropello_png from '../resources/armaplan-icon-perdidatotal.png';

import comun_off_png from '../resources/common-off.png';
import comun_on_png from '../resources/common-on.png';

import comun_ver_mas from '../resources/common-ver-mas.png'
import comun_ver_menos from '../resources/common-ver-menos.png'

const Armatuplan = () => {
    const { prospectSelc, setProspectAmounts } = useContext(CotzContext)
    //información del cliente prospecto y el auto
    let placa = prospectSelc.placa;
    let nombre = prospectSelc.nombre;
    //el modelo se podria seleccionar desde un modal, o acceder a alguna API que devuelva información a partir de la placa
    let modelo = 'Volkswagen 2021 Gol '
    //opciones de cobertura
    let [cobrLlantarobada, setCobrLlantaRobada] = useState(0)
    let [cobrChoque, setCobrChoque] = useState(0)
    let [cobrAtropello,setCobrAtropello] = useState(0)
    //montos
    let montoMinimo = 12500
    let montoMaximo = 16500
    let montoEliminarCobrChoque = 16000
    let [montoAsegurado, setMontoAsegurado] = useState(14300)
    let [cuotaMensual, setCuotaMensual] = useState(20.00)

    function ReducirMontoAsegurado(){
        if (parseInt(montoAsegurado) > montoMinimo){
            setMontoAsegurado(montoAsegurado = parseInt(montoAsegurado) - 100);
            if (montoAsegurado <= montoEliminarCobrChoque){
                if (cobrChoque == 0){
                    procesaCobertura("choque")
                }
            }   
        }
    }

    function AumentarMontoAsegurado(){
        if (parseInt(montoAsegurado) < parseInt(montoMaximo)){
            setMontoAsegurado(montoAsegurado = parseInt(montoAsegurado) + 100);
            if (montoAsegurado > montoEliminarCobrChoque){
                if (cobrChoque == 1){
                    procesaCobertura("choque")
                }
            }   
        }
    }

    const procesaCobertura = (cobertura) => {
        if (cobertura == "llantarobada"){
            if (cobrLlantarobada == 0) {
                setCuotaMensual(cuotaMensual += 15)
                cobrLlantarobada = 1
            }else{
                setCuotaMensual(cuotaMensual -= 15)
                cobrLlantarobada = 0
            }
            setCobrLlantaRobada(cobrLlantarobada)
        }
        if (cobertura == "choque"){
            if (cobrChoque == 0) {
                setCuotaMensual(cuotaMensual += 20)
                cobrChoque = 1
            }else{
                setCuotaMensual(cuotaMensual -= 20)
                cobrChoque = 0
            }
            setCobrChoque(cobrChoque)
        }
        if (cobertura == "atropello"){
            if (cobrAtropello == 0){
                setCuotaMensual(cuotaMensual += 50)
                cobrAtropello = 1
            }else{
                setCuotaMensual(cuotaMensual -= 50)
                cobrAtropello = 0
            }
            setCobrAtropello(cobrAtropello)
        }
    }
    let history = useHistory();

    function grabarMontos (e) {
        console.log('grabando')
        e.preventDefault();
        setProspectAmounts(montoAsegurado,cuotaMensual)

        history.push("/gracias");
    }

    return (
        <>
            <Header />
            <div className="row armatuplan">
                <div className="col-12 armatuplan_prin_m">
                    <div className="Group_16370">
                        <div className="Group_15814">
                            <div className="Group_15812">
                                <div className="Group_15813">
                                    <div className="icon_Back">
                                        <div className="gl_arrow_left">
                                            <div className="chevrot">
                                                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.06012 0.429053C4.8133 0.190316 4.41747 0.190316 4.17065 0.429053L0.939884 3.55405C0.686704 3.79894 0.686705 4.20106 0.939884 4.44595L4.17065 7.57095C4.41747 7.80968 4.8133 7.80968 5.06012 7.57095C5.3133 7.32606 5.3133 6.92394 5.06012 6.67905L2.29039 4L5.06012 1.32095C5.31329 1.07606 5.31329 0.673943 5.06012 0.429053Z" fill="#E4E8F7"></path></svg>
                                            </div>
                                        </div>
                                        <div className="Back">
                                            <p className="Ellipse"></p>
                                        </div>
                                    </div>
                                    <div className="Group_15775">
                                        <div className="Paso_2_de_2">Paso 2 de 2</div>
                                    </div>
                                </div>
                            </div>
                            <div className="Bar">
                                <div className="Rectangle_79">
                                    <svg width="176" height="6" viewBox="0 0 176 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 3C0 1.34315 1.34315 0 3 0H173C174.657 0 176 1.34315 176 3C176 4.65685 174.657 6 173 6H3C1.34314 6 0 4.65685 0 3Z" fill="#E4E8F7"></path></svg></div>
                                <div className="Rectangle_80">
                                    <svg width="176" height="6" viewBox="0 0 176 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 3C0 1.34315 1.34315 0 3 0H173C174.657 0 176 1.34315 176 3C176 4.65685 174.657 6 173 6H3C1.34314 6 0 4.65685 0 3Z" fill="#6769FF"></path></svg></div>
                            </div>
                        </div>
                    </div>
                    <div className="carinfo_prin_m_deta">
                        <div className="carinfo_prin_m_deta_sepr"></div>
                        <div className="carinfo_prin_m_deta_mira">Mira las coberturas</div>
                        <div className="carinfo_prin_m_deta_conoce">Conoce las coberturas para tu plan</div>
                        <div className="carinfo_prin_m_deta_card">
                            <div className="card_info">
                                <div className="carinfo_prin_m_deta_card_sepr"></div>
                                <div className="card_info_placa">Placa: {placa}</div>
                                <div className="card_info_detalle">{modelo}</div>
                            </div>
                        </div>
                    </div>

                    <div className="Group_16903">
                        <div className="suma_asegurada">Indica la suma asegurada</div>
                        <div className="montos">
                            <div className="minimo">MIN ${montoMinimo}</div>
                            <p className="separador"></p>
                            <div className="maximo">MAX ${montoMaximo}</div>
                        </div>
                    </div>

                    <div className="Group_16909">
                        <div className="acciones">

                            <p className="gl_remove" onClick={ReducirMontoAsegurado}>
                            </p>

                            <div className="monto">$ {montoAsegurado}</div>

                            <p className="gl_add" onClick={AumentarMontoAsegurado}>
                            </p>

                        </div>
                        <p className="contenedor"></p>

                    </div>

                    <div className="coberturas_titulo">Agrega o quita coberturas</div>

                    <div className="coberturas_detalle">
                        <div className="protege_auto">PROTEGE A TU AUTO</div>
                        <div className="protege_rodean">PROTEGE A LOS QUE TE RODEAN</div>
                        <div className="mejora_plan">MEJORA TU PLAN</div>
                    </div>

                    <div className="coberturas_contenido">
                        <div className="contenido_detalle">
                            <div className="detalle_header">
                                <div className="icono">
                                    <img src={armaplan_llantarobada_png} alt="" ></img>
                                </div>
                                <div className="texto">Llanta robada</div>
                                <div className="accion" >
                                    <img src={(cobrLlantarobada == 1) ? comun_on_png : comun_off_png} alt="" onClick={(e) => procesaCobertura("llantarobada")}></img>
                                </div>
                            </div>
                            <div className="detalle_body">
                                <div className="body_texto">He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis</div>
                            </div>
                            <div className="detalle_footer">
                                <div className="footer_boton">
                                    <img src={comun_ver_menos} alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div className="contenido_detalle">
                            <div className="detalle_header">
                                <div className="icono">
                                    <img src={armaplan_choque_png} alt=""></img>
                                </div>
                                <div className="texto">Choque y/o pasarte la luz roja</div>
                                <div className="accion">
                                    <img src={(cobrChoque == 1) ? comun_on_png : comun_off_png} alt="" name="cobrChoque" onClick={(e) => procesaCobertura("choque")}></img>
                                </div>
                            </div>
                            <div className="detalle_body">
                                <div className="body_texto"></div>
                            </div>
                            <div className="detalle_footer">
                                <div className="footer_boton">
                                    <img src={comun_ver_mas} alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div className="contenido_detalle">
                            <div className="detalle_header">
                                <div className="icono">
                                    <img src={armaplan_atropello_png} alt="" ></img>
                                </div>
                                <div className="texto">Atropello en la vía Evitamiento</div>
                                <div className="accion">
                                    <img src={(cobrAtropello == 1) ? comun_on_png : comun_off_png} alt="" onClick={(e) => procesaCobertura("atropello")} ></img>
                                </div>
                            </div>
                            <div className="detalle_body">
                                <div className="body_texto"></div>
                            </div>
                            <div className="detalle_footer">
                                <div className="footer_boton">
                                    <img src={comun_ver_mas} alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row resumen_plan">
                        <div className="plan_detalle">
                            <div className="detalle_info">
                                <div className="info_monto">${Intl.NumberFormat("es-PE", { minimumFractionDigits: 2 }).format(cuotaMensual)}</div>
                                <div className="info_plazo">MENSUAL</div>                                
                            </div>
                        </div>
                        <button  className="plan_boton_accion" onClick={grabarMontos}>LO QUIERO</button>
                        <div className="contenedor"></div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Armatuplan
