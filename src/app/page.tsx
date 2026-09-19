import type { LucideIcon } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import {
  ArrowRight,
  BadgeCheck,
  Compass,
  Grid2X2,
  Handshake,
  Home,
  Menu,
  Plus,
  Search,
  Send,
  ShieldCheck,
  Star,
  Store,
  UserRound,
  UsersRound,
} from 'lucide-react';

const stores = [
  {
    name: 'FurniStack',
    description: 'Modern furniture for modern living.',
    rating: '4.8',
    reviews: '1.2k+',
    image:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Urban Interiors',
    description: 'Contemporary style. Timeless comfort.',
    rating: '4.7',
    reviews: '856',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Cozy Home Galleries',
    description: 'Elegant pieces for every space.',
    rating: '4.6',
    reviews: '623',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'The Home Loft',
    description: 'Quality furniture. Better living.',
    rating: '4.5',
    reviews: '412',
    image:
      'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=900&q=85',
  },
];

const benefits: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: BadgeCheck,
    title: 'Verified Merchants',
    description: 'Quality stores, real businesses.',
  },
  { icon: Handshake, title: 'No Middleman Fees', description: 'You deal directly with the store.' },
  {
    icon: ShieldCheck,
    title: 'Secure & Transparent',
    description: 'Your data and interactions are safe.',
  },
  {
    icon: UsersRound,
    title: 'A Growing Network',
    description: 'More stores, more styles, more options.',
  },
];

const plans = [
  {
    name: 'Starter',
    audience: 'Perfect for new stores',
    price: '$29',
    features: ['1 Store', 'Basic analytics', 'Standard support'],
  },
  {
    name: 'Professional',
    audience: 'For growing businesses',
    price: '$59',
    popular: true,
    features: ['3 Stores', 'Advanced analytics', 'Priority support'],
  },
  {
    name: 'Business',
    audience: 'For large enterprises',
    price: '$99',
    features: ['Unlimited stores', 'Full analytics suite', 'Dedicated support'],
  },
];

