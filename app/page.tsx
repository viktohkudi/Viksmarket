import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { AdSlot } from '@/components/ad-slot'
import { MarketBoard } from '@/components/market-board'
import { FeaturedArticle } from '@/components/featured-article'
import { NewsGrid } from '@/components/news-grid'
import { featured, articles } from '@/lib/news'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-4 pt-4 md:px-6">
        <AdSlot label="Ad Space — Binance / Bybit / OKX" />
      </div>

      <main className="mx-auto max-w-6xl px-4 py-6 md:px-6">
        <MarketBoard>
          <FeaturedArticle article={featured} />
          <NewsGrid articles={articles} />
        </MarketBoard>
      </main>

      <SiteFooter />
    </div>
  )
}
