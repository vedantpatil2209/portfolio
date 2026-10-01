const philosophy = [
  'Build',
  'Analyze',
  'Experiment',
  'Improve',
]

function PhilosophyStrip() {
  return (
    <div className="philosophy-strip" aria-label="Professional working philosophy">
      {philosophy.map((item, index) => (
        <div key={item} className="philosophy-item">
          <span className="philosophy-index">{String(index + 1).padStart(2, '0')}</span>
          <span className="philosophy-name">{item}</span>
        </div>
      ))}
    </div>
  )
}

export default PhilosophyStrip
