import React from 'react';
import ArticleCard from './ArticleCard';

function DataScience() {
  // Assuming you have an array of articles
  const articles = [
    {
      title: "Introduction to Data Science",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      imageUrl: "https://example.com/image1.jpg",
      lastUpdated: "3 mins ago",
    },
    {
      title: "Basics of Machine Learning",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      imageUrl: "https://example.com/image1.jpg",
      lastUpdated: "3 mins ago",
    },
    {
      title: "Data Cleaning and Preprocessing",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      imageUrl: "https://example.com/image1.jpg",
      lastUpdated: "3 mins ago",
    },
    {
      title: "Exploratory Data Analysis (EDA)",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      imageUrl: "https://example.com/image1.jpg",
      lastUpdated: "3 mins ago",
    },
    {
      title: "Model Training and Evaluation",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      imageUrl: "https://example.com/image1.jpg",
      lastUpdated: "3 mins ago",
    },
    {
      title: "Applications of Data Science",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      imageUrl: "https://example.com/image1.jpg",
      lastUpdated: "3 mins ago",
    },
    // Add other articles in a similar format
  ];
  return (
    <div className="container mt-4">
      <div className="row">
        {articles.map((article, index) => (
          <div key={index} className="col-md-4 mb-4">
            <ArticleCard {...article} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataScience;

