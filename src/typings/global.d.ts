declare interface Window {
  reactId: string;
  ToutiaoJSBridge: {
    call(eventName: string, params?: any, callback?: (data: any) => void);
    on(eventName: string, callback?: () => void);
  };
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

type NotificationType<T> = {
  eventName: string;
  data: T;
};

declare module '@ies/aweme-color-theme' {
  export function initTheme(theme?: 'dark' | 'light'): void

  export function themeColor(key: string, theme?: 'dark' | 'light'): string
}
