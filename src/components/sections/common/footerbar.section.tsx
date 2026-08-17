export function FooterBarSection() {
  return (
    <footer className="border-t border-slate-200 bg-(--ssc-uk-main-white-color) font-jakarta">
      <div className="ss-construction-uk-container flex flex-col gap-3 py-7 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} SS Consultants UK Limited</p>
        <a className="transition-colors hover:text-(--ssc-uk-main-highlight-color)" href="tel:07590514937">
          07590 514937
        </a>
      </div>
    </footer>
  );
}
