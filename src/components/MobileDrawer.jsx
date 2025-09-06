import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";

export default function MobileDrawer({ links }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button 
          aria-label="Open menu" 
          className="p-2 bg-gradient-to-r from-sky-500/10 to-sky-600/10 hover:from-sky-500 hover:to-sky-600 text-sky-600 hover:text-white dark:text-sky-400 dark:hover:text-white rounded-lg shadow-sm hover:shadow-lg hover:shadow-sky-500/20 hover:scale-105 transition-all duration-300 md:hidden"
        >
          <Menu size={18} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed right-0 top-0 h-full w-72 bg-gradient-to-br from-sky-50 to-white dark:from-navy-900 dark:to-navy-800 p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-sky-600 dark:text-sky-400">Menu</span>
            <Dialog.Close asChild>
              <button 
                className="p-2 bg-gradient-to-r from-sky-500/10 to-sky-600/10 hover:from-sky-500 hover:to-sky-600 text-sky-600 hover:text-white dark:text-sky-400 dark:hover:text-white rounded-lg transition-all duration-300"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </Dialog.Close>
          </div>
          <nav className="mt-8 flex flex-col gap-4">
            {links.map((l) => (
              <a 
                key={l.href} 
                href={l.href} 
                className="px-6 py-3 bg-gradient-to-r from-sky-500/10 to-sky-600/10 hover:from-sky-500 hover:to-sky-600 text-sky-600 hover:text-white dark:text-sky-400 dark:hover:text-white rounded-lg font-medium shadow-sm hover:shadow-lg hover:shadow-sky-500/20 hover:scale-105 transition-all duration-300 text-center"
              >
                {l.label}
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              className="px-6 py-3 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white rounded-lg font-medium shadow-lg shadow-sky-500/20 hover:scale-105 transition-all duration-300 text-center mt-2"
              target="_blank" 
              rel="noreferrer"
            >
              Resume
            </a>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
