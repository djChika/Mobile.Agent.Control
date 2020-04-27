import styled from 'styled-components';
import {
  position,
  space,
  display,
  width,
  height,
  maxWidth,
  minWidth,
  minHeight,
  flex,
  alignSelf,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  color,
  zIndex,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  top,
  right,
  bottom,
  left,
  order,
  maxHeight,
  borders,
  borderColor,
  fontSize,
  borderRadius,
} from 'styled-system';
import {
  overflow,
  opacity,
  verticalAlign,
  userSelect,
  textTransform,
  whiteSpace,
  backgroundColor,
  flexShrink,
  fill,
} from './lib/customStyleProps';

export const BOX_STYLED_SYSTEM = [
  space,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  overflow,
  opacity,
  alignSelf,
  display,
  textAlign,
  position,
  color,
  flex,
  order,
  top,
  right,
  bottom,
  left,
  zIndex,
  backgroundColor,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  verticalAlign,
  borders,
  borderColor,
  borderRadius,
  userSelect,
  whiteSpace,
  justifyContent,
  flexShrink,
  fill,
];

export const TEXT_STYLED_SYSTEM = [
  lineHeight,
  fontSize,
  fontWeight,
  letterSpacing,
  textTransform,
  color,
];

export const Box = styled.div({}, ...BOX_STYLED_SYSTEM, props => props.style);
Box.displayName = 'Box';

export const Flex = styled(Box)(
  {
    display: 'flex',
  },
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems
);
Flex.displayName = 'Flex';

export const Text = styled.span(...BOX_STYLED_SYSTEM, ...TEXT_STYLED_SYSTEM);
Text.displayName = 'Text';

export const Image = styled.img`
  display: block;
  ${display};
  ${position};
  ${width};
  ${height};
  ${flex};
  ${maxHeight};
  ${maxWidth};
`;
