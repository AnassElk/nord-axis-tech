// src/components/ui/SectionLabel.tsx
interface SectionLabelProps {
  number: string
  label: string
}

export default function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-body text-xs font-semibold text-cyan tracking-[0.18em] uppercase">
        {number}
      </span>
      <div className="w-px h-3 bg-border-strong" />
      <span className="font-body text-xs font-semibold text-muted tracking-[0.18em] uppercase">
        {label}
      </span>
    </div>
  )
}
