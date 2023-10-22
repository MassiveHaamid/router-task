import React from 'react';
import ArticleCard from './ArticleCard';

function CyberSecurity() {
  // Assuming you have an array of articles
  const articles = [
    {
      title: "Introduction to Cyber Security",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      imageUrl: "https://example.com/image1.jpg",
      lastUpdated: "3 mins ago",
    },
    {
      title: "Types of Cyber Attacks",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      imageUrl: "https://example.com/image1.jpg",
      lastUpdated: "3 mins ago",
    },
    {
      title: "Network Security",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      imageUrl: "https://example.com/image1.jpg",
      lastUpdated: "3 mins ago",
    },
    {
      title: "Cybersecurity Best Practices)",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      imageUrl: "https://example.com/image1.jpg",
      lastUpdated: "3 mins ago",
    },
    {
      title: "Threat Intelligence",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
      imageUrl: "https://example.com/image1.jpg",
      lastUpdated: "3 mins ago",
    },
    {
      title: "Cybersecurity in the Modern World",
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

export default CyberSecurity;
