import React from "react";
import "./blogsReviews.css";

const blogs = [
  {
    id: 1,
    title: "The Future of Online Marketplaces",
    content: "Explore the trends shaping e-commerce and what they mean for you.",
    author: "John Doe",
    type: "blog",
  },
  {
    id: 2,
    title: "How Kubaza Helped Me Grow My Business",
    content: "A heartfelt review of how this platform transformed my business.",
    author: "Jane Smith",
    type: "review",
  },
  {
    id: 3,
    title: "Top 10 Tips for Sellers on Kubaza",
    content: "Get insights on how to make the most of your presence here.",
    author: "Chris Johnson",
    type: "blog",
  },
  {
    id: 4,
    title: "Customer Service That Stands Out",
    content: "Why I recommend Kubaza to all my friends.",
    author: "Emily Brown",
    type: "review",
  },
];

const BlogsReviews = () => {
  return (
    <div className="blogs-reviews-container">
      <h2 className="blogs-reviews-header">Blogs and Reviews</h2>
      <div className="blogs-reviews-grid">
        {blogs.map((item) => (
          <div
            key={item.id}
            className={`blogs-reviews-item ${
              item.type === "blog" ? "blog-item" : "review-item"
            }`}
          >
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <p className="author">- {item.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsReviews;
