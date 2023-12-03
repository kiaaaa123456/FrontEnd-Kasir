// export const metadata = {
//   title: "Category",
// };
// import AddCategory from "./addCategory";
// import DeleteCategory from "./deleteCategory";
// import EditCategory from "./updateCategory";
// import axios from "axios";
// import Link from "next/link";
// import React from "react";

// type Category = {
//   id: number;
//   name: string;
// };

// const getCategory = async () => {
//   const res = await axios.get("http://127.0.0.1:8000/api/category2");
//   return res.data.data;
// };
// const CategoryList = async () => {
//   const category: Category[] = await getCategory();
//   return (
//     <div className="py-10 px-10">
//       <div className="py-2">
//         <AddCategory />
//       </div>
//       <table className="table table-zebra">
//         <thead>
//           <tr className="bg-base-200">
//             <th>No.</th>
//             <th>Nama Kategori</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {category.map((category, index) => (
//             <tr key={category.id}>
//               <td>{index + 1}</td>
//               <td>{category.name}</td>
//               <td className="flex">
//                 <EditCategory {...category}/>
//                 <DeleteCategory {...category}/>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };
// export default CategoryList;
"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Category = {
  id: number;
  name: string;
};

const getCategory = async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/category2");
  return res.data.data;
};

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const colors = ["#007bff", "#28a745", "#ffc107", "#dc3545", "#17a2b8"];

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories: Category[] = await getCategory();
      setCategories(fetchedCategories);
    };
    fetchCategories();
  }, []);

  const handleClick = (categoryName: string) => {
    console.log(`Category ${categoryName} clicked!`);
  };

  return (
    <div className="py-10 px-10">
      <b>Pilih Kategori</b>
      <div
        className="category-list"
        style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
      >
        {categories.map((category, index) => (
          <button
            className="category-item"
            key={category.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: colors[index % colors.length],
            }}
            onClick={() => handleClick(category.name)}
          >
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
