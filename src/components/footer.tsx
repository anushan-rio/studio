import Link from "next/link";
import { Timer } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Timer className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">TimeFlow</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Automate your business operations with ease.
            </p>
          </div>
          <div className="md:col-start-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-3 text-sm">
              <h4 className="font-semibold">Product</h4>
              <Link href="/#pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link>
              <Link href="/#features" className="text-muted-foreground hover:text-foreground">Features</Link>
            </div>
            <div className="flex flex-col space-y-3 text-sm">
              <h4 className="font-semibold">Company</h4>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
            </div>
            <div className="flex flex-col space-y-3 text-sm">
              <h4 className="font-semibold">Legal</h4>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} TimeFlow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
