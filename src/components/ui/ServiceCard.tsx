// src/components/ui/ServiceCard.tsx
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  number: string
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

export default function ServiceCard({
  number,
  icon: Icon,
  title,
  description,
  tags,
}: ServiceCardProps) {
  return (
    <div className="group bg-card border border-border p-6 hover:border-cyan/40 hover:shadow-sm transition-all duration-300 rounded-sm">
      <div className="flex items-start justify-between mb-5">
        <div className="w-10 h-10 bg-cyan-light flex items-center justify-center rounded-sm">
          <Icon className="w-5 h-5 text-cyan" strokeWidth={1.5} />
        </div>
        <span className="font-mono text-xs text-muted tracking-widest">{number}</span>
      </div>
      <h3 className="font-display text-xl text-ink tracking-wider mb-2">{title}</h3>
      <p className="font-body text-sm text-ink-secondary leading-relaxed mb-5">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-body text-xs text-muted bg-background border border-border px-2 py-0.5 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
