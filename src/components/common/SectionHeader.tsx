import type { SectionHeader as SectionHeaderData } from "@/app/utils/interface/common.interface";
import { RichText } from "@/components/common/RichText";

export function SectionHeader({ data, titleClassName = "", descriptionClassName = "" }: { data: SectionHeaderData; titleClassName?: string; descriptionClassName?: string }) {
  return (
    <>
      <h2 className={titleClassName}><RichText content={data.title} /></h2>
      {data.description && <p className={descriptionClassName}><RichText content={data.description} /></p>}
    </>
  );
}

