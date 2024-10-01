import { InputBox } from './inputbox';
import { ButtonComponent } from './button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export const UserComponent = ({ label, placeholder, Name }) => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/vi/user/bulk?filter=' + filter).then((response) => {
      setUsers(response.data.user);
    });
  }, [filter]);

  const onChangeHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="flex flex-col justify-start w-[90%]">
      <InputBox label={label} placeholder={placeholder} onChange={onChangeHandler} />

      <div className="flex flex-col justify-between">
        {users.map((e) => {
          return <User user={e} key={e._id} btnText={'Send Money'} />;
        })}
      </div>
    </div>
  );
};

function User({ user, btnText, userData }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    console.log(user);
    navigate('/sendmoney', { state: { userId: user._id, firstName: user.firstName, lastName: user.lastName } });
  };
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <div className="rounded-full p-2 w-10 h-10 mr-2 text-center bg-gray-300">
          <div className="flex flex-col  justify-center h-full">{user.firstName[0]}</div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-full">
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none 
                    focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 
                    me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700
                    dark:border-gray-700 w-[80%] transition ease-in-out hover:scale-105"
          onClick={clickHandler}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
