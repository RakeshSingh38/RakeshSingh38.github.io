declare module 'react-scroll' {
  import * as React from 'react';

  export interface LinkProps {
    to: string;
    containerId?: string;
    activeClass?: string;
    className?: string;
    activeStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    spy?: boolean;
    smooth?: boolean | string;
    offset?: number;
    delay?: number;
    isDynamic?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    duration?: number | string;
    absolute?: boolean;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    ignoreCancelEvents?: boolean;
    hashSpy?: boolean;
    saveHashHistory?: boolean;
    children?: React.ReactNode;
  }

  export class Link extends React.Component<LinkProps & React.HTMLProps<HTMLElement>> {}

  export function animateScroll(options?: {
    duration?: number;
    delay?: number;
    smooth?: boolean | string;
    containerId?: string;
    offset?: number;
    isDynamic?: boolean;
    onComplete?: () => void;
    ignoreCancelEvents?: boolean;
  }): void;

  export function scrollSpy(options?: {
    containerId?: string;
    offset?: number;
    delayInMs?: number;
  }): void;

  export function scroller(options?: {
    duration?: number;
    delay?: number;
    smooth?: boolean | string;
    containerId?: string;
    offset?: number;
    isDynamic?: boolean;
    onComplete?: () => void;
    ignoreCancelEvents?: boolean;
  }): void;

  export function Events(options?: {
    capture?: boolean;
    passive?: boolean;
  }): {
    scrollEvent: {
      register: (name: string, callback: () => void) => void;
      remove: (name: string) => void;
    };
  };

  export const scrollTo: (to: string, options?: any) => void;
  export const scroll: (options?: any) => void;
  export const Element: any;
}
