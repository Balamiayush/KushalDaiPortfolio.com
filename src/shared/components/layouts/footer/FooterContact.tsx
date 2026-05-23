import { socialMedias } from "@/shared/constants/data";

export default function FooterContact() {
  return (
    <div className="text-p3 md:text-p2 flex flex-col items-start justify-between text-neutral-400 max-md:gap-4 md:flex-row md:items-center">
      <p className="w-full max-w-[200px] max-md:hidden">
        <span className="text-neutral-200">Let's elevate </span>your brand's
        digital presence
      </p>
      <div className="flex flex-col items-center gap-1.5">
        <a href="#" target="_blank" rel="noopener noreferrer">
          digital@prixa.org
        </a>
        <a
          href="tel:+9779708050686"
          target="_blank"
          rel="noopener noreferrer"
          className="max-md:hidden"
        >
          +977-9708050686
        </a>
      </div>
      <a
        href="tel:+9779708050686"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden"
      >
        +977-9708050686
      </a>
      <ul className="flex items-center gap-3">
        {socialMedias.map((socialMedia) => (
          <a
            href={socialMedia.href}
            key={socialMedia.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>{socialMedia.title}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}
