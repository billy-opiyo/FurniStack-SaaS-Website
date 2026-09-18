const navItems = ['Collection', 'Furniture', 'Boutique', 'Why FurniStack'];

const categoryCards = [
  { name: 'Living Room', tone: 'Warm minimal' },
  { name: 'Dining', tone: 'Crafted detail' },
  { name: 'Bedroom', tone: 'Restful textures' },
  { name: 'Outdoor', tone: 'Seasonal comfort' },
];

export default function HomePage() {
  return (
    <main className="landing-page">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">F</div>
          <div>
            <div className="brand-name">FurniStack</div>
            <div className="brand-tagline">The Complete Growth For Furniture Stores</div>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href="#" className="nav-link">
              {item}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="ghost-button">Log in</button>
          <button className="primary-button">Book a demo</button>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <span className="eyebrow">Curated furniture commerce</span>
          <h1>Build a premium furniture brand that feels as refined as the pieces you sell.</h1>
          <p>
            From boutique stores to multi-location growth, FurniStack gives you the tools to design,
            market, and scale exceptional living spaces.
          </p>

          <div className="cta-row">
            <button className="primary-button">Shop collection</button>
            <button className="secondary-button">Explore platform</button>
          </div>

          <div className="trust-row" aria-label="Key business stats">
            <div>
              <strong>1.4k+</strong>
              <span>Stores launched</span>
            </div>
            <div>
              <strong>32%</strong>
              <span>Average lift</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Retail operations</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="FurniStack lifestyle imagery">
          <div className="hero-image-wrap">
            <img
              src="/furnistack_hero_desktop.png"
              alt="Luxury furniture lifestyle scene"
              className="hero-image desktop"
            />
            <img
              src="/FurniStack_hero_image.png"
              alt="Luxury furniture store display"
              className="hero-image mobile"
            />
          </div>

          <div className="glass-card badge-card top-card">
            <span className="badge-label">Premium collection</span>
            <strong>Walnut & linen</strong>
          </div>

          <div className="glass-card stat-card">
            <div className="mini-graph" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div>
              <strong>+84%</strong>
              <small>conversion uplift</small>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-section" aria-label="Furniture categories">
        <div className="section-heading">
          <span className="eyebrow">Designed for modern homes</span>
          <h2>Shop by collection</h2>
        </div>

        <div className="category-grid">
          {categoryCards.map((card) => (
            <article key={card.name} className="category-card">
              <div className="category-art" aria-hidden="true" />
              <div className="category-copy">
                <span>{card.name}</span>
                <small>{card.tone}</small>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
