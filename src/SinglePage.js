import React from 'react';
import ArticleContent from './ArticleContent';
import { Helmet } from 'react-helmet';
const SinglePage = ({ match }) => {
  const name = match.params.name;
  const article = ArticleContent.find((article) => article.name === name);
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{article.title}</title>
      </Helmet>
      <div className="p-1">
        <div className="card p-1">
          <img
            className="img-fluid card"
            alt="{article.title}"
            src={article.img}
          />
          <main className="card-content p-3 p-md-5">
            <h1>
              <a href="/"> {article.title}</a> <span className="my">✏️</span>
            </h1>
            <h3>{article.desc}</h3>
            <p className="date">
              <a href={article.authorlink}>{article.author}</a> ⏰{' '}
              {article.date}
            </p>
            <p className="dotted" />
            {article.content.map((paragraph, key) => (
              <p key={key}>{paragraph}</p>
            ))}
          </main>
        </div>
      </div>
    </>
  );
};
export default SinglePage;
