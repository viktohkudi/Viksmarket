export default function BitcoinPage() {
  return (
    <main style={{ background: '#0b0e14', color: '#e5e7eb', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '800px', margin: 'auto' }}>
        
        <a href="/" style={{ color: '#facc15', textDecoration: 'none', fontWeight: '600' }}>← Back to Home</a>

        <h1 style={{ fontSize: '36px', fontWeight: '900', marginTop: '20px', lineHeight: '1.2' }}>
          Bitcoin Hits ₦86,648,002: Should You Sell Now?
        </h1>

        <img 
          src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800" 
          alt="Bitcoin" 
          style={{ width: '100%', borderRadius: '12px', margin: '20px 0' }}
        />

        <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#d1d5db' }}>
          Bitcoin has just crossed ₦86,648,002 on Viksmarket. This is the highest we've seen this year.
          <br/><br/>
          For Naira holders, this means your BTC is worth more in Naira terms. But should you sell or hold?
          <br/><br/>
          Most analysts say: Don't panic sell. Bitcoin usually runs in cycles.
        </p>

      </div>
    </main>
  )
}
