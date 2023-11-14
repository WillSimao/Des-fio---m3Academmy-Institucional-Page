import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

import styles from './ContactForm.module.scss';
import FormSchema from '../../Schema/FormSchema';
import { useState } from "react";

interface IFormikValues {
    name: string;
    email: string;
    cpf: string;
    birthDate: string;  
    phoneNumber: string;
    instagram: string;
    acceptTerms: boolean;
};

const initialValues = {
    name: "",
    email: "",
    cpf: "",
    birthDate: "",
    phoneNumber: "",
    instagram: "",
    acceptTerms: false,
};

const ContactForm = () => {

    const [enviado, setEnviado] = useState(false);

    const handleSubmitForm = (values: IFormikValues, actions: FormikHelpers<IFormikValues>) => {
        console.log(values);
        actions.resetForm();
        setEnviado(true);
    };
  
    return (

        <div className={styles['container']}>

            <Formik onSubmit={handleSubmitForm} 
            initialValues={initialValues}
            validationSchema={FormSchema}
            >
                {({errors, touched}) => (
                     
                        <Form className={styles['container__form']}>
        
                        <h1 className={styles['container__form__title']}>Preencha o formulário</h1>
                        
                        <div className={styles['container__form__input']} >
                        <label htmlFor="name">Nome</label>
                          <ErrorMessage 
                          component="span" 
                          name="name" 
                          className={styles['container__form__input__feedback']}/>
                         <Field id="name" name="name" placeholder="Seu nome completo" className={errors.name && touched.name && styles['invalid']} />
                        </div>
                     
                        <div className={styles['container__form__input']} >
                        <label htmlFor="email">E-mail</label>
                         <ErrorMessage 
                         component="span" 
                         name="email" 
                         className={styles['container__form__input__feedback']} /> 
                         <Field id="email" name="email" placeholder="Seu e-mail" className={errors.email && touched.email && styles['invalid']} />
                        </div>
                    
                     
                        <div className={styles['container__form__input']} >
                        <label htmlFor="cpf">CPF</label>
                         <ErrorMessage 
                         component="span" 
                         name="cpf" 
                         className={styles['container__form__input__feedback']} />
                         <Field id="cpf" name="cpf" placeholder="000.000.000-00" className={errors.cpf && touched.cpf && styles['invalid']} />
                         </div> 
                     
                     
                         <div className={styles['container__form__input']} >
                        <label htmlFor="birthDate">Data de Nascimento:</label>
                         <ErrorMessage 
                         component="span" 
                         name="birthDate" 
                         className={styles['container__form__input__feedback']} />
                         <Field id="birthDate" name="birthDate" placeholder="00.00.0000" className={errors.birthDate && touched.birthDate && styles['invalid']} />
                         </div> 
                     
                     
                        <div className={styles['container__form__input']} >
                        <label htmlFor="phoneNumber">Telefone:</label>
                         <ErrorMessage 
                         component="span" 
                         name="phoneNumber"
                         className={styles['container__form__input__feedback']} />
                         <Field id="phoneNumber" name="phoneNumber" placeholder="(00) 00000-0000" className={errors.phoneNumber && touched.phoneNumber && styles['invalid']} />
                        </div>
                     
                     
                        <div className={styles['container__form__input']} >
                        <label htmlFor="instagram">Instagram</label>
                         <ErrorMessage 
                         component="span" 
                         name="instagram" 
                         className={styles['container__form__input__feedback']} />
                         <Field id="instagram" name="instagram" placeholder="@seuuser" className={errors.instagram && touched.instagram && styles['invalid']}  />
                         </div>
                         

                         <div className={styles['container__checkbox']}>
                            <label htmlFor="acceptTerms">
                            <span className={styles["container__checkbox__alert"]}>*</span>
                            <u>Declaro que li e aceito</u>
                            </label>
                            <Field
                            id="acceptTerms"
                            name="acceptTerms"
                            type="checkbox"
                            className={
                                errors.acceptTerms && touched.acceptTerms && styles['invalid']
                            }
                            />
                            <ErrorMessage
                            component="span"    
                            name="acceptTerms"
                            className={styles['container__checkbox__errorCheck']}
                            />
                            </div>

                        <div className={styles['container__button']} >
                            <button type="submit">cadastre-se</button>
                             {enviado ? (
                                <span className={styles['container__button__span']}>*Formulário enviado com sucesso!</span>
                            ) : ('')}
                        </div>
                     
                 </Form>
                )}  
            </Formik>
         </div>
    );  
};



export default ContactForm;


