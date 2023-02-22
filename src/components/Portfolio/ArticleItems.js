import "bootstrap/dist/css/bootstrap.min.css";
function ArticleItem(props) {
  return (
    <>
      <div className="article-title col-lg-6 col-md-12 col-sm-12 mx-auto">
        <h3>{props.title}</h3>
      </div>
      <div className="row align-self-center">
        <div className="article-description col-lg-6 col-md-12 col-sm-12 mx-auto">
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default ArticleItem;
