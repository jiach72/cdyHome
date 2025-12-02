import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Check } from 'lucide-react'
import { useI18n, Language, LANGUAGE_NAMES } from '../i18n/i18n'

const LanguageSwitcher = () => {
    const { language, setLanguage } = useI18n()
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    // 点击外部关闭下拉菜单
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang)
        setIsOpen(false)
    }

    return (
        <div className="relative" ref={containerRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
                aria-label="Select Language"
            >
                <Globe size={20} />
                <span className="hidden lg:inline-block text-sm font-medium">
                    {LANGUAGE_NAMES[language]}
                </span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                    >
                        <div className="py-1">
                            {(Object.keys(LANGUAGE_NAMES) as Language[]).map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => handleLanguageChange(lang)}
                                    className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between hover:bg-gray-50 transition-colors ${language === lang ? 'text-primary font-medium bg-primary/5' : 'text-gray-700'
                                        }`}
                                >
                                    {LANGUAGE_NAMES[lang]}
                                    {language === lang && <Check size={16} className="text-primary" />}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default LanguageSwitcher
