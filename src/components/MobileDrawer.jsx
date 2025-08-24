import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";

export default function MobileDrawer({ links }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button aria-label="Open menu" className="btn-outline rounded-full md:hidden">
          <Menu size={18} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed right-0 top-0 h-full w-72 bg-[rgb(var(--bg))] p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Menu</span>
            <Dialog.Close asChild>
              <button className="btn-outline rounded-full" aria-label="Close menu">
                <X size={18} />
              </button>
            </Dialog.Close>
          </div>
          <nav className="mt-8 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-base opacity-90 hover:opacity-100">
                {l.label}
              </a>
            ))}
            <a href="/resume.pdf" className="btn-primary bg-gradient-blue rounded-full mt-2" target="_blank" rel="noreferrer">
  Resume
</a>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
