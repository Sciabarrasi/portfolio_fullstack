export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
}) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-12">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-3">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
