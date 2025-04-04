import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";

const Article = () => {
  // useParams is a hook that returns an object of key/value pairs of URL parameters
  // In this case, it will return an object with a key of 'name' and the value will be the article name
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  if (!article) {
    return <h1>Article does not exist</h1>;
  }
  return (
    <div>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Article;