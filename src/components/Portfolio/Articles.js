import React, { useState } from "react";
import ArticleList from "./ArticleList";
import CategoryFilter from "./CategoryFilter";

function Articles(props) {
  const [filteredCategory, setArticles] = useState("all");

  const filterChangeHandler = (event) => {
    setArticles(event);
  };

  let filteredArticlesList = props.items;

  if (filteredCategory === "all") {
    filteredArticlesList = props.items.map((item) => {
      return item;
    });
  } else {
    filteredArticlesList = props.items.filter((item) => {
      return item.tag.includes(filteredCategory);
    });
  }

  //   const filteredArticlesList = props.items.filter((item) => {
  //     return item.tag.includes(filteredCategory);
  //   });

  return (
    <div id="article-container">
      <div className="container">
        <div className="row align-self-center">
          <div className="col-lg-12 col-md-12 col-sm-12 pt-2">
            <h2 className="text-white">Articles</h2>
          </div>

          <div className="pb-5">
            <CategoryFilter
              selected={filteredCategory}
              onFilterChange={filterChangeHandler}
            />

            <div className="container text-center">
              <div className="row align-items-center">
                <ArticleList items={filteredArticlesList} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
