import styled from "@emotion/styled";
import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from "styled-system";

const Box = styled("div", {
  shouldForwardProp,
})(
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography
);

export { Box };
