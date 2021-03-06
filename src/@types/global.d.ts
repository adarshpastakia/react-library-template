// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type AnyObject = any;
declare type KeyValue<T = AnyObject> = { [key: string]: T };

declare module "*.png" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}
declare module "*.svg" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}
