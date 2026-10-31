import React from "react";
import ProfileCardBackdrop from "./ProfileCardBackdrop";
import ProfileCardGhostOverlay from "./ProfileCardGhost";

function SocialIcon({ type }) {
  if (type === "github") {
    return (
      <svg className="size-full" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    );
  }
  if (type === "linkedin") {
    return (
      <svg className="size-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    );
  }
  if (type === "x") {
    return (
      <svg className="size-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  if (type === "instagram") {
    return (
      <svg className="size-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    );
  }
  return (
    <svg className="size-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function parseSocialLink(url) {
  if (!url) return null;
  const lower = url.toLowerCase();
  if (lower.includes("github.com")) return { type: "github", url, label: "GitHub" };
  if (lower.includes("linkedin.com")) return { type: "linkedin", url, label: "LinkedIn" };
  if (lower.includes("x.com") || lower.includes("twitter.com")) return { type: "x", url, label: "X" };
  if (lower.includes("instagram.com")) return { type: "instagram", url, label: "Instagram" };
  return { type: "generic", url, label: "Link" };
}

/**
 * TeamMemberCard
 * Renders an NCS team member profile card.
 */
export default function TeamMemberCard({
  image,
  color,
  word,
  name,
  nameParts,
  designation,
  bio,
  linkedinUrl,
  githubUrl,
  xUrl,
  instagramUrl,
  socialLinks = [],
  photoClasses = "",
  imgClasses = "absolute inset-0 max-w-none object-bottom pointer-events-none size-full",
  className = "",
  dataNodeId,
  expandDirection,
}) {
  const allUrls = [
    ...(Array.isArray(socialLinks) ? socialLinks : []),
    linkedinUrl,
    githubUrl,
    xUrl,
    instagramUrl,
  ].filter(Boolean);

  const uniqueUrls = Array.from(new Set(allUrls));
  let parsedSocials = uniqueUrls.map(parseSocialLink).filter(Boolean);

  if (parsedSocials.length === 0) {
    parsedSocials = [
      { type: "github", url: "https://github.com", label: "GitHub" },
      { type: "linkedin", url: "https://linkedin.com", label: "LinkedIn" },
    ];
  }

  const finalBio = bio || "Lorem ipsum dolor sit amet, consectetur elit diam.";

  const displayNameArray = nameParts && nameParts.length > 0
    ? nameParts
    : (Array.isArray(name) ? name : (name ? name.split(" ") : []));
  const fullName = Array.isArray(name) ? name.join(" ") : (name || displayNameArray.join(" "));

  // Clean photo classes: remove any scale transforms so the photo never changes size
  const cleanPhotoClasses = photoClasses
    .replace(/\bgroup-hover:scale-\[[^\]]+\]/g, "")
    .replace(/\btransition-transform\b/g, "")
    .replace(/\bduration-500\b/g, "")
    .replace(/\bease-out\b/g, "")
    .trim();

  const cardRef = React.useRef(null);

  // Determine default expansion direction:
  // Cards on the left columns (ml-0 or ml < 360px, such as ~217px) must expand to the right so they don't clip off the left screen edge.
  // Cards on the right columns (ml >= 700px, such as ~868px, ~1085px) must expand to the left.
  const staticDir = React.useMemo(() => {
    if (expandDirection) return expandDirection;
    if (/\bml-0\b|\bml-\[0(?:px)?\]/.test(className)) return "right";
    const mlMatch = className.match(/\bml-\[([\d.]+)px\]/);
    if (mlMatch) {
      const ml = parseFloat(mlMatch[1]);
      if (ml < 360) return "right";
      return "left";
    }
    return "left";
  }, [className, expandDirection]);

  const [expandDir, setExpandDir] = React.useState(staticDir);

  React.useEffect(() => {
    setExpandDir(staticDir);
  }, [staticDir]);

  // Viewport-aware collision detection on hover:
  // Dynamically flips direction if expanding in the current direction would overflow the window viewport.
  const handleMouseEnter = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const spaceOnLeft = rect.left;
      const spaceOnRight = window.innerWidth - rect.right;

      // 360px needed for the expansion wing
      if (spaceOnLeft < 360 && spaceOnRight >= 360) {
        setExpandDir("right");
      } else if (spaceOnRight < 360 && spaceOnLeft >= 360) {
        setExpandDir("left");
      } else if (spaceOnLeft < 360 && spaceOnRight < 360) {
        setExpandDir(spaceOnRight > spaceOnLeft ? "right" : "left");
      }
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      className={`col-1 h-[600px] relative row-1 w-[200px] group cursor-pointer ${className}`}
      data-node-id={dataNodeId}
    >
      <div className="relative h-full w-full">
        {/* ========================================================
            1. BASE PILL (200px x 600px, rounded-[300px])
            The profile photo inside stays pinned at exact size, shape & position.
        ======================================================== */}
        <div className="absolute inset-0 bg-black border border-white/10 overflow-clip rounded-[300px]">
          <ProfileCardBackdrop color={color} word={word} />
          <ProfileCardGhostOverlay src={image} />

          {/* Profile cutout photo - no scale on hover, completely static */}
          <div className={cleanPhotoClasses || "-translate-x-1/2 absolute h-[494px] left-1/2 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[106px] w-[332px] profile-img-bottom-shadow"}>
            <img alt={fullName} className={imgClasses} src={image} />
          </div>

          {/* Bottom gradient vignette */}
          <div
            className="-translate-x-1/2 absolute h-[248px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[352px] w-[200px] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.875) 22.125%, rgba(0, 0, 0, 0.95) 65.133%, rgb(0, 0, 0) 100%)",
            }}
          />

          {/* Member Name & Designation (Desktop: fades out on card hover; Mobile: always visible) */}
          <div className="absolute inset-0 transition-opacity duration-300 ease-out md:group-hover:opacity-0 -translate-y-8 md:translate-y-0 pointer-events-none">
            <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-1/2 not-italic text-center top-[427px] whitespace-nowrap">
              <div className="flex flex-col font-['Satoshi',Arial,sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[28px] text-white">
                {displayNameArray.map((part, idx) => (
                  <p key={idx} className={idx < displayNameArray.length - 1 ? "leading-[1.25] mb-0" : "leading-[1.25]"}>
                    {part}
                  </p>
                ))}
              </div>
              <p className="font-['Satoshi',Arial,sans-serif] leading-[normal] relative shrink-0 text-[#ffd9e5] text-[16px]">
                {designation}
              </p>
            </div>
          </div>

          {/* Mobile Only (md:hidden): Direct Social Links */}
          <div className="md:hidden absolute bottom-3.5 inset-x-0 flex items-center justify-center gap-2 z-30 pointer-events-auto flex-wrap px-2">
            {parsedSocials.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="size-10 p-2 rounded-full bg-white/15 hover:bg-white/30 active:scale-90 transition-all flex items-center justify-center border border-white/25 text-white cursor-pointer pointer-events-auto shadow-md"
              >
                <SocialIcon type={item.type} />
              </a>
            ))}
          </div>
        </div>

        {/* ========================================================
            2. DESKTOP HOVER EXPANSION CARD (OUTSIDE overflow-clip!)
            Matches the reference card layout:
            - Dark rounded container (rounded-[28px], bg-[#121214])
            - Top: Big bold designation/role
            - Middle: Description quote with quotation mark
            - Bottom: Name badge, title/society, social links
            - Pinned photo stays at exact size, shape, and position.
        ======================================================== */}
        <div
          className={`hidden md:flex absolute top-0 ${
            expandDir === "left"
              ? "right-0 flex-row rounded-l-[32px] rounded-r-[100px]"
              : "left-0 flex-row-reverse rounded-l-[100px] rounded-r-[32px]"
          } w-[560px] h-[600px] bg-[#121214]/95 backdrop-blur-2xl border border-white/15 shadow-[0_28px_70px_rgba(0,0,0,0.95)] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50`}
        >
          {/* Content Column (360px wide) */}
          <div className="w-[360px] h-full flex flex-col justify-between py-8 px-8 shrink-0 text-left">
            {/* Top: Name on top, with Club / Designation below that */}
            <div>
              <p className="font-['Satoshi',Arial,sans-serif] font-bold text-[30px] sm:text-[34px] leading-[1.15] text-white tracking-tight">
                {fullName}
              </p>
              <p className="font-['Satoshi',Arial,sans-serif] font-medium text-[16px] sm:text-[18px] text-[#ffd9e5] tracking-wide mt-2">
                {designation}
              </p>
            </div>

            {/* Middle: Description Quote */}
            <div className="my-auto py-4">
              <div className="flex items-start gap-2.5">
                <span className="text-white/40 font-serif text-[32px] leading-none select-none">“</span>
                <p className="font-['Playfair_Display',Georgia,serif] italic font-medium text-[14.5px] sm:text-[15.5px] leading-[1.55] text-white/85">
                  {finalBio}
                </p>
              </div>
            </div>

            {/* Bottom: Socials with Large Size Icons */}
            <div className="pt-2">
              <div className="flex items-center gap-3.5 flex-wrap">
                {parsedSocials.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="size-12 p-2.5 rounded-full bg-white/10 hover:bg-white/25 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border border-white/20 text-white shadow-lg cursor-pointer"
                  >
                    <SocialIcon type={item.type} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Photo Slot in Expanded Card (Exactly 200px x 600px, rounded-[300px])
              Aligned pixel-for-pixel over the base pill so the photo does not move, resize, or change shape */}
          <div className="w-[200px] h-[600px] rounded-[300px] overflow-clip relative bg-black shrink-0 border border-white/10">
            <ProfileCardBackdrop color={color} word={word} />
            <div className={cleanPhotoClasses || "-translate-x-1/2 absolute h-[494px] left-1/2 shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] top-[106px] w-[332px] profile-img-bottom-shadow"}>
              <img alt={fullName} className={imgClasses} src={image} />
            </div>

            {/* Bottom gradient vignette (increased opacity & richer contrast when hovered) */}
            <div
              className="-translate-x-1/2 absolute h-[290px] left-1/2 rounded-bl-[200px] rounded-br-[200px] top-[310px] w-[200px] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 20%, rgba(0, 0, 0, 0.96) 45%, rgb(0, 0, 0) 70%, rgb(0, 0, 0) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
