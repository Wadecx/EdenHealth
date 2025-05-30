'use client';

import { Button } from '@/components';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Link = {
  text: string;
  href: string;
};

const LINKS: Link[] = [
  {
    text: 'Menu',
    href: '/menu',
  },
  {
    text: 'Le Concept',
    href: '/le-concept',
  },
];

const headerVariants = {
  initial: {
    opacity: 0,
    y: -100,
    transition: { type: 'spring', stiffness: 500, damping: 70 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 500, damping: 70 },
  },
};

const headerItemVariants = {
  initial: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

const Header = () => {
  return (
    <>
      <motion.header
        variants={headerVariants}
        animate="visible"
        initial="initial"
        viewport={{ once: true }}
        className="shadow-lg bg-white fixed top-0 w-full z-[999] hidden md:block"
      >
        <nav className="max-w-9/10 mx-auto py-8 flex items-center justify-between">
          <motion.div
            variants={headerItemVariants}
            animate="visible"
            initial="initial"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 0.95 }}
          >
            <Link href="/">
              <Image
                src={'/assets/images/logo.png'}
                width={200}
                height={100}
                quality={100}
                priority
                alt="Eden health Logo"
              />
            </Link>
          </motion.div>

          <div className="items-center gap-8 hidden md:flex">
            <ul className="flex items-center gap-8">
              {LINKS.map((link, i) => (
                <motion.li
                  key={i}
                  variants={headerItemVariants}
                  animate="visible"
                  initial="initial"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                >
                  <Link
                    className="uppercase text-xl hover:text-pink  transition ease-in-out duration-300"
                    href={link.href}
                  >
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              variants={headerItemVariants}
              animate="visible"
              initial="initial"
              transition={{ delay: 0.8 }}
            >
              <Button href="/reserver">RÉSERVER UNE TABLE</Button>
            </motion.div>
          </div>
        </nav>
      </motion.header>

      <ResponsiveHeader />
    </>
  );
};

const ResponsiveHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
    }
  }, [isOpen]);
  return (
    <motion.header
      variants={headerVariants}
      animate="visible"
      initial="initial"
      viewport={{ once: true }}
      className="shadow-lg bg-white fixed top-0 w-full z-50 block md:hidden"
    >
      <nav className="max-w-9/10 mx-auto py-4 flex items-center justify-between">
        <motion.div
          variants={headerItemVariants}
          animate="visible"
          initial="initial"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 0.95 }}
          className="relative z-[999]"
        >
          <Link href="/">
            <Image
              src={'/assets/images/logo.png'}
              width={150}
              height={100}
              quality={100}
              priority
              alt="Eden Logo"
            />
          </Link>
        </motion.div>

        <motion.div
          variants={headerItemVariants}
          animate="visible"
          initial="initial"
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative z-[999]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </motion.div>

        <AnimatePresence mode="wait">
          {isOpen && (
            <>
              <motion.div
                key="menu"
                variants={{
                  initial: { opacity: 0, y: '-100%' },
                  visible: { opacity: 1, y: 0 },
                  exit: { opacity: 0, x: '100%' },
                }}
                initial="initial"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="fixed top-0 right-0 w-full h-[40vh] z-50 bg-white border-b border-green/70 shadow-sm"
              >
                <ul className="flex flex-col items-center h-full justify-center gap-4 p-4">
                  {LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      variants={headerItemVariants}
                      initial="initial"
                      animate="visible"
                      transition={{ delay: i * 0.1 + 0.5 }}
                    >
                      <Link
                        className="uppercase text-xl hover:text-pink transition ease-in-out duration-300"
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.text}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li
                    variants={headerItemVariants}
                    initial="initial"
                    animate="visible"
                    transition={{ delay: 0.8 }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Button href="/reserver">RÉSERVER UNE TABLE</Button>
                  </motion.li>
                </ul>
              </motion.div>

              <motion.div
                variants={{
                  initial: { opacity: 0 },
                  visible: { opacity: 1 },
                  exit: { opacity: 0 },
                }}
                initial="initial"
                animate="visible"
                exit="exit"
                className="inset-0 fixed w-full h-screen bg-black/70"
              ></motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export { Header, ResponsiveHeader };
