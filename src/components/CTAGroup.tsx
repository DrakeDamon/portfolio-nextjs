import Button from "@/components/ui/button";

export default function CTAGroup({
  primaryHref = "/projects",
  secondaryHref = "/contact",
  tertiaryHref = "/resume.pdf",
  className = "",
}: {
  primaryHref?: string;
  secondaryHref?: string;
  tertiaryHref?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <Button href={primaryHref}>View Projects</Button>
      <Button href={tertiaryHref} className="bg-neutral-200 hover:bg-white text-neutral-900">
        📄 Download Resume
      </Button>
      <Button href={secondaryHref} className="bg-neutral-800 text-neutral-100 hover:bg-neutral-700">
        Get in Touch
      </Button>
    </div>
  );
}