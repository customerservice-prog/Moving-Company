"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { INVENTORY_CATEGORIES } from "@/components/quote/quoteTypes";

interface StepInventoryProps {
  counts: Record<string, number>;
  onChange: (counts: Record<string, number>) => void;
}

/**
 * Step 6: rough inventory by room, using quantity steppers instead of a
 * long free-text box. This is intentionally approximate -- it feeds a
 * simple item count into the estimate engine, not a full moving inventory
 * system yet.
 */
export function StepInventory({ counts, onChange }: StepInventoryProps) {
  function updateCount(key: string, delta: number) {
    const current = counts[key] ?? 0;
    const next = Math.max(0, current + delta);
    onChange({ ...counts, [key]: next });
  }

  const totalItems = Object.values(counts).reduce((sum, n) => sum + n, 0);

  return (
    <div>
      <h3 className="mb-1 text-lg font-semibold text-neutral-900">
        Roughly how much are you moving?
      </h3>
      <p className="helper-text mb-4">
        Give us a rough count per area. You can always add more detail or
        photos later.
      </p>
      <div className="flex flex-col gap-3">
        {INVENTORY_CATEGORIES.map((category) => {
          const count = counts[category.key] ?? 0;
          return (
            <Card key={category.key} className="flex items-center justify-between gap-4">
              <div>
                <p className="font-medium text-neutral-900">{category.label}</p>
                <p className="text-sm text-neutral-500">{category.sampleItems}</p>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => updateCount(category.key, -1)}
                  aria-label={`Decrease ${category.label} count`}
                >
                  −
                </Button>
                <span className="w-6 text-center font-medium text-neutral-900">{count}</span>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => updateCount(category.key, 1)}
                  aria-label={`Increase ${category.label} count`}
                >
                  +
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
      <p className="mt-4 text-sm text-neutral-600">
        Total items entered: <span className="font-medium text-neutral-900">{totalItems}</span>
      </p>
    </div>
  );
}
