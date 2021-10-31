import React from 'react'
import Header from './header'
import './home.scss'
import home_prin_m_png from '../resources/home-prin-m.png'
import home_prin_d_png from '../resources/home-prin-d.png'
import home_tracking_png from '../resources/home-tracking.png'
const Home = () => {
    return (
        <>
            <Header />
            <div className="row home">
                <div className="col-12 d-md-none cont_prin_m">
                    <div className="row cont_prin_m_info">
                        <div className="col-8 cont_prin_m_info_mens">
                            <div className="NUEVO">¡NUEVO!</div>
                            <div>
                                <img src={home_tracking_png} alt="" ></img>
                            </div>
                            <div className="Cuentanos">Cuentanos donde le haras seguimiento a tu seguro</div>
                        </div>
                        <div className="col-4 cont_prin_m_info_imag">
                            <img src={home_prin_m_png} alt=""></img>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 d-none d-md-block cont_prin_izqr">
                    <img src={home_prin_d_png} alt=""></img>
                </div>
                <div className="col-12 col-md-6 form_datos">
                    <div className="row">
                        <div className="col-12 d-none d-md-block form_datos_space"></div>
                        <div className="col-12 d-none d-md-block col-md-4"></div>
                        <div className="col-12 col-md-8">

                            <div className="form_datos_titulo">Déjanos tus datos</div>

                            <div class="form_datos_cont">
                                <div class="form_datos_cont_ident">
                                    <div class="form_datos_cont_ident_tipo">
                                        <select name="cotz_tdoc" className="form-control" id="select">
                                            <option>DNI</option>
                                            <option>CE</option>
                                        </select>
                                        <div class="form_datos_cont_ident_simb">
                                            <div class="chevrot">
                                                <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.2943 1.23418C10.6148 1.56556 10.6148 2.097 10.2943 2.42837L6.09867 6.76598C5.76988 7.10589 5.23001 7.10589 4.90122 6.76598L0.705618 2.42837C0.385091 2.097 0.385091 1.56556 0.705618 1.23418C1.03441 0.894269 1.57428 0.894269 1.90307 1.23418L5.49995 4.9528L9.09682 1.23418C9.42561 0.894269 9.96549 0.894269 10.2943 1.23418Z" fill="#EF3340"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form_datos_cont_ident_sepr">
                                        <svg width="2" height="56" viewBox="0 0 2 56" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.666504 0V56" stroke="#C5CBE0" stroke-width="1.00694"></path></svg>
                                    </div>
                                    <div class="form_datos_cont_ident_detl">
                                        <input type="text" name="cotz_ndoc" className="form-control form_datos_cont_ident_detl_numr" id="cotz_ndoc" placeholder="Nro. de doc" />
                                    </div>
                                </div>

                                <div className="form_datos_cont_ident">
                                    <div class="form_datos_cont_ident_detl">
                                        <input type="text" name="cotz_ndoc" className="form-control form_datos_cont_ident_detl_otro" id="cotz_ndoc" placeholder="Celular" />
                                    </div>
                                </div>

                                <div className="form_datos_cont_ident">
                                    <div class="form_datos_cont_ident_detl">
                                        <input type="text" name="cotz_ndoc" className="form-control form_datos_cont_ident_detl_otro border-0" id="cotz_ndoc" placeholder="Placa" />
                                    </div>
                                </div>

                                <div className="form_datos_cont_terms">
                                    <div className="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label" for="flexCheckDefault">
                                            Acepto la <a href="#">Política de Protección de Datos Personales</a> y las <a href="#">Términos y Condiciones</a>
                                        </label>
                                    </div>
                                </div>

                                <button className="form_datos_cont_action">COTÍZALO</button>

                            </div>

                        </div>
                        <div className="col-12 d-none d-md-block col-md-4"></div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home


