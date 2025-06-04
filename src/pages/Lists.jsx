import React, { useState } from "react";

const teachersData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: "Рашидова Рашида Рашидовна",
  experience: `${(Math.random() * 10 + 1).toFixed(1)} лет`,
  program: "Английский язык",
  rating: (Math.random() * 2 + 3).toFixed(1),
}));

const Lists = () => {
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(teachersData.length / itemsPerPage);
  const paginatedData = teachersData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  return (
    <div className="p-10 max-w-8xl mx-auto">
      <h2 className="text-2xl font-semibold text-primary mb-6">Подходящие преподавателя</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border-gray-200 space-y-10">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b border-gray-200">
              <th className="py-3 px-4">№</th>
              <th className="py-3 px-4">ФИО</th>
              <th className="py-3 px-4">Стаж</th>
              <th className="py-3 px-4">Название программы</th>
              <th className="py-3 px-4">Рейтинг</th>
              <th className="py-3 px-4">Действие</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {paginatedData.map((teacher, idx) => (
              <tr key={teacher.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">{(page - 1) * itemsPerPage + idx + 1}</td>
                <td className="py-3 px-4">{teacher.name}</td>
                <td className="py-3 px-4">{teacher.experience}</td>
                <td className="py-3 px-4">{teacher.program}</td>
                <td className="py-3 px-4">{teacher.rating}</td>
                <td className="py-3 px-4 text-orange-500 font-medium cursor-pointer hover:underline">Связаться</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center gap-2 mt-6">
        <button
          className="px-2 py-1 text-sm  rounded hover:bg-gray-100"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          ←
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`w-8 h-8 text-sm rounded ${
              i + 1 === page
                ? "bg-blue-50 border border-blue-500 text-blue-700"
                : "hover:bg-gray-100 text-gray-700"
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="px-2 py-1 text-sm rounded hover:bg-gray-100"
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Lists;
