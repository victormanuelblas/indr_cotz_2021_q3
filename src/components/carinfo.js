import React from 'react';

import './carinfo.scss';

import Header from './header'

import carinfo_icon_car_svg from '../resources/carinfo-icon-car.svg';
import armaplan_llantarobada_png from '../resources/armaplan-icon-theft.png';
import armaplan_choque_png from '../resources/armaplan-icon-damage.png';
import armaplan_atropello_png from '../resources/armaplan-icon-perdidatotal.png';

import comun_off_png from '../resources/common-off.png';
import comun_on_png from '../resources/common-on.png';

import comun_ver_mas from '../resources/common-ver-mas.png'
import comun_ver_menos from '../resources/common-ver-menos.png'

const CarInfo = () => {
    
    return (
        <>
            <Header />
            <div className="row carinfo">
                <div className="col-12 carinfo_prin_m">
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
                                <div className="card_info_placa">Placa: C2U-114</div>
                                <div className="card_info_detalle">Wolkswagen 2019 Golf</div>
                            </div>
                        </div>
                    </div>

                    <div className="Group_16903">
                        <div className="suma_asegurada">Indica la suma asegurada</div>
                        <div className="montos">
                            <div className="minimo">MIN $12.500</div>
                            <p className="separador"></p>
                            <div className="maximo">MAX $16.500</div>
                        </div>
                    </div>

                    <div className="Group_16909">
                        <div className="acciones">

                            <div className="gl_remove">
                            </div>

                            <div className="monto">$ 14,300</div>

                            <div className="gl_add">
                            </div>

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
                                <div className="accion">
                                    <img src={comun_on_png} alt="" ></img>
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
                                    <img src={armaplan_choque_png} alt="" ></img>
                                </div>
                                <div className="texto">Choque y/o pasarte la luz roja</div>
                                <div className="accion">
                                    <img src={comun_off_png} alt="" ></img>
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
                                    <img src={comun_off_png} alt="" ></img>
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
                                <div className="info_monto">$35.00</div>
                                <div className="info_plazo">MENSUAL</div>                                
                            </div>
                        </div>
                        <button  className="plan_boton_accion">LO QUIERO</button>
                        <div className="contenedor"></div>
                    </div>

                </div>
            </div>





            <div className="row Caso1_SinDatos_D">
                <div className="col-3 col-md-3 d-none d-md-block Rectangle">
                    <div className="Wizard">
                        <div className="Part_done">
                            <div className="Icon_default">
                                <p className="Ellipse_81">1</p>
                            </div>
                            <div className="Datos_del_auto">Datos del auto</div>
                        </div>
                        <div className="Part_next">
                            <div className="Icon_default">
                                <p className="Ellipse_80">2</p>
                            </div>
                            <div className="Arma_tu_plan">Arma tu plan</div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-9">
                    <div className="row">
                        <div className="col-9">
                            <div className="icon_Back">
                                <div className="Back">
                                    <p className="Ellipse">
                                    </p>
                                </div>
                                <div className="gl_arrow_left">
                                    <div className="chevrot">
                                        <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.06012 0.429053C4.8133 0.190316 4.41747 0.190316 4.17065 0.429053L0.939884 3.55405C0.686704 3.79894 0.686705 4.20106 0.939884 4.44595L4.17065 7.57095C4.41747 7.80968 4.8133 7.80968 5.06012 7.57095C5.3133 7.32606 5.3133 6.92394 5.06012 6.67905L2.29039 4L5.06012 1.32095C5.31329 1.07606 5.31329 0.673943 5.06012 0.429053Z" fill="#EF3340"></path></svg>
                                    </div>
                                </div>
                                <div className="Step">VOLVER</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <div className="Hello">
                                <p>
                                    <span className="H_title">Hola,</span><span id="pros_name" className="H_name">Blas!</span>
                                </p>
                                <p className="H_complete">Completa los datos de tu auto</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <div className="Dropdown_Filled">
                                <div className="Textbox">
                                    <div className="Label">Año</div>
                                    <div className="Input">
                                        <select className="form-select" name="cotz_year">
                                            <option value="2019">2014</option>
                                            <option value="2019">2015</option>
                                            <option value="2019">2016</option>
                                            <option value="2019">2017</option>
                                            <option value="2019">2018</option>
                                            <option value="2019">2019</option>
                                            <option value="2019">2020</option>
                                            <option value="2019">2021</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="Dropdown_Filled">
                                <div className="Textbox">
                                    <div className="Label">Marca</div>
                                    <div className="Input">
                                        <select className="form-select" name="cotz_brand">
                                            <option value="Volswagen">Volswagen</option>
                                            <option value="Volvo">Volvo</option>
                                            <option value="Mazda">Mazda</option>
                                            <option value="Hyunudai">Hyundai</option>
                                            <option value="Chery">Chery</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 Group_Ayuda">
                            <div className="row">
                                <div className="col-8 col-md-8 d-none d-md-block Group_Ayuda_Prin">
                                    <div className="Group_Ayuda_Title">
                                        <span>AYUDA</span>
                                    </div>
                                    <div className="Group_Ayuda_Detail">
                                        <div className="Detail_Text">
                                            No encuentras el modelo?
                                        </div>
                                        <div className="Detail_Icon">
                                            <img src={carinfo_icon_car_svg}></img>
                                        </div>
                                    </div>
                                    <div className="Group_Ayuda_Link">
                                        <a href="/">CLICK AQUI</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-8 d-block d-md-none Group_Ayuda_Cont_Mobile">
                                    <div className="Group_Ayuda_Cont_Mobile_Image">
                                        <img src={carinfo_icon_car_svg}></img>
                                    </div>
                                    <div className="Group_Ayuda_Cont_Mobile_Text">
                                        <div>
                                            No encuentras el modelo?
                                        </div>
                                        <div className="Group_Ayuda_Link">
                                            <a href="/">CLICK AQUI</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 d-none d-md-block">
                            <div className="Box-Separator-1"></div>
                        </div>
                    </div>
                    <div className="row Group_Gas">
                        <div className="row">
                            <div className="col-12 col-md-2 Group_Gas_Title">¿Tu auto es a gas?</div>
                            <div className="col-12 col-md-3 Group_Gas_Options">
                                <div>
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" />
                                    <label className="form-check-label" for="flexRadioDefault1">Si</label>
                                </div>
                                <div>
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" checked />
                                    <label className="form-check-label" for="flexRadioDefault2">No</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 d-none col-md-8 d-md-block Group_Gas_Separator"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 col-md-3">
                            <div className="Group_Values">
                                <div className="Amount_MaxMin">
                                    <div className="Amount_MaxMin_Text">Indica la suma asegurada</div>
                                    <div className="Amount_Values">
                                        <div className="Amount_Value">MIN $12,500</div>
                                        <div className="Amount_Values_Sep"></div>
                                        <div className="Amount_Value">MAX $16,500</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                            <div className="Group_Values">
                                <div className="Amount_Changes">
                                    <div className="Amount_Changes_Cont">
                                        <div className="row Cont_Process">
                                            <div className="col-1 col-md-2 Value_remove">
                                                <b>—</b>
                                            </div>
                                            <div className="col-9 col-md-6 Cont_Process_Value">
                                                <span>$ 14,300</span>
                                            </div>
                                            <div className="col-1 col-md-2 Value_add">
                                                <b>+</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-8 d-none d-md-block">
                            <div className="Box-Separator-1"></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-3">
                            <button className="Primary_L_Defaulticon_right_56px">

                                <div className="__atom_button_radius_8px">
                                    <div className="__atom_button">

                                        <div className="Content">
                                            <div className="Text">CONTINUAR</div>
                                            <div className="gl_arrow_right">
                                                <div className="chevrot">
                                                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.253179 0.238737C0.582269 -0.079579 1.11004 -0.079579 1.43913 0.238737L5.74682 4.4054C6.08439 4.73192 6.08439 5.26808 5.74682 5.5946L1.43913 9.76126C1.11004 10.0796 0.582268 10.0796 0.253179 9.76126C-0.0843929 9.43474 -0.0843929 8.89859 0.253179 8.57207L3.94615 5L0.253179 1.42793C-0.0843929 1.10141 -0.0843929 0.565257 0.253179 0.238737Z" fill="white"></path></svg>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarInfo
