import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";

// Pages
import NotFound from "./NotFound";

// Components
import Articles from "../components/Articles";

const Article = () => {
  // useParams is a hook that returns an object of key/value pairs of URL parameters
  // In this case, it will return an object with a key of 'name' and the value will be the article name
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  if (!article) {
    return <NotFound />;
  }
  // Filter out the current article from the list of articles to display other articles
  // This is done to avoid displaying the current article in the list of other articles
  const otherArticles = articleContent.filter((article) => article.name !== name);
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>{paragraph}</p>
      ))}
      <h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">Other Articles</h1>
      <div className="flex flex-wrap -m-4">
        <Articles articles={otherArticles} />
      </div>
    </>
  );
};

export default Article;