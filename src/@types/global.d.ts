declare type AnyObject = any;
declare type KeyValue<T = AnyObject> = { [key: string]: T };

declare module "*.png" {
  const content: any;
  export default content;
}
declare module "*.svg" {
  const content: any;
  export default content;
}
