import './Footer.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer(){
    const { t }=useTranslation();

    return(
        <footer class="footer">
        <nav class="footer__link-container">
          <Link class="footer__link" target="_blank" to="https://yandex.ru/maps">{t('footer.maps')}</Link>
          <Link class="footer__link" target="_blank" to="https://yandex.ru/pogoda">{t('footer.weather')}</Link>
          <Link class="footer__link" target="_blank" to="https://rasp.yandex.ru">{t('footer.schedule')}</Link>
          <Link class="footer__link" target="_blank" to="https://calendar.yandex.ru">{t('footer.calendar')}</Link>
          <Link class="footer__link" target="_blank" to="https://travel.yandex.ru">{t('footer.journeys')}</Link>
        </nav>
        <p class="footer__copyright">&copy; 2024 {t('footer.copyright')}</p>
      </footer>
    )
}