import "./Places.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import karelia from "../../image/places-photo/Karelia.jpg";
import kolskiy from "../../image/places-photo/kola-peninsula.jpg";
import altay from "../../image/places-photo/altai.jpg";
import baikal from "../../image/places-photo/baykal.jpg";
import kosa from "../../image/places-photo/curonian-spit.jpg";

export default function Places() {
  const { t } = useTranslation();

  return (
    <section class="places">
      <div class="place">
        <h2 class="place__title">{t('place.title1')}</h2>
        <div class="place__website-container">
          <h3 class="place__website-title">url</h3>
          <Link
            class="place__website-url"
            target="_blank"
            to="http://park-kosa.ru"
          >
            park-kosa.ru
          </Link>
        </div>
        <img class="place__image" alt="Куршская коса" src={kosa} />
        <div>
          <p class="place__paragraph">{t('place.paragraph1')}</p>
          <p class="place__paragraph">{t('place.paragraph2')}</p>
        </div>
      </div>

      <div class="place">
        <h2 class="place__title">{t('place.title2')}</h2>
        <div class="place__website-container">
          <h3 class="place__website-title">url</h3>
          <Link
            class="place__website-url"
            target="_blank"
            to="https://yourshot.nationalgeographic.com/photos/?keywords=kolskiy"
          >
            National Geographic
          </Link>
        </div>
        <img class="place__image" alt="Кольский полуостров" src={kolskiy} />
        <div>
        <p class="place__paragraph">{t('place.paragraph3')}</p>
        <p class="place__paragraph">{t('place.paragraph4')}</p>
        </div>
      </div>

      <div class="place">
        <h2 class="place__title">{t('place.title3')}</h2>
        <div class="place__website-container">
          <h3 class="place__website-title">url</h3>
          <Link
            class="place__website-url"
            target="_blank"
            to="https://www.youtube.com/watch?v=7ZEsoV7kWAQ"
          >
            YouTube
          </Link>
        </div>
        <img class="place__image" alt="Алтай" src={altay} />
        <div>
        <p class="place__paragraph">{t('place.paragraph5')}</p>
        <p class="place__paragraph">{t('place.paragraph6')}</p>
        </div>
      </div>

      <div class="place">
        <h2 class="place__title">{t('place.title4')}</h2>
        <div class="place__website-container">
          <h3 class="place__website-title">url</h3>
          <Link
            class="place__website-url"
            target="_blank"
            to="https://vk.com/baikalmile"
          >
            https://vk.com/baikalmile
          </Link>
        </div>
        <img class="place__image" alt="Байкал" src={baikal} />
        <div>
        <p class="place__paragraph">{t('place.paragraph7')}</p>
        <p class="place__paragraph">{t('place.paragraph8')}</p>
        </div>
      </div>

      <div class="place">
        <h2 class="place__title">Карелия</h2>
        <div class="place__website-container">
          <h3 class="place__website-title">url</h3>
          <Link
            class="place__website-url"
            target="_blank"
            to="http://vodlozero.ru"
          >
            http://vodlozero.ru
          </Link>
        </div>
        <img class="place__image" alt="Карелия" src={karelia} />
        <p class="place__paragraph">{t('place.paragraph9')}</p>
      </div>
    </section>
  );
}
