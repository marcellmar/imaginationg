const SiteFooter = () => {
  return (
    <footer className="gpi-rule">
      <div className="gpi-shell flex flex-col gap-3 py-8 font-mono text-xs text-stone-600 md:flex-row md:items-center md:justify-between">
        <div>GPI Studio. Operating intelligence for companies in motion.</div>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <a className="transition-colors hover:text-stone-950" href="mailto:marcus@gpi.studio">
            marcus@gpi.studio
          </a>
          <span>gpi.studio</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
