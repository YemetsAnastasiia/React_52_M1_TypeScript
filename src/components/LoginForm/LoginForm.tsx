/* import { ChangeEvent, useState, FormEvent } from "react"; */
import { useFormik } from "formik";
import * as Yup from 'yup';

import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormContainer, Title, InputsContainer } from "./styles";
/* import { log } from "console"; */
import { LoginFormValues } from "./types";


function LoginForm() {
  // НАСТРОЙКА ФОРМЫ. useFormik как агрумент принимает объект настройки для определенной формы
  // При вызове useFormik возвращается объект, в котором хранятся значения из полей, ошибки , различн методы
  // для работы с Formik
  // в объекте два обязат свойства - initialValues и onSubmit



// --- СОЗДАНИЕ ВАЛИДАЦИОННОЙ СХЕМЫ С ПОМОЩЬЮ Yup
const validationSchema = Yup.object().shape({
email: Yup.string()
.required('Field email is requaired') // required - обязательное
.email('Field has type email')
.max(20, 'Max 20 symbols')
.min(10, 'Min 10 symbols')
.typeError('Email must be string') // помогает сгенерить тип ошибку, если не прошел тип 
,  

password: Yup.number().required('Field password is requaired')
.typeError('Passwort must be number')
.test('Check min password length', 'Min 10 symbols', (value) => {String(value).length >= 10}) //если вернет true то пройдет 
.test('Check max password length', 'Max 20 symbols', (value) =>String(value).length <= 20) // обяз чтобы вернулось true или false 
})




  const formik = useFormik({
    initialValues: {
      email: "", // email и password - это name из поля input (это ключ), а значение - initialValue
      password: "", // оба поля должны быть пустыми в начале
    } as LoginFormValues,
    validationSchema, // validationSchema - свойство, в знач кот нужно передать схаму для валидации 
    // onSubmit - функция, кот будет вызвана, когда произойдет событие submit Для формы
    // values - сохранятся значения из полей в момент клика на кнопку
    validateOnChange: false, // свойство validateOnChange - по умолч - true. если мы его делаем false
    onSubmit: (values: LoginFormValues) => {
      console.table(values);
    },
  });

  console.log(formik)  // в консоли можно посмотреть методы которые доступны

  return (
    //Для выполнения функции, кот прописана в свойстве onSubmit в начтройке formik, в атрибут onSubmit
    // для формы передаем formik.handleSubmit
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <InputsContainer>
        {/* <input onChange={(event: ChangeEvent<HTMLInputElement>)=>{console.log(event);
      }}/> */}

        {/* ДЛЯ КОНТРОЛЯ ПОЛЕЙ необходимо передать значения в prop value и onChange
      для value - formic.values.<name> - значение берется из name поля input 
        для onChange - formik.handleChange */}
        <Input
          name="email"
          label="Email *"
          value={formik.values.email}
          onChange={formik.handleChange} // ПОЧИТАТЬ ПРО ЭТОТ МЕТОД !!!
          placeholder="Enter your email"
          errorMessage={formik.errors.email}
        />
        
        <Input
          name="password"
          label="Password *"
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="Enter your password"
          errorMessage={formik.errors.password} // отображаем ошибку, если она будет через formik
        />
      </InputsContainer>
      <Button type="submit" name="Login" />
    </LoginFormContainer>
  );
}
export default LoginForm;

// контроль формы без использования библиоьтеки formic

/*  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>(""); */

/*   const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    // console.log(event);
    setEmail(event.target.value);
  }; */

/*   const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
 */
/*  const onLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
  }; */
