function SectionLabel({ number, text }) {
  return (
    <div className="section-label" aria-label={`${number} ${text}`}>
      <span className="section-index">{number}</span>
      <span className="section-kicker">{text}</span>
    </div>
  )
}

export default SectionLabel
