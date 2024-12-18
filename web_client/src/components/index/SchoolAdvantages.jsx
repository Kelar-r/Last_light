import React from 'react';
import './SchoolAdvantages.css'; // Підключаємо стилі

const SchoolAdvantages = () => {
  const advantages = [
    {
      title: "Велика спільнота",
      description: "Наш ресурс має велику спільноту, яка прагне навчатися та ставати кожен день все краще. І звичайно кожен буде допомагати один одному",
      icon: "👩🏻‍🏫"
    },
    {
      title: "Сучасні технології навчання",
      description: "Ми впроваджуємо новітні технології та онлайн-платформи для ефективного і цікавого навчання.",
      icon: "💻"
    },
    {
      title: "Комфортна та безпечна атмосфера",
      description: "Наш ресурс створює комфортні умови для навчання та розвитку кожного в безпечному середовищі.",
      icon: "🏫"
    }
  ];

  return (
    <div className="advantages-container">
      {advantages.map((advantage, index) => (
        <div key={index} className="advantage-card">
          <div className="icon">{advantage.icon}</div>
          <h2 className="title">{advantage.title}</h2>
          <p className="description">{advantage.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SchoolAdvantages;
