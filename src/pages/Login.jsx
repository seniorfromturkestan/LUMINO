import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import loginImg from "../assets/loginImg.png";
import { Link } from "react-router-dom";

const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-full lg:w-3/5 p-8 md:p-12 bg-white flex items-center text-primary">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-2xl font-semibold mb-8">Авторизация</h1>

          <div>
            <Input
              label="Почта"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Введите вашу почту"
            />

            <Input
              label="Пароль"
              isPassword={true}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
            />

            <div className="text-right mb-6">
              <a href="#" className="text-sm text-gray-300 hover:text-gray-700">
                Забыли пароль?
              </a>
            </div>

            <Button onClick={handleSubmit}>Войти</Button>
          </div>

          <div className="mt-10">
            <span className="text-sm text-gray-600">Еще нет аккаунта? </span>
            <Link to='/registration' className="text-sm text-orange-500 hover:text-orange-600 font-medium">
              Зарегистрироваться
            </Link>
          </div>

          <div className="pt-16 text-xs text-gray-400">
            © Lumino Все права защищены
          </div>
        </div>
      </div>

      <div className="hidden lg:flex w-2/5 bg-gradient-to-br mt-12 from-[#FFEDBF] to-[#FFE1D7] rounded-tl-[80px] items-start justify-center pt-44 pr-8">
        <img src={loginImg} alt="Lumino Logo" className="w-[270px] h-[270px] object-contain flex items-center justify-center" />
      </div>
    </div>
  );
};

export default Authorization;
