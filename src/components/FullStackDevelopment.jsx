import React from 'react';
import ArticleCard from './ArticleCard';
import fsd1 from "../assets/fsd1.jpg" 
import fsd2 from "../assets/fsd2.jpg"
import fsd3 from "../assets/fsd3.jpg"

function FullStackDevelopment() {
  // Assuming you have an array of articles
  const articles = [
    {
      title: "Introduction to Full Stack Development",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      imageUrl: fsd1,
      lastUpdated: "3 mins ago",
    },
    {
      title: "Front-end Technologies in Full Stack",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      imageUrl: fsd2,
      lastUpdated: "3 mins ago",
    },
    {
      title: "Back-end Technologies in Full Stack",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      imageUrl: fsd3,
      lastUpdated: "3 mins ago",
    },
    {
      title: "Database Management in Full Stack",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      imageUrl: "https://example.com/image1.jpg",
      lastUpdated: "3 mins ago",
    },
    {
      title: "Full Stack Frameworks and Libraries",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      imageUrl: "https://example.com/image1.jpg",
      lastUpdated: "3 mins ago",
    },
    {
      title: "Best Practices in Full Stack Development",
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

export default FullStackDevelopment;
