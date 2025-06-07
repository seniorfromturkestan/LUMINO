import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import CustomSelect from "./ui/CustomSelect";
import PhoneInput from "./ui/PhoneInput";
import DateInput from "./ui/DateInput";
import TeacherFormStepTwo from "./TeacherFormStepTwo";

const TeacherForm = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    lastName: "",
    firstName: "",
    email: "",
    birthDate: "",
    phone: "",
    city: "",
    university: "",
    educationLevel: "",
    experience: "",
    price: "",
    studyFormat: "",
    grade: "",
    language: "",
    subjects: "",
    password: "",
    confirmPassword: "",
  });
  const [agreed, setAgreed] = useState(false);

  const handleChange = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = () => {
    console.log("Teacher registration:", { ...form, agreed });
  };

  if (step === 2) {
    return <TeacherFormStepTwo onBack={() => setStep(1)} onSubmit={handleSubmit} />;
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-orange-500 text-white text-md flex items-center justify-center">1</div>
          <span className="text-primary font-medium text-sm md:text-base">Личные данные</span>
        </div>
        <div className="h-px w-12 bg-gray-300" />
        <div className="flex items-center space-x-2 text-gray-300">
          <div className="w-8 h-8 rounded-full border border-gray-300 text-md flex items-center justify-center">2</div>
          <span className="font-medium text-sm md:text-base">Обучение</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4">
        <Input label="Фамилия" placeholder="Введите вашу фамилию" required value={form.lastName} onChange={handleChange("lastName")} />
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4">
        <PhoneInput
            label="Телефон"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            required
        />
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CustomSelect
          label="Университет"
          value={form.university}
          onValueChange={(val) => setForm((f) => ({ ...f, university: val }))}
          required
          placeholder="Выберите университет"
          options={[
            { value: "kaznu", label: "КазНУ" },
            { value: "kbtuu", label: "КБТУ" },
            { value: "enu", label: "ЕНУ" },
          ]}
        />

        <CustomSelect
          label="Уровень образования"
          value={form.educationLevel}
          onValueChange={(val) => setForm((f) => ({ ...f, educationLevel: val }))}
          required
          placeholder="Выберите уровень"
          options={[
            { value: "bachelor", label: "Бакалавр" },
            { value: "master", label: "Магистр" },
            { value: "phd", label: "PhD" },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-4">
        <Input label="Стаж" placeholder="Стаж" required value={form.experience} onChange={handleChange("experience")} />
        <Input label="Цена за урок" placeholder="Введите цену за урок" required value={form.price} onChange={handleChange("price")} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

        <CustomSelect
          label="Класс"
          value={form.grade}
          onValueChange={(val) => setForm((f) => ({ ...f, grade: val }))}
          required
          placeholder="Выберите класс"
          options={Array.from({ length: 11 }, (_, i) => ({
            value: `${i + 1}`,
            label: `${i + 1} класс`,
          }))}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <CustomSelect
          label="Предметы"
          value={form.subjects}
          onValueChange={(val) => setForm((f) => ({ ...f, subjects: val }))}
          required
          placeholder="Выберите предметы"
          options={[
            { value: "math", label: "Математика" },
            { value: "physics", label: "Физика" },
            { value: "chemistry", label: "Химия" },
          ]}
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

      <div className="flex items-center space-x-2">
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

      <div className="flex pt-2 justify-end">
        <Button onClick={() => setStep(2)}>Далее</Button>
      </div>
    </div>
  );
};

export default TeacherForm;
