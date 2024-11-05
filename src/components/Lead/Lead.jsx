import "./Lead.css"
import lead_img from "../../image/lead__image.png";
import { useTranslation } from 'react-i18next';

export default function Lead() {
    const { t } = useTranslation();
    
    return (
      <section className="lead">
        <h1 className="lead__title">{t('lead.title')}</h1>
        <p className="lead__subtitle">{t('lead.subtitle')}</p>
        <img className="lead__image" src={lead_img} alt="Фото" />
        <p className="lead__caption">{t('lead.caption')}</p>
      </section>
    );
  }