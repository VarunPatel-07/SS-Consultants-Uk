import { SectionHeader } from "@/app/utils/interface/common.interface";
import { RichText } from "@/components/common/RichText";

function CommonSectionHeader({ data }: { data: SectionHeader }) {
  return (
    <div className="mx-auto max-w-4xl text-center pb-12">
      <h2 id="heating-support-title" className="ssc-section-title font-jakarta">
        <RichText content={data?.title} parentWrapper="items-center!" commonChunkClassNames="reveal-text-animation" />
      </h2>
      {data?.description && (
        <p className="ssc-section-description mx-auto mt-5 max-w-3xl font-jakarta text-pretty">
          <RichText content={data?.description} commonChunkClassNames="reveal-text-animation" />
        </p>
      )}
    </div>
  );
}

export default CommonSectionHeader;
