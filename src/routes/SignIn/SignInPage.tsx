import { Form } from "react-router-dom";
import styles from "./SignInPage.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignInPage() {
  const formik = useFormik({
    initialValues: {
      phone: "",
      fullname: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .required("Enter your phone")
        .matches(
          /^(\+380)[0-9]{9}$/,
          "Inappropriate phone number format. Example: +380123456789"
        ),
      fullname: Yup.string().required("Enter your name"),
      email: Yup.string()
        .email("Введите корректный email")
        .required("Введите email"),
      password: Yup.string()
        .required("Введите пароль")
        .min(6, "Пароль должен содержать минимум 6 символов"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.inputWrapper}>
        <input
          id="phone"
          type="text"
          placeholder="Enter your phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div>{formik.errors.phone}</div>
        ) : null}
      </div>
      <div className={styles.inputWrapper}>
        <input
          id="fullname"
          type="text"
          placeholder="First and last name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullname}
        ></input>
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

// const BasicForm = ({values, errors, handleChange, handleBlur}) => {
//     return (
//         <Form className={styles.form}>
//             <div className={styles.container}>
//                 <div className={styles.inputWrapper}>
//                     <Field id="nameForm" type="text" name="name" className={styles.input}/>
//                     <label htmlFor="nameForm">Name</label>
//                     <ErrorMessage name="name" component={'span'} className={styles.error}/>
//                 </div>
//                 <div className={styles.inputWrapper}>
//                     <Field id="surnameForm" type="text" name="surname" className={styles.input}/>
//                     <label htmlFor="surnameForm">Surname</label>
//                     <ErrorMessage name="surname" component={'span'} className={styles.error}/>
//                 </div>
//                 <div className={styles.inputWrapper}>
//                     <Field id="ageForm" type="number" name="age" className={styles.input}/>
//                     <label htmlFor="ageForm">Age</label>
//                     <ErrorMessage name="age" component={'span'} className={styles.error}/>
//                 </div>
//                 <div className={styles.inputWrapper}>
//                     <Field id="addressForm" type="text" name="address" className={styles.input}/>
//                     <label htmlFor="addressForm">Address</label>
//                     <ErrorMessage name="address" component={'span'} className={styles.error}/>
//                 </div>
//                 <div className={styles.inputWrapper}>
//                     <PatternFormat
//                         id="phoneNumberForm"
//                         name="phoneNumber"
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className={styles.input}
//                         format="+(380) ##-###-##-##"
//                         allowEmptyFormatting
//                         mask="_"
//                         onValueChange={(val) => {
//                             values.phoneNumber = val.value;
//                         }}
//                     />
//                     <label htmlFor="phoneNumberForm">Phone</label>
//                     <ErrorMessage name="phoneNumber" component={'span'} className={styles.error}/>
//                 </div>
//             </div>
//            <button data-testid="submit-button" style={{backgroundColor: '#1e1e20'}} type="submit" className={buttonStyle.button}>Submit</button>
//         </Form>
//     )
// }
