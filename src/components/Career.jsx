import React from 'react';
import ArticleCard from './ArticleCard';
  
  function Career() {
    // Assuming you have an array of articles
    const articles = [
      {
        title: "Exploring Career Paths",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
        imageUrl: "https://example.com/image1.jpg",
        lastUpdated: "3 mins ago",
      },
      {
        title: "Building a Strong Resume",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
        imageUrl: "https://example.com/image1.jpg",
        lastUpdated: "3 mins ago",
      },
      {
        title: "Job Search Strategies",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
        imageUrl: "https://example.com/image1.jpg",
        lastUpdated: "3 mins ago",
      },
      {
        title: "Interview Preparation Tips",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
        imageUrl: "https://example.com/image1.jpg",
        lastUpdated: "3 mins ago",
      },
      {
        title: "Career Development and Growth",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
        imageUrl: "https://example.com/image1.jpg",
        lastUpdated: "3 mins ago",
      },
      {
        title: "Navigating Workplace Challenges",
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
  
  export default Career;
