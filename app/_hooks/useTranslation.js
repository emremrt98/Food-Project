import { useLocale } from '@/app/_context/LocaleContext'
import tr from '@/app/_locale/tr.json'
import en from '@/app/_locale/en.json'

const translations = {
  tr,
  en
}

export function useTranslation() {
  const { locale } = useLocale()
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[locale]
    
    for (const k of keys) {
      value = value?.[k]
      if (!value) break
    }
    
    return value || key
  }

  return { t, locale }
}

