'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import RevealText from '@/components/RevealText'
import MagneticButton from '@/components/MagneticButton'

const categories = ['Alles', 'Tips', 'Verhalen', 'Nieuws']

const blogPosts = [
  {
    id: 1,
    category: 'Tips',
    title: '10 Tips voor een opgeruimd huis',
    excerpt: 'Ontdek eenvoudige manieren om uw huis georganiseerd te houden, ook met een druk leven.',
    date: '15 Dec 2024',
    readTime: '5 min',
    featured: true,
  },
  {
    id: 2,
    category: 'Verhalen',
    title: 'De kracht van verbinding',
    excerpt: 'Waarom persoonlijk contact zo belangrijk is in huishoudelijke hulp.',
    date: '10 Dec 2024',
    readTime: '4 min',
    featured: false,
  },
  {
    id: 3,
    category: 'Tips',
    title: 'Natuurlijke schoonmaakmiddelen',
    excerpt: 'Maak uw eigen milieuvriendelijke schoonmaakproducten met ingrediënten uit de keuken.',
    date: '5 Dec 2024',
    readTime: '6 min',
    featured: false,
  },
  {
    id: 4,
    category: 'Nieuws',
    title: 'Fleurig Thús groeit',
    excerpt: 'Een update over onze diensten en de groeiende vraag naar persoonlijke huishoudelijke hulp.',
    date: '1 Dec 2024',
    readTime: '3 min',
    featured: false,
  },
  {
    id: 5,
    category: 'Verhalen',
    title: 'Van nergens naar iets',
    excerpt: 'Mijn persoonlijke reis en waarom ik geloof in het helpen van anderen.',
    date: '25 Nov 2024',
    readTime: '7 min',
    featured: true,
  },
  {
    id: 6,
    category: 'Tips',
    title: 'De perfecte schoonmaakroutine',
    excerpt: 'Hoe u een effectieve wekelijkse schoonmaakroutine kunt opzetten.',
    date: '20 Nov 2024',
    readTime: '5 min',
    featured: false,
  },
]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Alles')

  const filteredPosts = activeCategory === 'Alles' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory)

  const featuredPost = blogPosts.find(post => post.featured)

  return (
    <>
      {/* Hero */}
      <section className="blog-hero">
        <div className="container">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Blog
          </motion.span>
          <h1 className="blog-title">
            <motion.span
              className="blog-title-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] as const }}
            >
              Verhalen &
            </motion.span>
            <motion.span
              className="blog-title-line accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.6, 0.05, 0.01, 0.9] as const }}
            >
              inzichten
            </motion.span>
          </h1>
          <motion.p
            className="blog-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Tips, verhalen en nieuws over huishoudelijke hulp
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="featured-section">
          <div className="container">
            <motion.article
              className="featured-post"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
              whileHover={{ y: -10 }}
            >
              <div className="featured-image">
                <motion.div
                  className="featured-image-overlay"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="featured-badge">Uitgelicht</span>
                </motion.div>
              </div>
              <div className="featured-content">
                <span className="post-category">{featuredPost.category}</span>
                <h2 className="featured-title">{featuredPost.title}</h2>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>
                <div className="post-meta">
                  <span className="post-date">{featuredPost.date}</span>
                  <span className="post-separator">•</span>
                  <span className="post-read-time">{featuredPost.readTime} leestijd</span>
                </div>
                <MagneticButton variant="secondary" className="featured-cta" dataCursor="Lees">
                  Lees artikel
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </MagneticButton>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="posts-section">
        <div className="container">
          {/* Categories */}
          <motion.div
            className="categories"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
                {activeCategory === category && (
                  <motion.span
                    className="category-indicator"
                    layoutId="category-indicator"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Posts Grid */}
          <motion.div
            className="posts-grid"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <motion.div
            className="newsletter-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <RevealText>
              <h2>Blijf op de hoogte</h2>
            </RevealText>
            <RevealText delay={0.1}>
              <p>Ontvang tips en verhalen direct in uw inbox.</p>
            </RevealText>
            <motion.form
              className="newsletter-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="newsletter-input-wrapper">
                <input
                  type="email"
                  placeholder="Uw email adres"
                  className="newsletter-input"
                />
                <MagneticButton type="submit" dataCursor="Abonneer">
                  Abonneren
                </MagneticButton>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </>
  )
}

// Blog Card Component
interface BlogCardProps {
  post: {
    id: number
    category: string
    title: string
    excerpt: string
    date: string
    readTime: string
    featured: boolean
  }
  index: number
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.article
      ref={ref}
      className="blog-card"
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <Link href="#" className="blog-card-link" data-cursor="Lees">
        <div className="blog-card-image">
          <motion.div
            className="blog-card-image-inner"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
        <div className="blog-card-content">
          <span className="post-category">{post.category}</span>
          <h3 className="blog-card-title">{post.title}</h3>
          <p className="blog-card-excerpt">{post.excerpt}</p>
          <div className="post-meta">
            <span className="post-date">{post.date}</span>
            <span className="post-separator">•</span>
            <span className="post-read-time">{post.readTime}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
