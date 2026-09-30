import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import {
  MapPin, Phone, Clock3, Menu, X, UtensilsCrossed, ChefHat,
  Truck, PartyPopper, Star, ArrowRight, Leaf, Instagram, Facebook
} from 'lucide-react'

const ADDRESS = '2108 Dallas Pkwy Suite 228, Plano, TX 75093'
const PHONE = '972-269-6558' // Replace with the restaurant's real phone number
const ORDER_URL = 'https://aaharva-plano.cloveronline.com/menu/all'
const BEYOND_MENU = "https://www.smorefood.com/x24a3pkq/aaharva-plano-75093/order-online?utm_source=gmb&utm_medium=order_link"
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`

const dishes = [
  {
    name: 'Chicken Biryani',
    tag: 'Signature',
    description: 'Fragrant basmati rice layered with tender chicken, herbs and aromatic Indian spices.',
    emoji: '🍛'
  },
  {
    name: 'Chicken Tikka Masala',
    tag: 'Guest Favorite',
    description: 'Char-grilled chicken simmered in a rich, creamy tomato and spice sauce.',
    emoji: '🥘'
  },
  {
    name: 'Paneer Tikka Masala',
    tag: 'Vegetarian',
    description: 'Paneer in a velvety tomato masala with warming spices and a touch of cream.',
    emoji: '🧀'
  },
  {
    name: 'Chicken 65',
    tag: 'Spicy',
    description: 'Crisp, fiery South Indian-style chicken tossed with curry leaves and chilies.',
    emoji: '🌶️'
  },
  {
    name: 'Dal Tadka',
    tag: 'Comfort Food',
    description: 'Slow-cooked lentils finished with a sizzling tempering of garlic, cumin and spices.',
    emoji: '🥣'
  },
  {
    name: 'Indo-Chinese Favorites',
    tag: 'Bold Flavors',
    description: 'Savory, wok-fired dishes blending Indian spices with Chinese-inspired techniques.',
    emoji: '🥡'
  }
]

const faqs = [
  ['Where is Aaharva located in Plano?', `Aaharva is located at ${ADDRESS}.`],
  ['Does Aaharva offer takeout and delivery?', 'Yes. Aaharva is designed to serve dine-in guests as well as convenient takeout and delivery orders.'],
  ['Does Aaharva have vegetarian options?', 'Yes. The menu can feature a variety of vegetarian Indian dishes, including paneer, lentil and vegetable-based favorites.'],
  ['Does Aaharva offer catering in Plano?', 'Yes. Aaharva can promote catering for office lunches, family events, celebrations and larger gatherings in Plano and nearby areas.'],
  ['What kind of food does Aaharva serve?', 'Aaharva focuses on authentic Indian flavors, including biryani, curries, vegetarian dishes, South Indian favorites and Indo-Chinese selections.']
]

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function App() {
  const [open, setOpen] = useState(false)

  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Aaharva',
    image: '/aaharva-logo.jpeg',
    url: typeof window !== 'undefined' ? window.location.origin : '',
    servesCuisine: ['Indian', 'South Indian', 'Indo-Chinese'],
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2108 Dallas Pkwy Suite 228',
      addressLocality: 'Plano',
      addressRegion: 'TX',
      postalCode: '75093',
      addressCountry: 'US'
    },
    areaServed: ['Plano', 'West Plano', 'Dallas-Fort Worth'],
    acceptsReservations: true
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer }
    }))
  }

  return (
    <>
      <Helmet>
        <title>
          Aaharva | Indian Restaurant in Plano, TX | Biryani, Curry & More
        </title>
        <meta
          name="description"
          content="Visit Aaharva in Plano, TX for authentic Indian food, biryani, curries, vegetarian dishes, Indo-Chinese favorites, takeout, delivery and catering."
        />
        <meta
          name="keywords"
          content="Indian restaurant Plano TX, Indian food Plano, biryani Plano, Indian catering Plano, Indian takeout Plano, South Indian food Plano, Indo Chinese Plano"
        />
        <link
          rel="canonical"
          href={typeof window !== "undefined" ? window.location.origin : ""}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Aaharva | Authentic Indian Food in Plano, TX"
        />
        <meta
          property="og:description"
          content="Biryani, curries, vegetarian favorites, Indo-Chinese dishes, takeout, delivery and catering in Plano, Texas."
        />
        <meta property="og:image" content="/aaharva-logo.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(restaurantSchema)}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#top" className="brand" aria-label="Aaharva home">
            <img
              src="/aaharva-logo.jpeg"
              alt="Aaharva Indian restaurant logo"
            />
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#catering">Catering</a>
            <a href="#location">Location</a>
          </nav>

          <div className="nav-actions">
            <a className="btn btn-primary desktop-only" href={ORDER_URL}>
              Order Online
            </a>
            <a className="btn btn-primary desktop-only" href={BEYOND_MENU}>
              Order Delivery
            </a>
            <button
              className="menu-toggle"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mobile-nav">
            {["menu", "about", "catering", "location"].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setOpen(false)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <a className="btn btn-primary" href={ORDER_URL}>
              Order Online
            </a>
            <a className="btn btn-primary" href={BEYOND_MENU}>
              Order Delivery
            </a>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Indian restaurant in Plano, Texas</span>
              <h1>Authentic Indian Food in Plano, TX</h1>
              <p>
                Discover bold, comforting Indian flavors at Aaharva — from
                fragrant biryani and rich curries to vegetarian favorites, South
                Indian classics and Indo-Chinese specialties.
              </p>
              <div className="hero-buttons">
                <a className="btn btn-primary" href={ORDER_URL}>
                  Order Online <ArrowRight size={18} />
                </a>
                <a className="btn btn-secondary" href="#menu">
                  View Menu
                </a>
              </div>
              <div className="hero-proof">
                <span>
                  <MapPin size={18} /> West Plano
                </span>
                <span>
                  <UtensilsCrossed size={18} /> Dine-In
                </span>
                <span>
                  <Truck size={18} /> Takeout & Delivery
                </span>
              </div>
            </div>

            <div className="hero-art" aria-label="Aaharva brand showcase">
              <div className="hero-card">
                <div className="spice-orb orb-one"></div>
                <div className="spice-orb orb-two"></div>
                <img
                  src="/aaharva-logo.jpeg"
                  alt="Aaharva Taste The Tradition logo"
                />
                <div className="hero-badge">
                  <Leaf size={18} />
                  Taste the Tradition
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Restaurant details">
          <div className="container trust-grid">
            <div>
              <MapPin />
              <span>
                <strong>Visit Aaharva</strong>
                {ADDRESS}
              </span>
            </div>
            <div>
              <Clock3 />
              <span>
                <strong>Freshly Prepared</strong>Dine-in, pickup & delivery
              </span>
            </div>
            <div>
              <PartyPopper />
              <span>
                <strong>Catering</strong>Office lunches & celebrations
              </span>
            </div>
          </div>
        </section>

        <section className="section" id="menu">
          <div className="container">
            <SectionHeading
              eyebrow="Popular at Aaharva"
              title="Indian favorites made for every craving"
              text="A balanced selection of comforting classics, vegetarian options and bold specialties for lunch, dinner or your next group order."
            />
            <div className="dish-grid">
              {dishes.map((dish) => (
                <article className="dish-card" key={dish.name}>
                  <div className="dish-visual" aria-hidden="true">
                    {dish.emoji}
                  </div>
                  <span className="dish-tag">{dish.tag}</span>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                  <a href={ORDER_URL}>
                    Order this dish <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section split-section" id="about">
          <div className="container split-grid">
            <div className="story-card">
              <span className="story-kicker">Aaharva • Plano</span>
              <h2>
                Fresh, Authentic Indian Food, traditional Indian flavos in
                Plano, TX
              </h2>
              <p>
                Experience the rich flavors of India at Aaharva, your
                neighborhood Indian restaurant in Plano, TX. Our menu brings
                together aromatic spices, flavorful biryani, comforting curries,
                vegetarian favorites, and Indo-Chinese specialties, all prepared
                to deliver the traditional tastes you know and love. Whether
                you're joining us for Indian lunch in Plano, picking up dinner
                for the family, ordering your favorite dishes to enjoy at home,
                or planning Indian catering in Plano, Aaharva makes every meal
                flavorful and welcoming.
              </p>
              <a href="#location" className="text-link">
                Plan your visit <ArrowRight size={17} />
              </a>
            </div>
            <div className="feature-stack">
              <div className="feature-card">
                <ChefHat />
                <div>
                  <h3>Made with care</h3>
                  <p>
                    Balanced spices, layered flavor and freshly prepared dishes.
                  </p>
                </div>
              </div>
              <div className="feature-card">
                <Leaf />
                <div>
                  <h3>Vegetarian friendly</h3>
                  <p>Paneer, lentil and vegetable dishes for every table.</p>
                </div>
              </div>
              <div className="feature-card">
                <UtensilsCrossed />
                <div>
                  <h3>Something for everyone</h3>
                  <p>
                    From comforting classics to spicy favorites and Indo-Chinese
                    options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section accent-section" id="lunchitems">
          <div className="container promo-grid">
            <div>
              <span className="eyebrow light">Lunch in Plano</span>
              <h2>Indian Lunch in Plano, Full of Flavor.</h2>
              <p>
                Make your lunch break something to look forward to at Aaharva.
                Enjoy freshly prepared Indian favorites featuring aromatic
                spices, comforting curries, flavorful biryani, vegetarian
                dishes, and more. Our lunch selection offers a delicious way to
                explore authentic Indian flavors, whether you're stopping in for
                a quick weekday meal or enjoying lunch with family, friends, or
                coworkers. Our selection may change regularly, giving you
                something different to discover on every visit. Aaharva serves
                lunch at 2108 Dallas Pkwy Suite 228, Plano, TX 75093.
              </p>
              <a className="btn btn-light" href="#location">
                Get Directions
              </a>
            </div>
            <div className="promo-panel">
              <span className="promo-icon">🥗</span>
              <strong>Daily Specials</strong>
              <p>Update this panel with current days, times and pricing.</p>
            </div>
          </div>
        </section>

        <section className="section" id="catering">
          <div className="container catering-grid">
            <div>
              <SectionHeading
                eyebrow="Indian catering in Plano"
                title="Bring Aaharva to your next gathering"
                text="Office lunches, birthdays, family celebrations and community events — create a catering section that converts local search traffic into real inquiries."
              />
              <div className="check-list">
                <span>✓ Small & large group orders</span>
                <span>✓ Vegetarian-friendly selections</span>
                <span>✓ Biryani, curries, appetizers & more</span>
                <span>✓ Pickup or coordinated catering service</span>
              </div>
              <a className="btn btn-primary" href="mailto:hello@aaharva.com">
                Request Catering
              </a>
            </div>
            <div className="catering-card">
              <PartyPopper size={42} />
              <h3>Planning an event?</h3>
              <p>
                Tell us your guest count, date and favorite dishes. We’ll help
                you build a flavorful spread.
              </p>
            </div>
          </div>
        </section>

        <section className="section reviews">
          <div className="container">
            <SectionHeading
              eyebrow="Loved locally"
              title="A neighborhood restaurant worth sharing"
            />
            <div className="review-grid">
              {[
                {
                  text: `I visited Aaharva in Plano and the food was absolutely delicious — it truly felt like home-cooked food made by mom.
                  At first, I thought the price was a bit high for the number of items, but once I tasted the food, I realized it’s worth every penny. Instead of eating many average dishes elsewhere, it’s better to enjoy this one plate of simple, fresh, and flavorful home-style food.
                  The quality, taste, and warmth of the food made me feel at home. Highly recommended for anyone missing real Indian homemade taste! `,
                  name: "Artist Yaswanth",
                  star: [1, 2, 3, 4, 5],
                },
                {
                  text: `​Plano and neighborhood doesn't have many places that offer a lunch buffet on both weekdays and weekends, but this restaurant delivers at a very reasonable price ($12.99 weekdays, $14.99 weekends). We visited on a weekend and were impressed by the decent variety of both vegetarian and non-vegetarian dishes. They even had a great selection of desserts, including mango lassi!
                        ​The mutton curry was an absolute standout for us, and the fish appetizers were great too. All in all, you get quality food, good variety, and excellent taste for an affordable price. We will definitely visit again and will be recommending it to our friends!`,
                  name: "Pranav Patkar",
                  star: [1, 2, 3, 4, 5],
                },
                {
                  text: `Experience was great. Sree was profesional, courteous, funny, and helpful. I recommend to stop by when in Plano.`,
                  name: "J.D",
                  star: [1, 2, 3, 4, 5],
                },
              ].map((comment, i) => (
                <blockquote className="review-card" key={i}>
                  <p>“{comment.name}”</p>
                  <div className="stars" aria-label="5 stars">
                    {comment?.star?.map((n) => (
                      <Star key={n} size={17} fill="currentColor" />
                    ))}
                  </div>
                  <p>“{comment.text}”</p>
                  {/* <cite>Sample testimonial — replace with a real customer review</cite> */}
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="section location-section" id="location">
          <div className="container location-grid">
            <div>
              <SectionHeading
                eyebrow="Visit Aaharva"
                title="Indian food in West Plano"
                text="Conveniently located on Dallas Parkway in Plano, Texas."
              />
              <div className="location-details">
                <div>
                  <MapPin />
                  <span>
                    <strong>Aaharva</strong>
                    {ADDRESS}
                  </span>
                </div>
                <div>
                  <Phone />
                  <span>
                    <strong>Phone</strong>
                    {PHONE}
                  </span>
                </div>
                <div>
                  <Clock3 />
                  <span>
                    <strong>Hours</strong>Update with current business hours
                  </span>
                </div>
              </div>
              <div className="hero-buttons">
                <a
                  className="btn btn-primary"
                  href={MAP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions
                </a>
                <a
                  className="btn btn-secondary"
                  href={`tel:${PHONE.replace(/\D/g, "")}`}
                >
                  Call Aaharva
                </a>
              </div>
            </div>
            <a
              className="map-card"
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Aaharva location in Google Maps"
            >
              <div className="map-pin">
                <MapPin size={36} />
              </div>
              <span>Plano, Texas</span>
              <strong>2108 Dallas Pkwy, Suite 228</strong>
              <small>Tap to open Google Maps</small>
            </a>
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-grid">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Helpful answers before you visit"
              text="This section also supports local SEO by answering common Plano restaurant searches naturally."
            />
            <div className="faq-list">
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/aaharva-logo.jpeg" alt="Aaharva logo" />
            <p>Authentic Indian food in Plano, Texas.</p>
          </div>
          <div>
            <strong>Explore</strong>
            <a href="#menu">Menu</a>
            <a href="#catering">Catering</a>
          </div>
          <div>
            <strong>Visit</strong>
            <a href={MAP_URL} target="_blank" rel="noreferrer">
              {ADDRESS}
            </a>
            <a href={`tel:${PHONE.replace(/\D/g, "")}`}>{PHONE}</a>
          </div>
          <div>
            <strong>Follow</strong>
            <div className="socials">
              <a
                href="https://www.instagram.com/aaharva.plano/?fbclid=IwY2xjawTlVtJwZG9mBGV4dG4DYWVtAjExAGJyaWQRMTk3RkllQ1lDT3UyRkR5RGpzcnRjBmFwcF9pZAEwAAEe346vM5vdqJ3fj5bw-RKw_GAcQ8AEKCjy-74BVyMWBr8QDZc3sLPTqEp4i94_aem_4WIfBACQuGSxhwsWbHvEsw"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a href="https://www.facebook.com/aaharva" aria-label="Facebook">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Aaharva. All rights reserved.
          </span>
          <span>Taste The Tradition.</span>
        </div>
      </footer>
    </>
  );
}

export default App
