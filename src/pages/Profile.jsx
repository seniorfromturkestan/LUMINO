import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import CustomSelect from '../components/ui/CustomSelect';
import DateInput from '../components/ui/DateInput';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        firstName: 'Иван',
        lastName: 'Иванов',
        email: 'ivan.ivanov@example.com',
        role: 'student',
        phone: '+7 (999) 123-45-67',
        birthDate: '1995-06-15',
        university: 'SDU',
        faculty: 'IT',
        course: '3',
        group: 'BS-1'
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (field, value) => {
        setProfileData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSave = () => {
        console.log('Сохранение профиля:', profileData);
        setIsEditing(false);
        alert('Профиль успешно сохранен!');
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const roleOptions = [
        { value: 'student', label: 'Студент' },
        { value: 'teacher', label: 'Преподаватель' }
    ];

    const courseOptions = [
        { value: '1', label: '1 курс' },
        { value: '2', label: '2 курс' },
        { value: '3', label: '3 курс' },
        { value: '4', label: '4 курс' },
        { value: '5', label: '5 курс' },
        { value: '6', label: '6 курс' }
    ];

    return (
        <div className="min-h-screen  px-8 py-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-4 text-primary">
                        <h1 className="text-2xl font-semibold text-gray-900">Профиль</h1>
                        <div className="flex space-x-2">
                            {!isEditing ? (
                                <Button onClick={() => setIsEditing(true)}>
                                    Редактировать
                                </Button>
                            ) : (
                                <>
                                    <Button 
                                        onClick={handleCancel}
                                        className="bg-red-600"
                                    >
                                        Отмена
                                    </Button>
                                    <Button onClick={handleSave}>
                                        Сохранить
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

               <div className="space-y-12">
                    <div>
                        <h2 className="text-xl font-medium text-gray-900 mb-8">Личная информация</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Имя
                                </label>
                                {isEditing ? (
                                    <Input
                                        type="text"
                                        value={profileData.firstName}
                                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                                    />
                                ) : (
                                    <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                                        {profileData.firstName}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Фамилия
                                </label>
                                {isEditing ? (
                                    <Input
                                        type="text"
                                        value={profileData.lastName}
                                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                                    />
                                ) : (
                                    <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                                        {profileData.lastName}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Электронная почта
                                </label>
                                {isEditing ? (
                                    <Input
                                        type="email"
                                        value={profileData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                    />
                                ) : (
                                    <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                                        {profileData.email}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Телефон
                                </label>
                                {isEditing ? (
                                    <Input
                                        type="tel"
                                        value={profileData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                    />
                                ) : (
                                    <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                                        {profileData.phone}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Дата рождения
                                </label>
                                {isEditing ? (
                                    <DateInput
                                        type="date"
                                        value={profileData.birthDate}
                                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                                    />
                                ) : (
                                    <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                                        {new Date(profileData.birthDate).toLocaleDateString('ru-RU')}
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Роль
                                </label>
                                {isEditing ? (
                                    <CustomSelect
                                        value={profileData.role}
                                        onValueChange={(value) => handleInputChange('role', value)}
                                        options={roleOptions}
                                    />
                                ) : (
                                    <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                                        {profileData.role === 'student' ? 'Студент' : 'Преподаватель'}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-medium text-gray-900 mb-8">Учебная информация</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Университет
                                </label>
                                {isEditing ? (
                                    <Input
                                        type="text"
                                        value={profileData.university}
                                        onChange={(e) => handleInputChange('university', e.target.value)}
                                    />
                                ) : (
                                    <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                                        {profileData.university}
                                    </div>
                                )}
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Факультет
                                </label>
                                {isEditing ? (
                                    <Input
                                        type="text"
                                        value={profileData.faculty}
                                        onChange={(e) => handleInputChange('faculty', e.target.value)}
                                    />
                                ) : (
                                    <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                                        {profileData.faculty}
                                    </div>
                                )}
                            </div>

                            {profileData.role === 'student' && (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Курс
                                        </label>
                                        {isEditing ? (
                                            <CustomSelect
                                                value={profileData.course}
                                                onValueChange={(value) => handleInputChange('course', value)}
                                                options={courseOptions}
                                            />
                                        ) : (
                                            <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                                                {profileData.course} курс
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Группа
                                        </label>
                                        {isEditing ? (
                                            <Input
                                                type="text"
                                                value={profileData.group}
                                                onChange={(e) => handleInputChange('group', e.target.value)}
                                            />
                                        ) : (
                                            <div className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900">
                                                {profileData.group}
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;