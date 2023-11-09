import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px; /* Adjust the maximum width as needed */
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  max-height: 200px; /* Adjust the maximum height for the image */
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CardDescription = styled.p`
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Show up to 3 lines of text */
  -webkit-box-orient: vertical;
`;

const LongCard = ({ title="title", description="description", imageUrl="https://th.bing.com/th/id/R.6a3e3ccbd2971f6c4e678e97f4dbca25?rik=rMwINoYYKNPFeg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fe%2f2%2f6%2f618308.jpg&ehk=rTlWwUIsNMnkR373pIzC9VOofyqUsKK78YJDD21u08Y%3d&risl=&pid=ImgRaw&r=0" }) => {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardContainer>
  );
};

export default LongCard;
