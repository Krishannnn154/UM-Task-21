import React from "react";

const GradientCard = ({ title, description, imageUrl }) => {
  const cardStyles = {
    color: "lightblue",
    borderRadius: "10px",
    padding: "20px",
    width: "350px",
    height: "380px",
    marginBottom: "50px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    borderImage: "linear-gradient(#0000FF, #E40078) 30",
    borderWidth: "4px",
    borderStyle: "solid",
  };

  const imageStyles = {
    width: "100%",
    height: '70%',
    objectFit: 'cover',
    borderRadius: "10px",
    marginBottom: "10px",
  };

  return (
    <div style={cardStyles}>
      <img src={imageUrl} alt={title} style={imageStyles} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default GradientCard;
