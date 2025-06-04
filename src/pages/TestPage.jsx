import React, { useState } from 'react';
import Button from '../components/ui/Button';

const TestInterface = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    
    const questions = [
        {
            id: 1,
            text: "Я испытываю интерес к темам, которые изучаю",
            options: [
                "Согласен",
                "Частично согласен", 
                "Нейтрально",
                "Частично не согласен",
                "Не согласен"
            ]
        },
        {
            id: 2,
            text: "Мне нравится решать сложные задачи",
            options: [
                "Согласен",
                "Частично согласен",
                "Нейтрально", 
                "Частично не согласен",
                "Не согласен"
            ]
        },
        {
            id: 3,
            text: "Я предпочитаю работать в команде",
            options: [
                "Согласен",
                "Частично согласен",
                "Нейтрально",
                "Частично не согласен", 
                "Не согласен"
            ]
        },
        {
            id: 4,
            text: "Мне важно получать обратную связь о моей работе",
            options: [
                "Согласен",
                "Частично согласен",
                "Нейтрально",
                "Частично не согласен",
                "Не согласен"
            ]
        },
        {
            id: 5,
            text: "Я стремлюсь к постоянному самосовершенствованию",
            options: [
                "Согласен",
                "Частично согласен",
                "Нейтрально",
                "Частично не согласен",
                "Не согласен"
            ]
        }
    ];

    const handleAnswerChange = (questionId, answer) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };


    const handleSubmit = () => {
        console.log('Ответы:', answers);
        alert('Тест завершен! Результаты сохранены.');
    };

    const currentQ = questions[currentQuestion];
    const isLastQuestion = currentQuestion === questions.length - 1;
    const currentAnswer = answers[currentQ.id];

    return (
        <div className="min-h-screen bg-gray-100 px-8 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-20 w-3xl mx-auto mt-20">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-2xl font-semibold text-primary">Тест</h1>
                        <span className="text-gray-500">Вопросы {currentQuestion + 1} из {questions.length}</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2 ">
                        <div 
                            className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-16 mb-20">
                    <div>
                        <h2 className="text-2xl text-center font-semibold text-primary leading-relaxed">
                            {currentQ.text}
                        </h2>
                    </div>

                    <div className="flex justify-between gap-4">
                    {currentQ.options.map((option, index) => (
                        <label key={index} className="flex items-center space-x-4 cursor-pointer group">
                        <div className="relative">
                            <input
                            type="radio"
                            name={`question-${currentQ.id}`}
                            value={option}
                            checked={currentAnswer === option}
                            onChange={(e) => handleAnswerChange(currentQ.id, e.target.value)}
                            className="sr-only"
                            />
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                            currentAnswer === option
                                ? 'border-orange-500 bg-orange-500'
                                : 'border-gray-300 bg-white group-hover:border-orange-300'
                            }`}>
                            {currentAnswer === option && (
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                            )}
                            </div>
                        </div>
                        <span className="text-primary font-normal text-base">{option}</span>
                        </label>
                    ))}
                    </div>
                </div>

                <div className="flex w-96 mx-auto justify-center mt-10">
                    <Button
                        onClick={isLastQuestion ? handleSubmit : handleNext}
                        disabled={!currentAnswer}
                        className={`w-64 rounded-sm font-medium ${
                        !currentAnswer && 'opacity-50 cursor-not-allowed'
                        }`}
                    >
                        {isLastQuestion ? "Завершить тест" : "Следующий"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TestInterface;