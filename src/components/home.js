import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CotzContext from '../context/cotz/cotz_context';
import Header from './header'
import './home.scss'
import home_prin_m_png from '../resources/home-prin-m.png'
import home_prin_d_png from '../resources/home-prin-d.png'
import home_tracking_png from '../resources/home-tracking.png'

import { useForm } from 'react-hook-form';

const Home = () => {
    let history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { prospectList, getProspectList, getProspect } = useContext(CotzContext);

    const onSubmit = (data) => {

        let prosId = selectProspectId();
        getProspect(prosId, data);
    
        history.push("/armatuplan");
    }

    useEffect(() => {
        getProspectList();
    }, []);

    const selectProspectId = () => {
        let rtrn_value = 0;
        let pros_selc = [];

        if (prospectList.rows) {
            pros_selc = Object.values(prospectList.rows).filter(pros => pros.cotz_docs === document.getElementById('cotz_ndoc').value);
        }

        if (pros_selc.length > 0) {
            //pros_id = pros_selc.map((item) => item.cotz_ctrl).toString();
            rtrn_value = pros_selc[0].cotz_ctrl;
        }

        return rtrn_value;

    }

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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="form_datos_cont">
                                    <div class="form_datos_cont_ident">
                                        <div class="form_datos_cont_ident_tipo">
                                            <select name="cotz_tdoc" className="form-control" id="cotz_selt"
                                            {...register("cotz_tdoc")}
                                            >
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
                                            <input name="cotz_ndoc" className="form-control form_datos_cont_ident_detl_numr" id="cotz_ndoc"
                                                placeholder="Nro. de doc" onBlur={selectProspectId}
                                                {...register("cotz_ndoc", { required: true, maxLength: 12, pattern: /^[a-z0-9]+$/i})}
                                            />
                                        </div>
                                    </div>
                                    <span className="text-danger text-small d-block mb-2">
                                        {errors.cotz_ndoc?.type === "required" && "Escriba número de documento"}
                                    </span>

                                    <div className="form_datos_cont_ident">
                                        <div class="form_datos_cont_ident_detl">
                                            <input name="cotz_telf" className="form-control form_datos_cont_ident_detl_otro" id="cotz_telf" placeholder="Celular"
                                            {...register("cotz_telf", { required: true, maxLength: 15})}
                                            />
                                        </div>
                                    </div>
                                    <span className="text-danger text-small d-block mb-2">
                                        {errors.cotz_telf?.type === "required" && "Escriba su numero de teléfono"}
                                    </span>

                                    <div className="form_datos_cont_ident">
                                        <div class="form_datos_cont_ident_detl">
                                            <input name="cotz_placa" className="form-control form_datos_cont_ident_detl_otro" id="cotz_placa" placeholder="Placa"
                                            {...register("cotz_placa", { required: true, maxLength: 7})}
                                            />
                                        </div>
                                    </div>
                                    <span className="text-danger text-small d-block mb-2">
                                        {errors.cotz_placa?.type === "required" && "Escriba la placa de su vehículo"}
                                    </span>

                                    <div className="form_datos_cont_terms">
                                        <div className="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="terms_condc" name="terms_condc"
                                            {...register("terms_condc", { required: true, maxLength: 7})}
                                            />
                                            <label class="form-check-label" for="flexCheckDefault">
                                                Acepto la <a href="#">Política de Protección de Datos Personales</a> y las <a href="#">Términos y Condiciones</a>
                                            </label>
                                        </div>
                                    </div>
                                    <span className="text-danger text-small d-block mb-2">
                                        {errors.terms_condc?.type === "required" && "Acepte los términos y condiciones"}
                                    </span>

                                    <button type="submit" className="form_datos_cont_action">COTÍZALO</button>
                                    
                                </div>
                            </form>
                        </div>
                        <div className="col-12 d-none d-md-block col-md-4"></div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home



