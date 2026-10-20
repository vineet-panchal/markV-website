// Shared by the client hook and the server layout, so it lives outside the "use client" module
export const VIEW_MODE_KEY = "view-mode";

// Runs before the page paints (see app/layout.tsx) so returning visitors who chose the
// full site never see the quick-only sections flash in first.
export const VIEW_MODE_SCRIPT = `try{document.documentElement.dataset.view=localStorage.getItem("${VIEW_MODE_KEY}")==="full"?"full":"quick"}catch(e){}`;
