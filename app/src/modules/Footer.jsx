export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <a className="footer__logo-link">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="Логотип Cup Time"
          />
        </a>
        <div className="footer__nav">
          <ul className="footer__menu">
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="#">
                Чай
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="#">
                Кофе
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="#">
                Чайники
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="#">
                Турки
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__menu-link" href="#">
                Прочее
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__info">
          <p className="footer__copyright">©CUPTIME, 2024</p>
          <p className="footer__description">Проект сделан в учебных целях</p>
          <ul className="footer__developers">
            <li className="footer__developer">
              Designer:
              <a className="footer__developer-link" href="#">
                Anastasia Ilina
              </a>
            </li>
            <li className="footer__developer">Developer: Max Leskin</li>
          </ul>
        </div>
        <div className="footer__contacts">
          <a className="footer__email" href="mailto:CUPTIME@gmail.com">
            CUPTIME@gmail.com
          </a>
          <ul className="footer__socials">
            <li className="footer__social-item">
              <a className="footer__social-link" href="#">
                <img
                  className="footer__social-image"
                  src="img/social_telegram.svg"
                  alt="Cup Time Telegram"
                />
              </a>
            </li>
            <li className="footer__social-item">
              <a className="footer__social-link" href="#">
                <img
                  className="footer__social-image"
                  src="img/social_youtube.svg"
                  alt="Cup Time Youtube"
                />
              </a>
            </li>
            <li className="footer__social-item">
              <a className="footer__social-link" href="#">
                <img
                  className="footer__social-image"
                  src="img/social_vk.svg"
                  alt="Cup Time VKontakte"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
