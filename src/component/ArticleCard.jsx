import React from "react";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({ image, title, description, link }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(link)}
      className="cursor-pointer max-w-xs rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-[#DCE8F3] border border-iconig"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb- text-center h-28 w-auto">{title}</h3>
        <p className="text-black text-sm text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
