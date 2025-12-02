import { Mail, Phone, MapPin } from 'lucide-react'

import { useI18n } from '../i18n/i18n'

const Footer = () => {
    const { t } = useI18n()
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-900 text-white">
            <div className="section-container section-padding">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">
                            {t.header.logo.title} | {t.header.logo.subtitle}
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            {t.footer.company.name}<br />
                            {t.footer.company.subtitle}
                        </p>
                        <p className="text-sm text-gray-500">
                            {t.footer.company.desc}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t.footer.links.title}</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-secondary transition-colors">
                                    {t.footer.links.about}
                                </a>
                            </li>
                            <li>
                                <a href="#products" className="text-gray-400 hover:text-secondary transition-colors">
                                    {t.footer.links.products}
                                </a>
                            </li>
                            <li>
                                <a href="#solutions" className="text-gray-400 hover:text-secondary transition-colors">
                                    {t.footer.links.solutions}
                                </a>
                            </li>
                            <li>
                                <a href="#cases" className="text-gray-400 hover:text-secondary transition-colors">
                                    {t.footer.links.cases}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t.footer.contact.title}</h4>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 text-secondary mr-3 mt-1 flex-shrink-0" />
                                <p className="text-gray-400">{t.footer.contact.address}</p>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                                <a href="mailto:info@peakcuts.com" className="text-gray-400 hover:text-secondary transition-colors">
                                    info@peakcuts.com
                                </a>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                                <p className="text-gray-400">{t.footer.contact.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-500 text-sm">
                            {t.footer.copyright.replace('{year}', currentYear.toString())}
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-500 hover:text-secondary transition-colors text-sm">
                                {t.footer.privacy}
                            </a>
                            <a href="#" className="text-gray-500 hover:text-secondary transition-colors text-sm">
                                {t.footer.contactUs}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
