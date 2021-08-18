import css from "@styled-system/css";
import { Box, Link } from "shared/components";

const StyledLink = (props) => (
  <Box
    {...props}
    as={Link}
    css={css({
      borderRadius: "0.75rem",
      borderWidth: "1px",
      outline: "2px solid transparent",
      outlineOffset: "2px",
      padding: 4,
      textAlign: "left",
    })}
  />
);

const Title = (props) => (
  <Box {...props} as="h2" fontSize={4} fontWeight="bold" lineHeight={2} />
);

const Description = (props) => (
  <Box {...props} as="p" fontSize={3} lineHeight={3} marginTop={3} />
);

interface InfoCardStyledSystemProps {
  description: string;
  title: string;
  url: string;
}

const InfoCardStyledSystem: React.FC<InfoCardStyledSystemProps> = ({
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

export { InfoCardStyledSystem };
