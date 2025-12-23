'use client'

import { use } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import MagneticButton from '@/components/MagneticButton'
import { blogPosts } from '@/data/blogPosts'
import '../blog-post.css'

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <section className="blog-post-hero">
        <div className="container">
          <motion.div
            className="blog-post-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/blog" className="back-link" data-cursor="Terug">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Terug naar blog
            </Link>
            <span className="post-category">{post.category}</span>
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="post-meta">
              <span className="post-date">{post.date}</span>
              <span className="post-separator">•</span>
              <span className="post-read-time">{post.readTime} leestijd</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="blog-post-content">
        <div className="container">
          <motion.article
            className="blog-post-article"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
          </motion.article>

          {/* CTA */}
          <motion.div
            className="blog-post-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Interesse in onze diensten?</h3>
            <p>Neem contact op voor een vrijblijvend gesprek</p>
            <Link href="/contact">
              <MagneticButton dataCursor="Contact">
                Neem contact op
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
