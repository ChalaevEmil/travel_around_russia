import './Intro.css'
import { useTranslation } from 'react-i18next';

export default function Intro(){
    const { t } = useTranslation();
    return(
        <article class="intro">
        <h2 class="intro__title">{t('intro.title')}</h2>
        <p class="intro__text">{t('intro.text')}</p>
        <ul class="intro__list">
          <li class="intro__list-item">{t('intro.item1')} <span class="intro__list-span">11</span></li>
          <li class="intro__list-item">{t('intro.item2')} <span class="intro__list-span">12</span></li>
          <li class="intro__list-item">{t('intro.item3')} <span class="intro__list-span">16</span></li>
          <li class="intro__list-item">{t('intro.item4')} <span class="intro__list-span">105</span></li>
          <li class="intro__list-item">{t('intro.item5')} <span class="intro__list-span">241</span></li>
        </ul>
       </article>
    )
}