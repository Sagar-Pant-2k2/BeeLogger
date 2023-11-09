import React from "react";
import styled from "styled-components";

const FeatureSection = styled.section`
    padding: 80px 0;
    text-align: center;
`;

const FeatureHeading = styled.h2`
    font-size: 2.5em;
    margin-bottom: 30px;
`;

const FeatureDescription = styled.p`
    font-size: 1.2em;
    color: #777;
    margin-bottom: 50px;
`;

const FeatureContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

const FeatureCard = styled.div`
    flex: 1;
    max-width: 300px;
    margin: 20px;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const FeatureIcon = styled.div`
    font-size: 2em;
    margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
    font-size: 1.5em;
    margin-bottom: 10px;
`;

const FeatureText = styled.p`
    font-size: 1.1em;
    color: #555;
`;

const Feature = () => {
    return (
        <FeatureSection>
            <FeatureHeading>Discover Our Features</FeatureHeading>
            <FeatureDescription>
                Empower your creativity and engage with a vibrant community through our unique features.
            </FeatureDescription>
            <FeatureContainer>
                <FeatureCard>
                    <FeatureIcon>📝</FeatureIcon>
                    <FeatureTitle>Create Your Blog</FeatureTitle>
                    <FeatureText>
                        Unleash your thoughts and ideas by easily creating and customizing your own blog posts.
                    </FeatureText>
                </FeatureCard>
                <FeatureCard>
                    <FeatureIcon>📖</FeatureIcon>
                    <FeatureTitle>Read Inspiring Blogs</FeatureTitle>
                    <FeatureText>
                        Dive into a world of diverse perspectives. Explore and enjoy blogs crafted by our talented community.
                    </FeatureText>
                </FeatureCard>
                <FeatureCard>
                    <FeatureIcon>❤️</FeatureIcon>
                    <FeatureTitle>Like and Connect</FeatureTitle>
                    <FeatureText>
                        Show appreciation for remarkable content. Connect with other bloggers through likes and comments.
                    </FeatureText>
                </FeatureCard>
            </FeatureContainer>
        </FeatureSection>
    );
};

export default Feature;
