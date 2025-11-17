import 'server-only'

const dictionaries: Record<string, () => Promise<any>> = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  es: () => import('@/locales/es.json').then((module) => module.default),
  ca: () => import('@/locales/ca.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
    const loader = dictionaries[locale] || dictionaries.en;
    return loader();
}
