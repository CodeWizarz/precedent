import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";

export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  const { data: session, status } = useSession();
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <Meta {...meta} />
      <SignInModal />
      
      <div className="fixed h-screen w-full bg-gray-800" />
      <motion.div
      initial={{
        y: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.2
      }}
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-binoculars" viewBox="0 0 16 16">
  <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z"/>
</svg>
            <p className="flex border-transparent text-gray-500">Nexus</p>
          </Link>   
                 {/* small screen links */}
  <div className="sm:hidden flex">
  <div className="ml-8 flex-col fixed left-0.5 top-14 h-screen w-1/2">
    <a href="/Home" className="block mt-4 text-gray-500 hover:text-gray-700">Home</a>
    <a href="/For you" className="block mt-4 text-gray-500 hover:text-gray-700">For you</a>
    <a href="/News Showcase" className="block mt-4 text-gray-500 hover:text-gray-700">News Showcase</a>
    <a href="/India" className="block mt-4 text-gray-500 hover:text-gray-700">India</a>
    <a href="/World" className="block mt-4 text-gray-500 hover:text-gray-700">World</a>
    <a href="/Local" className="block mt-4 text-gray-500 hover:text-gray-700">Local</a>
    <a href="/Business" className="block mt-4 text-gray-500 hover:text-gray-700">Business</a>
    <a href="/Tech" className="block mt-4 text-gray-500 hover:text-gray-700">Tech</a>
    <a href="/Entertainment" className="block mt-4 text-gray-500 hover:text-gray-700">Entertainment</a>
    <a href="/Sports" className="block mt-4 text-gray-500 hover:text-gray-700">Sports</a>
  </div>
  </div>
{/* Big screen links */}
  <div className="hidden sm:block">
  <div>
              <Link href="/Home" className="border-transparent mt-20 text-gray-500 hover:text-gray-700 hover:border-gray-300 ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Home</Link>
              <Link href="/For you" className="border-transparent mt-20 text-gray-500 hover:text-gray-700 hover:border-gray-300 ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">For you</Link>
              <Link href="/News Showcase" className="border-transparent mt-20 text-gray-500 hover:text-gray-700 hover:border-gray-300 ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">News Showcase</Link>
              <Link href="/India" className="border-transparent mt-20 text-gray-500 hover:text-gray-700 hover:border-gray-300 ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">India</Link>
              <Link href="/World" className="border-transparent mt-20 text-gray-500 hover:text-gray-700 hover:border-gray-300 ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">World</Link>
              <Link href="/Local" className="border-transparent mt-20 text-gray-500 hover:text-gray-700 hover:border-gray-300 ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Local</Link>
              <Link href="/Business" className="border-transparent mt-20 text-gray-500 hover:text-gray-700 hover:border-gray-300 ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Business</Link>
              <Link href="/Tech" className="border-transparent mt-20 text-gray-500 hover:text-gray-700 hover:border-gray-300 ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Tech</Link>
              <Link href="/Entertainment" className="border-transparent mt-20 text-gray-500 hover:text-gray-700 hover:border-gray-300 ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Entertainment</Link>
              <Link href="/Sports" className="border-transparent mt-20 text-gray-500 hover:text-gray-700 hover:border-gray-300 ml-8 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Sports</Link>

          </div> 
  </div>

          <div>
            <AnimatePresence>
              {!session && status !== "loading" ? (
                <motion.button
                  className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-gray-500 transition-all hover:bg-white hover:text-black"
                  onClick={() => setShowSignInModal(true)}
                  {...FADE_IN_ANIMATION_SETTINGS}
                >
                  Sign In
                </motion.button>
              ) : (
                <UserDropdown />
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </>
  );
}
