/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { JSXElements } from '@stencil/core';


import {
  CarData,
} from './car-list/car-data';


export namespace Components {

  interface AppRoot {}
  interface AppRootAttributes extends JSXElements.HTMLAttributes {}

  interface CarDetail {
    'car': CarData;
  }
  interface CarDetailAttributes extends JSXElements.HTMLAttributes {
    'car'?: CarData;
  }

  interface CarList {
    'cars': CarData[];
    'selected': CarData;
  }
  interface CarListAttributes extends JSXElements.HTMLAttributes {
    'cars'?: CarData[];
    'onCarSelected'?: (event: CustomEvent<CarData>) => void;
    'selected'?: CarData;
  }

  interface DomApi {}
  interface DomApiAttributes extends JSXElements.HTMLAttributes {}

  interface DomInteraction {}
  interface DomInteractionAttributes extends JSXElements.HTMLAttributes {}

  interface DomVisible {}
  interface DomVisibleAttributes extends JSXElements.HTMLAttributes {}

  interface ElementCmp {}
  interface ElementCmpAttributes extends JSXElements.HTMLAttributes {}

  interface EventCmp {
    'methodThatFiresEventWithOptions': () => void;
    'methodThatFiresMyDocumentEvent': () => void;
    'methodThatFiresMyWindowEvent': (value: number) => void;
  }
  interface EventCmpAttributes extends JSXElements.HTMLAttributes {
    'onMy-event-with-options'?: (event: CustomEvent<{ mph: number }>) => void;
    'onMyDocumentEvent'?: (event: CustomEvent<any>) => void;
    'onMyWindowEvent'?: (event: CustomEvent<number>) => void;
  }

  interface ListenCmp {
    'opened': boolean;
  }
  interface ListenCmpAttributes extends JSXElements.HTMLAttributes {
    'opened'?: boolean;
  }

  interface MethodCmp {
    'someMethod': () => Promise<number>;
    'someMethodWithArgs': (unit: string, value: number) => Promise<string>;
    'someProp': number;
  }
  interface MethodCmpAttributes extends JSXElements.HTMLAttributes {
    'someProp'?: number;
  }

  interface PropCmp {
    'first': string;
    'lastName': string;
  }
  interface PropCmpAttributes extends JSXElements.HTMLAttributes {
    'first'?: string;
    'lastName'?: string;
  }

  interface StateCmp {}
  interface StateCmpAttributes extends JSXElements.HTMLAttributes {}
}

interface HTMLStencilElement extends HTMLElement {
  componentOnReady(): Promise<this>;
  forceUpdate(): void;
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
    'CarDetail': Components.CarDetail;
    'CarList': Components.CarList;
    'DomApi': Components.DomApi;
    'DomInteraction': Components.DomInteraction;
    'DomVisible': Components.DomVisible;
    'ElementCmp': Components.ElementCmp;
    'EventCmp': Components.EventCmp;
    'ListenCmp': Components.ListenCmp;
    'MethodCmp': Components.MethodCmp;
    'PropCmp': Components.PropCmp;
    'StateCmp': Components.StateCmp;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'car-detail': Components.CarDetailAttributes;
    'car-list': Components.CarListAttributes;
    'dom-api': Components.DomApiAttributes;
    'dom-interaction': Components.DomInteractionAttributes;
    'dom-visible': Components.DomVisibleAttributes;
    'element-cmp': Components.ElementCmpAttributes;
    'event-cmp': Components.EventCmpAttributes;
    'listen-cmp': Components.ListenCmpAttributes;
    'method-cmp': Components.MethodCmpAttributes;
    'prop-cmp': Components.PropCmpAttributes;
    'state-cmp': Components.StateCmpAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLCarDetailElement extends Components.CarDetail, HTMLStencilElement {}
  var HTMLCarDetailElement: {
    prototype: HTMLCarDetailElement;
    new (): HTMLCarDetailElement;
  };

  interface HTMLCarListElement extends Components.CarList, HTMLStencilElement {}
  var HTMLCarListElement: {
    prototype: HTMLCarListElement;
    new (): HTMLCarListElement;
  };

  interface HTMLDomApiElement extends Components.DomApi, HTMLStencilElement {}
  var HTMLDomApiElement: {
    prototype: HTMLDomApiElement;
    new (): HTMLDomApiElement;
  };

  interface HTMLDomInteractionElement extends Components.DomInteraction, HTMLStencilElement {}
  var HTMLDomInteractionElement: {
    prototype: HTMLDomInteractionElement;
    new (): HTMLDomInteractionElement;
  };

  interface HTMLDomVisibleElement extends Components.DomVisible, HTMLStencilElement {}
  var HTMLDomVisibleElement: {
    prototype: HTMLDomVisibleElement;
    new (): HTMLDomVisibleElement;
  };

  interface HTMLElementCmpElement extends Components.ElementCmp, HTMLStencilElement {}
  var HTMLElementCmpElement: {
    prototype: HTMLElementCmpElement;
    new (): HTMLElementCmpElement;
  };

  interface HTMLEventCmpElement extends Components.EventCmp, HTMLStencilElement {}
  var HTMLEventCmpElement: {
    prototype: HTMLEventCmpElement;
    new (): HTMLEventCmpElement;
  };

  interface HTMLListenCmpElement extends Components.ListenCmp, HTMLStencilElement {}
  var HTMLListenCmpElement: {
    prototype: HTMLListenCmpElement;
    new (): HTMLListenCmpElement;
  };

  interface HTMLMethodCmpElement extends Components.MethodCmp, HTMLStencilElement {}
  var HTMLMethodCmpElement: {
    prototype: HTMLMethodCmpElement;
    new (): HTMLMethodCmpElement;
  };

  interface HTMLPropCmpElement extends Components.PropCmp, HTMLStencilElement {}
  var HTMLPropCmpElement: {
    prototype: HTMLPropCmpElement;
    new (): HTMLPropCmpElement;
  };

  interface HTMLStateCmpElement extends Components.StateCmp, HTMLStencilElement {}
  var HTMLStateCmpElement: {
    prototype: HTMLStateCmpElement;
    new (): HTMLStateCmpElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'car-detail': HTMLCarDetailElement
    'car-list': HTMLCarListElement
    'dom-api': HTMLDomApiElement
    'dom-interaction': HTMLDomInteractionElement
    'dom-visible': HTMLDomVisibleElement
    'element-cmp': HTMLElementCmpElement
    'event-cmp': HTMLEventCmpElement
    'listen-cmp': HTMLListenCmpElement
    'method-cmp': HTMLMethodCmpElement
    'prop-cmp': HTMLPropCmpElement
    'state-cmp': HTMLStateCmpElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'car-detail': HTMLCarDetailElement;
    'car-list': HTMLCarListElement;
    'dom-api': HTMLDomApiElement;
    'dom-interaction': HTMLDomInteractionElement;
    'dom-visible': HTMLDomVisibleElement;
    'element-cmp': HTMLElementCmpElement;
    'event-cmp': HTMLEventCmpElement;
    'listen-cmp': HTMLListenCmpElement;
    'method-cmp': HTMLMethodCmpElement;
    'prop-cmp': HTMLPropCmpElement;
    'state-cmp': HTMLStateCmpElement;
  }

}
