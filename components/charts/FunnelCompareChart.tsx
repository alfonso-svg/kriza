"use client"

type Step = { paso: string; jul: number; ago: number }

type Props = {
  data:        readonly Step[]
  breakStep:   string  // paso donde se corta el embudo (se pinta en rojo)
  breakLabel:  string  // texto del quiebre, ej. "6,58% → 4,49% de fichas a carrito (−32%)"
}

const fmt1 = (n: number) => n.toFixed(n % 1 === 0 ? 0 : 1).replace(".", ",")

export function FunnelCompareChart({ data, breakStep, breakLabel }: Props) {
  const max = Math.max(...data.flatMap(d => [d.jul, d.ago])) || 1

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-gray-300" />Julio
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#8B5CF6" }} />Agosto
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {data.map(step => {
          const isBreak = step.paso === breakStep
          return (
            <div key={step.paso}>
              <p className="text-[11px] font-medium text-gray-500 mb-1">{step.paso}</p>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gray-300"
                      style={{ width: `${Math.max((step.jul / max) * 100, 2)}%` }}
                    />
                  </div>
                  <span className="w-12 text-right text-[11px] tabular-nums text-gray-500">{fmt1(step.jul)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${Math.max((step.ago / max) * 100, 2)}%`,
                        backgroundColor: isBreak ? "#dc2626" : "#8B5CF6",
                      }}
                    />
                  </div>
                  <span
                    className="w-12 text-right text-[11px] font-semibold tabular-nums"
                    style={{ color: isBreak ? "#dc2626" : "#18181B" }}
                  >
                    {fmt1(step.ago)}
                  </span>
                </div>
              </div>
              {isBreak && (
                <p className="mt-1 text-[10px] font-semibold" style={{ color: "#dc2626" }}>
                  {breakLabel}
                </p>
              )}
            </div>
          )
        })}
      </div>

      <p className="text-[10px] text-gray-400">Base: 100 visitas a la web en cada mes.</p>
    </div>
  )
}
