import type { Locale } from './typings';

const localeKeys = [
  'nick',
  'nickError',
  'mail',
  'mailError',
  'link',
  'optional',
  'placeholder',
  'sofa',
  'submit',
  'reply',
  'cancelReply',
  'comment',
  'refresh',
  'more',
  'preview',
  'emoji',
  'uploadImage',
  'seconds',
  'minutes',
  'hours',
  'days',
  'now',
  'uploading',
  'login',
  'logout',
  'admin',
  'sticky',
  'word',
  'wordHint',
  'anonymous',
  'usertype',
];

export const generateLocale = (
  locale: (string | Record<string, string>)[]
): Locale =>
  Object.fromEntries(
    locale.map((item, index) => [localeKeys[index], item])
  ) as unknown as Locale;
