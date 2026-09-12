import ExistingCTAButton from "@/components/ui/ctaButton";
import type { CTA } from "@/utils/interface/common.interface";

export function CTAButton({ classNames, external, target, rel, ...cta }: CTA) {
  return (
    <ExistingCTAButton
      btnStyle={cta.variant}
      theme={cta?.theme}
      className={classNames}
      href={cta.href}
      target={external ? "_blank" : target}
      rel={external ? "noopener noreferrer" : rel}>
      {cta.label}
    </ExistingCTAButton>
  );
}
