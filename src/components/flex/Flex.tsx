import {
  ReactNode,
  ElementType,
  ComponentPropsWithoutRef,
  ComponentProps,
} from 'react';
import styles from './Stack.module.scss';
import { Box } from '@/components/Polymorphic';

/**
 * HStack: A view that arranges its children in a horizontal line.
 * VStack: A view that arranges its children in a vertical line.
 * ZStack: A view that overlays its children, aligning them in both axes.
 */

type FlexContainerProps<T extends ElementType<any>> = {
  children: ReactNode;
  as: T;
  flexDirection: 'row' | 'column';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  /**Along main (i.e. flow) axis */
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'start'
    | 'end'
    | 'left'
    | 'right';
  /**Along cross (i.e. perpendicular to flow) axis */
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
};

const FlexContainer = <T extends ElementType>({
  children,
  flexDirection,
  as,
  flexWrap = `nowrap`,
  justifyContent = `space-evenly`,
  alignItems = `center`,
  style,
  ...props
}: FlexContainerProps<T> & ComponentProps<T>) => {
  const Tag = as || `div`;
  return (
    <Tag
      {...props}
      style={{
        display: `flex`,
        flexDirection: flexDirection,
        flexWrap: flexWrap,
        justifyContent: justifyContent,
        alignItems: alignItems,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
};

type FlexItemProps<T extends ElementType> = {
  children?: ReactNode;
  as: T;
  flexGrow?: number;
  flexShrink?: number;
  alignSelf?:
    | 'auto'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch';
};

const FlexItem = <T extends ElementType>({
  children,
  as,
  flexGrow = 0,
  flexShrink = 1,
  alignSelf = `center`,
  style,
  ...props
}: FlexItemProps<T> & ComponentProps<T>) => {
  const Tag = as || `div`;
  return (
    <Tag {...props} style={{ flexGrow, flexShrink, alignSelf, ...style }}>
      {children}
    </Tag>
  );
};

type SpacerProps = {
  as?: ElementType<any>;
};

const Spacer = ({ as = `div` }: SpacerProps) => (
  <Box as={as} styles={{ flexGrow: 1000, height: `100%`, width: `100%` }} />
);

export { FlexItem, FlexContainer, Spacer };
