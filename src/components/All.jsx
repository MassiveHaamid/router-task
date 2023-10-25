import React from 'react';
import ArticleCard from './ArticleCard';
import fsd1 from "../assets/fsd1.jpg" 
import fsd2 from "../assets/fsd2.jpg"
import fsd3 from "../assets/fsd3.jpg"

const All = () => {
  const allArticles = [
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
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {allArticles.map((article, index) => (
          <div key={index} className="col-md-4 mb-4">
            <ArticleCard {...article} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default All;
