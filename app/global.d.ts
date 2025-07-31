export {};

declare global {
  // Google Analytics gtag function type
  type Gtag = (
    command: "config" | "set" | "js" | "event",
    targetId: string,
    config?: Record<string, unknown>
  ) => void;

  interface Window {
    gtag?: Gtag;
  }
}
