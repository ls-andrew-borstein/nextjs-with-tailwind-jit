import styled from "@emotion/styled";
import { Link } from "shared/components";

const StyledLink = styled(Link)`
  border-radius: 0.75rem;
  border-width: 1px;
  outline: 2px solid transparent;
  outline-offset: 2px;
  padding: 1.5rem;
  text-align: left;
  &:focus {
    border-color: rgba(37, 99, 235, 1);
  }
  &:hover {
    color: rgba(37, 99, 235, 1);
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-top: 1rem;
`;

interface InfoCardEmotionProps {
  description: string;
  title: string;
  url: string;
}

const InfoCardEmotion: React.FC<InfoCardEmotionProps> = ({
  description,
  title,
  url,
}) => {
  return (
    <StyledLink href={url}>
      <Title>{title} &rarr;</Title>
      <Description>{description}</Description>
    </StyledLink>
  );
};

export { InfoCardEmotion };
