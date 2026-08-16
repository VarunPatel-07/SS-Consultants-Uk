import Image from "next/image";
import { ChevronDown, Phone } from "lucide-react";
import logo from "@/assets/images/logo/ss-consultants-logo-black-trasperent.png";
import { Button } from "@/components/ui/button";

export function NavbarSection() {
  return (
    <header className="border-b border-slate-200 bg-white font-lora">
      <div className="ss-construction-uk-container flex min-h-[104px] items-center justify-between gap-8">
        <a className="shrink-0" href="#top" aria-label="SS Consultants home">
          <Image className="h-auto w-[260px]" src={logo} alt="SS Consultants UK Limited" priority />
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
          <a className="text-base font-medium text-[#ff5108]" href="#top">Home</a>
          <a className="inline-flex items-center gap-2 text-base font-medium text-slate-950 transition-colors hover:text-[#ff5108]" href="#services">
            Services
            <ChevronDown aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
          </a>
          <a className="text-base font-medium text-slate-950 transition-colors hover:text-[#ff5108]" href="#about">About</a>
          <a className="text-base font-medium text-slate-950 transition-colors hover:text-[#ff5108]" href="#blog">Blog</a>
          <a className="text-base font-medium text-slate-950 transition-colors hover:text-[#ff5108]" href="#contact">Contact</a>
        </nav>

        <div className="hidden items-center gap-6 xl:flex">
          <a className="inline-flex h-14 items-center gap-3 rounded-xl border border-slate-950 px-5 font-jakarta text-lg font-semibold text-slate-950 transition-colors hover:bg-slate-50" href="tel:07590514937">
            <Phone aria-hidden="true" className="h-5 w-5" strokeWidth={2.4} />
            07590 514937
          </a>
          <Button className="h-14 rounded-xl px-7 font-jakarta text-base" type="button">Request a Quote</Button>
        </div>

        <a className="text-sm font-semibold text-[#ff5108] xl:hidden" href="tel:07590514937">Call us</a>
      </div>
    </header>
  );
}
