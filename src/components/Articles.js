import React from "react";
import { Link } from "react-router-dom";

// With the articles prop, we can now use this component to display the articles in the ArticlesList component
// and also in the Article component. This way, we can reuse the same code to display the articles in different places.
const Articles = ({articles}) => {
    return (
        <>
            {articles.map((article, index) => (
            <div className="p-4 md:w-1/2" key={index}>
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Link to={`/article/${article.name}`}>
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={article.thumbnail} alt="blog" />
                </Link>
                <div className="p-6">
                  <Link key ={index} to={`/article/${article.name}`} className="flex items-center flex-wrap">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">{article.title}</h3>
                  </Link>
                  <p className="leading-relaxed mb-3">
                    {article.content[0].substring(0, 115)}...
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Link className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" to={`/article/${article.name}`}>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
    )
}

export default Articles;