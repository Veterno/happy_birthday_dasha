import { useEffect, useState, type ReactNode } from 'react';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { BookOpen, Camera, ChevronDown, Crown, Feather, Heart, Menu, Sparkles, X } from 'lucide-react';
import './styles.css';
import heroImage from '../image/изображения для главной страницы.png';
import cardImage1 from '../image/изображения для карточек 1.png';
import cardImage2 from '../image/изображения для карточек 2.jpg';
import cardImage3 from '../image/изображения для карточек 3.jpg';
import cardImage4 from '../image/изображения для карточек 4.jpg';
import cardImage5 from '../image/изображения для карточек 5.jpg';
import cardImage6 from '../image/изображения для карточек 6.jpg';
import authorImage from '../image/aleks-pixel.png';

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

const navItems = [
  { to: '/', label: 'Поздравление' },
  { to: '/cards', label: 'Карточки' },
  { to: '/wishes', label: 'Пожелания' },
  { to: '/author', label: 'Автор' },
];

function OrnateDivider({ icon = <Crown size={17} /> }: { icon?: ReactNode }) {
  return (
    <div className="ornate-divider" aria-hidden="true">
      <span />
      <b>{icon}</b>
      <span />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink className="brand" to="/" aria-label="На главную">
          <span className="brand-mark">✦</span>
          <span>
            <strong>FOR DASHA</strong>
            <small>dark birthday letter</small>
          </span>
        </NavLink>

        <button className="menu-button" onClick={() => setOpen((v) => !v)} aria-label="Открыть меню" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>

        <nav className={`main-nav ${open ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="header-ornament" aria-hidden="true">
        <span>❦</span><span>✦</span><span>❦</span>
      </div>
    </header>
  );
}

function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <div className="ambient-glow glow-one" />
      <div className="ambient-glow glow-two" />
      <Header />
      <main>{children}</main>
      <footer className="site-footer">
        <OrnateDivider icon={<Heart size={16} fill="currentColor" />} />
        <div className="footer-title">Даша, с днём рождения!!</div>
        <p>Пусть в твоём мире всегда будет место для чудес.</p>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <section className="page hero-page">
      <div className="hero-frame">
        <div className="corner corner-tl" /><div className="corner corner-tr" /><div className="corner corner-bl" /><div className="corner corner-br" />
        <div className="hero-copy">
          <p className="eyebrow">26.09 · a little midnight letter</p>
          <h1>Даша,<br /><em>с днём рождения!</em></h1>
          <OrnateDivider />
          <p className="lead">Сегодня можно выключить весь шум вокруг и оставить только то, что действительно дорого: людей, воспоминания, смех и маленькие чудеса.</p>
          <div className="hero-actions">
            <NavLink to="/wishes" className="gothic-button primary">Открыть пожелания <ChevronDown size={17} /></NavLink>
            <NavLink to="/cards" className="gothic-button secondary">Смотреть карточки <Camera size={17} /></NavLink>
          </div>
        </div>
        <div className="hero-side-art">
          <img className="hero-image" src={heroImage} alt="Поздравление с днём рождения для Даши" />
          <div className="moon" aria-hidden="true" />
          <div className="rose rose-one" aria-hidden="true">✣</div>
          <div className="rose rose-two" aria-hidden="true">✣</div>
          <div className="wax-seal" aria-hidden="true">D</div>
        </div>
      </div>
      <div className="scroll-hint"><span /> листай ниже</div>
    </section>
  );
}

function WishesPage() {
  const wishes = [
    ['I', 'Чтобы желания не пугались реальности', 'Пусть самые смелые идеи постепенно становятся обычными планами — а планы красивыми воспоминаниями.'],
    ['II', 'Чтобы рядом были «твои» люди', 'Те, с кем можно молчать, смеяться до слёз, строить странные планы и чувствовать себя собой.'],
    ['III', 'Чтобы жизнь оставалась интересной', 'Больше случайных поездок, ночных разговоров, новых увлечений, музыки и событий, о которых потом рассказывают годами.'],
    ['IV', 'Чтобы тебе было спокойно', 'Не идеально. Не всегда легко. Просто спокойно внутри — с ощущением, что ты на своей стороне.'],
  ];

  return (
    <section className="page sub-page">
      <div className="sub-heading">
        <span className="eyebrow">chapter III</span>
        <h2>Пожелания</h2>
        <p>Несколько строк, которые хочется оставить тебе на новый год жизни.</p>
      </div>
      <OrnateDivider icon={<Sparkles size={16} />} />
      <div className="wish-grid">
        {wishes.map(([roman, title, text]) => (
          <article className="wish-card" key={roman}>
            <span className="wish-number">{roman}</span>
            <div className="wish-icon">✦</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className="quote-panel">
        <Feather size={25} />
        <p>«Пусть следующий год жизни будет не громче — а глубже. Не идеальнее — а счастливее.»</p>
      </div>
    </section>
  );
}

const initialCardImages = [
  cardImage1,
  cardImage2,
  cardImage3,
  cardImage4,
  cardImage5,
  cardImage6,
];

function CardsPage() {
  const [images, setImages] = useState<string[]>(initialCardImages);
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('dasha-card-images');
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length === images.length) {
        // Merging: keep the default photos unless the user replaced one earlier in this tab.
        setImages((prev) => prev.map((src, i) => (typeof parsed[i] === 'string' && parsed[i] ? parsed[i] : src)));
      }
    } catch {
      /* ignore malformed storage */
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('dasha-card-images', JSON.stringify(images));
  }, [images]);

  const handleUpload = (index: number, file?: File) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      setImages((prev) => prev.map((src, i) => (i === index ? String(reader.result) : src)));
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="page cards-page">
      <div className="sub-heading">
        <span className="eyebrow">chapter II · six memories</span>
        <h2>Карусель воспоминаний</h2>
        <p>Шесть маленьких карточек с любимыми кадрами. Нажми на карту — она перевернётся.</p>
      </div>
      <OrnateDivider icon={<Camera size={16} />} />

      <div className="orbit-stage" aria-label="Шесть вращающихся карточек">
        <div className="orbit-ring ring-one" />
        <div className="orbit-ring ring-two" />
        <div className="orbit-center">
          <span className="center-star">✦</span>
          <strong>ДАША</strong>
          <small>memories</small>
        </div>
        <div className="cards-orbit">
          {images.map((image, index) => {
            const angle = (360 / 6) * index;
            return (
              <div
                className="orbit-card-wrap"
                key={index}
                style={{ ['--angle' as string]: `${angle}deg` }}
              >
                <div className={`memory-card ${selected === index ? 'is-flipped' : ''}`} onClick={() => setSelected(selected === index ? null : index)}>
                  <div className="memory-face memory-front">
                    <span className="card-corner">0{index + 1}</span>
                    <div className="card-symbol">✦</div>
                    <span className="memory-title">A little<br />memory</span>
                    <span className="memory-subtitle">for Dasha</span>
                    <div className="lace">❦</div>
                  </div>
                  <div className="memory-face memory-back">
                    {image ? <img src={image} alt={`Фото для карточки ${index + 1}`} /> : <div className="photo-empty"><Camera size={27} /><span>Здесь будет<br />твоё фото</span></div>}
                    <span className="photo-label">memory 0{index + 1}</span>
                  </div>
                </div>
                <label className="upload-dot" title={`Загрузить фото ${index + 1}`} onClick={(e) => e.stopPropagation()}>
                  <input type="file" accept="image/*" onChange={(e) => handleUpload(index, e.target.files?.[0])} />
                  +
                </label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="cards-note">
        <BookOpen size={18} />
        <span>Фото уже есть — кнопка «+» позволяет заменить любое из них. Замены сохраняются только в текущей вкладке браузера.</span>
      </div>
    </section>
  );
}

function AuthorPage() {
  const [photo, setPhoto] = useState(authorImage);

  const handlePhoto = (file?: File) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => setPhoto(String(reader.result));
    reader.readAsDataURL(file);
  };

  return (
    <section className="page sub-page author-page">
      <div className="sub-heading">
        <span className="eyebrow">chapter IV · behind the letter</span>
        <h2>Автор</h2>
        <p>Небольшой уголок человека, который собрал эту страницу специально для тебя.</p>
      </div>
      <OrnateDivider icon={<Feather size={16} />} />

      <div className="author-layout">
        <div className="portrait-frame">
          <div className="portrait-inner">
            {photo ? <img src={photo} alt="Фото автора" /> : <div className="portrait-placeholder"><span>YOUR<br />PHOTO</span><small>click to upload</small></div>}
          </div>
          <label className="portrait-upload">
            <input type="file" accept="image/*" onChange={(e) => handlePhoto(e.target.files?.[0])} />
            Заменить фото
          </label>
        </div>

        <div className="author-card">
          <div className="author-monogram">V</div>
          <span className="eyebrow">the person behind the page</span>
          <h3>Veterno</h3>
          <p>Человек, который решил, что обычная открытка сегодня слишком скучная.</p>
          <div className="author-links">
            <a href="https://t.me/Fishiuy" target="_blank" rel="noreferrer"><span>Telegram</span><b>@Fishiuy</b></a>
            <a href="https://github.com/Veterno" target="_blank" rel="noreferrer"><span>GitHub</span><b><GithubIcon size={15} /> Veterno</b></a>
            <div><span>Valorant</span><b>Veterno#Fish</b></div>
          </div>
          <div className="author-sign">made with <Heart size={13} fill="currentColor" /> for Dasha</div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <PageShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="/wishes" element={<WishesPage />} />
        <Route path="/author" element={<AuthorPage />} />
      </Routes>
    </PageShell>
  );
}
