import { Snowflake } from "@/components/snowflake";

export function SnowflakesBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <Snowflake
          key={i}
          delay={i * 0.2}
          duration={10 + Math.random() * 10}
          size={12 + Math.random() * 8}
        />
      ))}
    </div>
  );
}
