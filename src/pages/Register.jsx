import { useState } from "react";
import loginImg from "../assets/loginImg.png";
import StudentForm from "../components/StudentForm";
import TeacherForm from "../components/TeacherForm";

const Register = () => {
  const [role, setRole] = useState("Ученик");

  return (
    <div className="flex min-h-screen">
      <div className="w-full lg:w-3/5 p-8 md:p-12 bg-white flex items-center">
        <div className="max-w-2xl mx-auto w-full text-primary">
          <h1 className="text-2xl font-semibold mb-8">Регистрация</h1>

          <div className="mb-6">
            <label className="block text-sm mb-2">
              <span className="text-red-500">*</span> Выберите роль
            </label>
            <div className="flex">
                {["Преподаватель", "Ученик"].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`flex-1 py-2 px-4 text-sm border border-gray-300 ${
                      role === r
                        ? r === "Ученик"
                          ? "bg-[#EE4C58] text-white"
                          : "bg-[#EE4C58] text-white"
                        : "bg-white text-gray-500"
                    } ${r === "Преподаватель" ? "rounded-l-sm" : "rounded-r-sm"}`}
                  >
                    {r}
                  </button>
                ))}
              </div>
          </div>

          {role === "Ученик" ? <StudentForm /> : <TeacherForm />}
        </div>
      </div>

      <div className="hidden lg:flex w-2/5 bg-gradient-to-br mt-12 from-[#FFEDBF] to-[#FFE1D7] rounded-tl-[80px] items-start justify-center pt-44 pr-8">
        <img src={loginImg} alt="Lumino Logo" className="w-[270px] h-[270px] object-contain" />
      </div>
    </div>
  );
};

export default Register;