export default function HomePage() {
  return (
    <main className="discovery-page">
      <header className="site-header">
        <a className="brand-block" href="#home" aria-label="FurniStack home">
          <img src="/furnistack_logo.png" alt="" className="brand-mark" />
          <span className="brand-copy">
            <strong>FurniStack</strong>
            <small>Better Spaces. Better Living.</small>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#stores">Browse Stores</a>
          <a href="#create-store">Create Store</a>
          <a href="#plans">Plans</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Search">
            <Search size={16} strokeWidth={1.7} />
          </button>
          <button className="icon-button" aria-label="Account">
            <UserRound size={16} strokeWidth={1.7} />
          </button>
          <a className="header-cta" href="#create-store">
            Get Started
          </a>
          <button className="menu-button" aria-label="Open menu">
            <Menu size={19} strokeWidth={1.7} />
          </button>
        </div>
      </header>

      <section className="discovery-hero" id="home">
        <picture className="hero-artwork">
          <source media="(max-width: 640px)" srcSet="/furnistack_mobile_hero_image.png" />
          <img
            src="/furnistack_desktop_hero_image.png"
            alt="Discover furniture from trusted stores"
          />
        </picture>
      </section>

      <section className="content-section stores-section" id="stores">
        <div className="section-top compact">
          <div>
            <span className="eyebrow">Top available stores</span>
            <h2>Featured Stores</h2>
          </div>
          <a className="text-link" href="#stores">
            View All Stores <ArrowRight size={13} />
          </a>
        </div>
        <div className="store-grid">
          {stores.map((store) => (
            <article className="store-card" key={store.name}>
              <div className="store-image" style={{ backgroundImage: `url(${store.image})` }} />
              <div className="store-details">
                <div className="store-title">
                  <span className="store-avatar">
                    <Store size={15} />
                  </span>
                  <div>
                    <h3>{store.name}</h3>
                    <span className="verified">
                      <BadgeCheck size={10} /> Verified Store
                    </span>
                  </div>
                </div>
                <p>{store.description}</p>
                <div className="store-rating">
                  <span>
                    <Star size={11} fill="currentColor" /> {store.rating}
                  </span>
                  <small>({store.reviews})</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section explore-section" id="explore">
        <div className="section-top">
          <div>
            <span className="eyebrow">Explore stores</span>
            <h2>Browse Furniture Stores</h2>
            <p>
              Discover top furniture stores and explore their collections,
              <br />
              styles and exclusive offerings.
            </p>
          </div>
          <a className="outline-link" href="#stores">
            View All Stores <ArrowRight size={13} />
          </a>
        </div>
        <article className="featured-store">
          <div className="featured-logo">
            <img src="/furnistack_logo.png" alt="" />
          </div>
          <div className="featured-info">
            <div>
              <h3>FurniStack</h3>
              <span className="verified">
                <BadgeCheck size={10} /> Verified Store
              </span>
            </div>
            <p>Modern furniture for modern living.</p>
            <div className="store-signals">
              <span>
                <Grid2X2 size={11} /> Premium Collections
              </span>
              <span>
                <ShieldCheck size={11} /> Quality Assured
              </span>
              <span>
                <BadgeCheck size={11} /> Trusted Seller
              </span>
            </div>
          </div>
          <div className="featured-image" />
          <a className="round-arrow" href="#stores" aria-label="Visit FurniStack store">
            <ArrowRight size={16} />
          </a>
        </article>
      </section>

      <section className="benefits-strip" aria-label="Marketplace benefits">
        {benefits.map(({ icon: Icon, title, description }) => (
          <div className="benefit" key={title}>
            <Icon size={25} strokeWidth={1.5} />
            <div>
              <strong>{title}</strong>
              <span>{description}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="content-section merchant-cta" id="create-store">
        <div className="merchant-image" />
        <div className="merchant-copy">
          <span className="eyebrow">For furniture businesses</span>
          <h2>Create Your Store</h2>
          <p>
            Join FurniStack and get your furniture store in front of thousands of potential
            customers.
          </p>
        </div>
        <a className="header-cta" href="#plans">
          Create Store <ArrowRight size={13} />
        </a>
      </section>

      <section className="content-section plans-section" id="plans">
        <div className="section-top compact">
          <div>
            <span className="eyebrow">Simple &amp; flexible</span>
            <h2>Our Plans</h2>
            <p>Choose the plan that fits your business and start growing today.</p>
          </div>
          <a className="outline-link" href="#plans">
            View All Plans <ArrowRight size={13} />
          </a>
        </div>
        <div className="plans-grid">
          {plans.map((plan) => (
            <article className={`plan-card${plan.popular ? ' popular' : ''}`} key={plan.name}>
              {plan.popular && <span className="popular-badge">Most Popular</span>}
              <h3>{plan.name}</h3>
              <p>{plan.audience}</p>
              <strong>
                {plan.price}
                <small>/month</small>
              </strong>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <BadgeCheck size={11} /> {feature}
                  </li>
                ))}
              </ul>
              <a className={plan.popular ? 'header-cta' : 'plan-link'} href="#create-store">
                Get Started
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <a className="brand-block" href="#home">
            <img src="/furnistack_logo.png" alt="" className="brand-mark" />
            <span className="brand-copy">
              <strong>FurniStack</strong>
              <small>Better Spaces. Better Living.</small>
            </span>
          </a>
          <p>
            The trusted marketplace connecting you to verified furniture stores and merchants across
            multiple brands.
          </p>
          <div className="socials">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" title="X">
              <FaXTwitter />
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#stores">Browse Stores</a>
          <a href="#create-store">Create Store</a>
          <a href="#plans">Plans</a>
        </div>
        <div>
          <h3>About</h3>
          <a href="#home">About Us</a>
          <a href="#home">How It Works</a>
          <a href="#home">Help &amp; Support</a>
          <a href="#home">Contact Us</a>
        </div>
        <div>
          <h3>Legal</h3>
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms of Service</a>
          <a href="#home">Cookie Policy</a>
        </div>
        <div className="newsletter">
          <h3>Stay Updated</h3>
          <p>Get the latest stores, styles and offers.</p>
          <form>
            <input type="email" placeholder="Enter your email" aria-label="Email address" />
            <button aria-label="Subscribe">
              <Send size={13} />
            </button>
          </form>
        </div>
        <div className="footer-bottom">
          <span>© 2025 FurniStack. All rights reserved.</span>
          <span>Better Spaces. Better Living.</span>
        </div>
      </footer>
      <nav className="mobile-actions" aria-label="Mobile quick actions">
        <a href="#home">
          <Home size={17} />
          <span>Home</span>
        </a>
        <a href="#stores">
          <Compass size={17} />
          <span>Browse</span>
        </a>
        <a href="#create-store">
          <Plus size={17} />
          <span>Create</span>
        </a>
        <a href="#plans">
          <Grid2X2 size={17} />
          <span>Plans</span>
        </a>
        <a href="#home">
          <UserRound size={17} />
          <span>Profile</span>
        </a>
      </nav>
    </main>
  );
}
