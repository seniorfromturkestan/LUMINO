import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import CustomSelect from "./ui/CustomSelect";
import DateInput from "./ui/DateInput";

const StudentForm = () => {
  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    email: "",
    birthDate: "",
    grade: "",
    language: "",
    subjects: "",
    studyFormat: "",
    city: "",
    studyGoal: "",
    password: "",
    confirmPassword: "",
  });
  const [agreed, setAgreed] = useState(false);

  const handleChange = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log("Student registration:", { ...form, agreed });
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4">
        <Input label="Фамилия" required placeholder="Введите вашу фамилию" value={form.lastName} onChange={handleChange("lastName")} />
        <Input label="Имя" required placeholder="Введите ваше имя" value={form.firstName} onChange={handleChange("firstName")} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4">
        <Input type="email" label="Почта" placeholder="Введите вашу почту" required value={form.email} onChange={handleChange("email")} />
        <DateInput
            label="Дата рождения"
            value={form.birthDate}
            onChange={(e) => setForm((prev) => ({ ...prev, birthDate: e.target.value }))}
            required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CustomSelect
          label="Класс"
          value={form.grade}
          onValueChange={(val) => setForm((f) => ({ ...f, grade: val }))}
          required
          placeholder="Выберите свой класс"
          options={Array.from({ length: 11 }, (_, i) => ({
            value: `${i + 1}`,
            label: `${i + 1} класс`,
          }))}
        />

        <CustomSelect
          label="Языки"
          value={form.language}
          onValueChange={(val) => setForm((f) => ({ ...f, language: val }))}
          required
          placeholder="Выберите язык преподавания"
          options={[
            { value: "ru", label: "Русский" },
            { value: "kz", label: "Казахский" },
            { value: "en", label: "Английский" },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CustomSelect
          label="Предметы"
          value={form.subjects}
          onValueChange={(val) => setForm((f) => ({ ...f, subjects: val }))}
          required
          placeholder="Выберите предмет"
          options={[
            { value: "math", label: "Математика" },
            { value: "physics", label: "Физика" },
            { value: "chemistry", label: "Химия" },
          ]}
        />

        <CustomSelect
          label="Формат обучения"
          value={form.studyFormat}
          onValueChange={(val) => setForm((f) => ({ ...f, studyFormat: val }))}
          required
          placeholder="Выберите формат"
          options={[
            { value: "online", label: "Онлайн" },
            { value: "offline", label: "Офлайн" },
            { value: "hybrid", label: "Смешанный" },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CustomSelect
          label="Город"
          value={form.city}
          onValueChange={(val) => setForm((f) => ({ ...f, city: val }))}
          required
          placeholder="Выберите город"
          options={[
            { value: "almaty", label: "Алматы" },
            { value: "astana", label: "Астана" },
            { value: "shymkent", label: "Шымкент" },
          ]}
        />

        <CustomSelect
          label="Выберите вашу цель обучения"
          value={form.studyGoal}
          onValueChange={(val) => setForm((f) => ({ ...f, studyGoal: val }))}
          required
          placeholder="Выберите цель"
          options={[
            { value: "school", label: "Школьная программа" },
            { value: "university", label: "Подготовка к университету" },
            { value: "hobby", label: "Для себя" },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4">
        <Input
          label="Пароль"
          isPassword={true}
          type="password"
          required
          value={form.password}
          onChange={handleChange("password")}
        />
        <Input
          label="Подтвердить пароль"
          isPassword={true}
          type="password"
          required
          value={form.confirmPassword}
          onChange={handleChange("confirmPassword")}
        />
      </div>

      <div className="flex items-center space-x-2  mb-10">
        <label htmlFor="agreement" className="flex items-center cursor-pointer space-x-2">
          <div className="relative">
            <input
              type="checkbox"
              id="agreement"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="peer hidden"
            />
            <div className="w-5 h-5 rounded border border-gray-300 peer-checked:bg-orange-500 flex items-center justify-center transition">
              {agreed && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <span className="text-sm text-gray-600">
            Я согласен(на) с{" "}
            <a href="#" className="text-secondary hover:text-orange-600">
              политикой конфиденциальности
            </a>
          </span>
        </label>
      </div>

      <Button onClick={handleSubmit}>Зарегистрироваться</Button>
    </div>
  );
};

export default StudentForm;
