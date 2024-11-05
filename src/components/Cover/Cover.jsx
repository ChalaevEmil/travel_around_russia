import './Cover.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export default function Cover(){
    const { t } = useTranslation();

    return(
        <section class="cover">
          <Link class="cover__link" target="_blank" to="https://stampsy.com/na-elektrichkakh-do-baikala">
            <h2 class="cover__title">{t('cover.title')}</h2>
            <p class="cover__subtitle">{t('cover.subtitle')}</p>
          </Link>
        </section>
    )
}