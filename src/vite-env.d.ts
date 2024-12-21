/// <reference types="vite/client" />
declare module "vite-env" {}
declare module "@types/react" {}
declare namespace JSX {
  interface IntrinsicElements {
    div: any;
    a: any;
    [elemName: string]: any;
  }
}
