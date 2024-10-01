import react, { useEffect, useState } from 'react';
import { Heading } from '../components/heading';
import { ButtonComponent } from '../components/button';
import { SubHeading } from '../components/subHeading';
import { InputBox } from '../components/inputbox';
import { BottomWarning } from '../components/bottomWarning';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setlastName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

 

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-300 ">
      <div className="w-[25%] h-[90%] flex flex-col items-center  bg-white rounded-lg shadow-sm">
        <Heading label={'Sign Up'}></Heading>
        <SubHeading label={'Enter your information to create an account'} />
        <InputBox
          label={'First Name'}
          placeholder={''}
          type={'text'}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></InputBox>
        <InputBox
          label={'Last Name'}
          placeholder={''}
          type={'text'}
          onChange={(e) => {
            setlastName(e.target.value);
          }}
        ></InputBox>
        <InputBox
          label={'Email'}
          type={'text'}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></InputBox>
        <InputBox
          label={'Password'}
          type={'text'}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></InputBox>
        <ButtonComponent
          label={'Sign Up'}
          onClick={async () => {
            const response = await axios.post('http://localhost:3000/api/vi/user/signup', {
              username,
              password,
              firstName,
              lastName,
            });

            localStorage.setItem('token', response.data.token);

          }}
        ></ButtonComponent>
        <BottomWarning label={'Login'} onClick={()=>{navigate("/login")}}></BottomWarning>
      </div>
    </div>
  );
};
