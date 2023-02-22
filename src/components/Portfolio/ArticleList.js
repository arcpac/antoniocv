import ArticleItem from './ArticleItems';
function ArticleList(props) {
    if(props.items.length === 0){
        return <div className="col text-white text-lg-12 fw-bold"> No articles found.</div>
    }
  return (
    <>
      {props.items.map((article) => (
        <ArticleItem
          id={article.id}
          title={article.title}
          description={article.description}
        />
      ))}
    </>
  );
}

export default ArticleList;
