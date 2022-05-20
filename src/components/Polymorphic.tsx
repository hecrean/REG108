import {
  ComponentPropsWithoutRef,
  CSSProperties,
  ElementType,
  ReactNode,
} from 'react';

type BoxProps<T extends ElementType> = {
  as?: T;
  children?: ReactNode;
  styles?: CSSProperties;
};
const Box = <T extends ElementType>({
  as,
  children,
  ...props
}: BoxProps<T> & ComponentPropsWithoutRef<T>) => {
  const Tag = as || `span`;
  return <Tag {...props}>{children}</Tag>;
};

export { Box };
