import React from "react";

function CategoryFilter({categories, selectedCategory, onCategorySelect}) {
  return (
    <div className="categories">
      {categories.map(category => (
        <button key={category} className={category === selectedCategory ? "selected" : ""} onClick={()=>onCategorySelect(category)}>
          {category}
        </button>
      ))}
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
