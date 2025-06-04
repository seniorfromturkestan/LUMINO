import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import FileInput from "./ui/FileInput";
import CustomSelect from "./ui/CustomSelect";


const TeacherFormStepTwo = ({ onBack, onSubmit }) => {
  const [form, setForm] = useState({
    lastJobs: "",
    autobiography: "",
    teachingGoal: "",
    teachingMethods: "",
    timezone: "",
    diplomaDescription: "",
    demoLesson: null,
    diplomas: [],
    avatar: null,
  });

  const handleChange = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = () => {
    onSubmit(form);
  };

  return (
    <div className="space-y-3">
        <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-2 text-gray-300">
            <div className="w-8 h-8 rounded-full border border-secondary text-xs flex items-center justify-center">
            <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <span className="text-primary font-medium">Личные данные</span>
            </div>
            <div className="h-px w-12 bg-orange-500" />
            <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-orange-500 text-white  text-md flex items-center justify-center">2</div>
            <span className="font-medium">Обучение</span>
            </div>
        </div>
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Опишите последние три работы"
          placeholder="Опишите"
          required
          value={form.lastJobs}
          onChange={handleChange("lastJobs")}
        />
        <Input
          label="Автобиография"
          placeholder="Автобиография"
          subLabel="до 100 слов"
          required
          value={form.autobiography}
          onChange={handleChange("autobiography")}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Цель преподавания"
          subLabel="до 50 слов"
          placeholder="Опишите"
          value={form.teachingGoal}
          required
          onChange={handleChange("teachingGoal")}
        />
        <Input
          label="Методы преподавания"
          placeholder="Введите методы"
          value={form.teachingMethods}
          required
          onChange={handleChange("teachingMethods")}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
      <CustomSelect
        label="Часовой пояс"
        value={form.timezone}
        onValueChange={(val) => setForm((f) => ({ ...f, timezone: val }))}
        required
        placeholder="Выберите"
        options={[
            { value: "GMT+5", label: "GMT+5 (Астана)" },
            { value: "GMT+4", label: "GMT+4 (Махачкала)" },
        ]}
        />

            <FileInput
            label="Дипломы"
            subLabel="до 3 файлов"
            multiple
            accept=".pdf,.jpg,.png"
            required
            onChange={(e) => setForm((f) => ({ ...f, diplomaFiles: e.target.files }))}
            />

      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Описание дипломов"
          placeholder="Введите описание"
          value={form.diplomaDescription}
          required
          onChange={handleChange("diplomaDescription")}
        />

            <FileInput
            label="Демо урок"
            subLabel="до 3 видео, до 3 минут"
            multiple
            accept="video/*"
            required
            onChange={(e) => setForm((f) => ({ ...f, demoLesson: e.target.files }))}
            />
      </div>

      
            <FileInput
            label="Фото профиля"
            accept="image/*"
            onChange={(e) => setForm((f) => ({ ...f, avatar: e.target.files?.[0] }))}
            required
            />

      <div className="flex mt-6 justify-between space-x-2">
        <Button onClick={onBack} variant="outline">Назад</Button>
        <Button onClick={handleSubmit}>Зарегистрироваться</Button>
      </div>
    </div>
  );
};

export default TeacherFormStepTwo;