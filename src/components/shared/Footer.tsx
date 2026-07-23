import { Container } from "./Container";
import { contact, identity } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-text-muted sm:flex-row">
        <p className="font-mono">
          © {new Date().getFullYear()} {identity.name}
        </p>
        <p className="font-mono">{contact.location}</p>
      </Container>
    </footer>
  );
}
