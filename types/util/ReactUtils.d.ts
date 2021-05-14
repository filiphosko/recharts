import React, { ReactNode } from 'react';
export declare const SCALE_TYPES: string[];
export declare const LEGEND_TYPES: string[];
export declare const TOOLTIP_TYPES: string[];
export declare const getDisplayName: (Comp: any) => any;
export declare const findAllByType: (children: ReactNode, type: string | string[]) => React.DetailedReactHTMLElement<any, HTMLElement>[];
export declare const findChildByType: (children: ReactNode[], type: string) => React.DetailedReactHTMLElement<any, HTMLElement>;
export declare const withoutType: (children: ReactNode, type: string) => React.ReactNode[];
export declare const validateWidthHeight: (el: any) => boolean;
export declare const filterSvgElements: (children: React.ReactElement[]) => React.ReactElement[];
export declare const isChildrenEqual: (nextChildren: React.ReactElement[], prevChildren: React.ReactElement[]) => boolean;
export declare const isSingleChildEqual: (nextChild: React.ReactElement, prevChild: React.ReactElement) => boolean;
export declare const renderByOrder: (children: React.ReactElement[], renderMap: any) => React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
export declare const getReactEventByType: (e: any) => any;
export declare const parseChildIndex: (child: any, children: any[]) => number;