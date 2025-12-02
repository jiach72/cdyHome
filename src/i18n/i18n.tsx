import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { zhCN } from './locales/zh-CN'
import { en } from './locales/en'
import { zhTW } from './locales/zh-TW'

// 定义语言类型
export type Language = 'zh-CN' | 'en' | 'zh-TW'

// 翻译对象类型
export type Translations = typeof zhCN

// 语言名称映射
export const LANGUAGE_NAMES: Record<Language, string> = {
    'zh-CN': '简体中文',
    'en': 'English',
    'zh-TW': '繁體中文',
}

// Context 类型
interface I18nContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: Translations
}

// 创建 Context
const I18nContext = createContext<I18nContextType | undefined>(undefined)

// 翻译映射
const translations: Record<Language, Translations> = {
    'zh-CN': zhCN,
    'en': en,
    'zh-TW': zhTW,
}

// Provider 组件
export const I18nProvider = ({ children }: { children: ReactNode }) => {
    // 从 localStorage 获取语言偏好，默认为 zh-CN
    const [language, setLanguageState] = useState<Language>(() => {
        const savedLang = localStorage.getItem('language') as Language
        return (savedLang && translations[savedLang]) ? savedLang : 'zh-CN'
    })

    // 更新语言并保存到 localStorage
    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem('language', lang)
        // 设置 html 标签的 lang 属性
        document.documentElement.lang = lang
    }

    // 初始化时设置 html lang 属性
    useEffect(() => {
        document.documentElement.lang = language
    }, [language])

    const value = {
        language,
        setLanguage,
        t: translations[language],
    }

    return (
        <I18nContext.Provider value={value}>
            {children}
        </I18nContext.Provider>
    )
}

// Hook
export const useI18n = () => {
    const context = useContext(I18nContext)
    if (context === undefined) {
        throw new Error('useI18n must be used within an I18nProvider')
    }
    return context
}
