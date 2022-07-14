// Header.tsx
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const Header: React.FC<{ className: string }> = ({ className }) => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  let left = (
    <div className="left">
      <Link href="/">
        <a className="bold" data-active={isActive("/")}>
          Feed
        </a>
      </Link>
      <style jsx>{`
        .bold {
          font-weight: bold;
        }

        a {
          text-decoration: none;
          color: var(--geist-foreground);
          display: inline-block;
        }

        .left a[data-active="true"] {
          color: gray;
        }

        a + a {
          margin-left: 1rem;
        }
      `}</style>
    </div>
  );

  let right = null;

  if (status === "loading") {
    left = (
      <div className="left">
        <Link href="/">
          <a className="bold" data-active={isActive("/")}>
            Feed
          </a>
        </Link>
        <style jsx>{`
          .bold {
            font-weight: bold;
          }

          a {
            text-decoration: none;
            color: var(--geist-foreground);
            display: inline-block;
          }

          .left a[data-active="true"] {
            color: gray;
          }

          a + a {
            margin-left: 1rem;
          }
        `}</style>
      </div>
    );
    right = (
      <div className="right">
        <p>Validating session ...</p>
        <style jsx>{`
          .right {
            margin-left: auto;
          }
        `}</style>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className="right">
        <Link href="/auth/signin">
          <a data-active={isActive("/signup")}>Log in</a>
        </Link>
        <style jsx>{`
          a {
            text-decoration: none;
            color: var(--geist-foreground);
            display: inline-block;
          }

          a + a {
            margin-left: 1rem;
          }

          .right {
            margin-left: auto;
          }

          .right a {
            border: 1px solid var(--geist-foreground);
            padding: 0.5rem 1rem;
            border-radius: 3px;
          }
        `}</style>
      </div>
    );
  }

  if (session) {
    left = (
      <div className="left">
        <Link href="/">
          <a className="bold" data-active={isActive("/")}>
            Feed
          </a>
        </Link>
        <Link href="/drafts">
          <a data-active={isActive("/drafts")}>My drafts</a>
        </Link>
        <style jsx>{`
          .bold {
            font-weight: bold;
          }

          a {
            text-decoration: none;
            color: var(--geist-foreground);
            display: inline-block;
          }

          .left a[data-active="true"] {
            color: gray;
          }

          a + a {
            margin-left: 1rem;
          }
        `}</style>
      </div>
    );
    right = (
      <div className="right">
        <p>
          {session.user.name} ({session.user.email})
        </p>
        <Link href="/create">
          <button>
            <a>New post</a>
          </button>
        </Link>
        <button onClick={() => signOut()}>
          <a>Log out</a>
        </button>
        <style jsx>{`
          a {
            text-decoration: none;
            color: var(--geist-foreground);
            display: inline-block;
          }

          p {
            display: inline-block;
            font-size: 13px;
            padding-right: 1rem;
          }

          a + a {
            margin-left: 1rem;
          }

          .right {
            margin-left: auto;
          }

          .right a {
            border: 1px solid var(--geist-foreground);
            padding: 0.5rem 1rem;
            border-radius: 3px;
          }

          button {
            border: none;
          }
        `}</style>
      </div>
    );
  }

  return (
    <nav className={className}>
      <div className=" px-2 sm:px-4 py-2.5 rounded h-20 flex flex-wrap items-center justify-between md:w-5/6 lg:w-4/5 w-4/5">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Food Deliver App"
          />

          <div className="w-56 h-10 max-sm:hidden">
            <div className="flex space-x-5 items-center justify-end flex-1 h-full px-3 py-2.5 bg-gray-100 rounded-xl">
              <p className="w-40 text-sm leading-tight text-gray-500">Search</p>
              <img
                className="w-4 h-4 rounded-full"
                src="https://via.placeholder.com/16x16"
              />
            </div>
          </div>
        </a>

        <div className="flex justify-center items-center gap-4">
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <div className="inline-flex space-x-5 items-start justify-start">
              <div className="flex space-x-7 items-start justify-start">
                <div className="flex items-start justify-start py-1.5">
                  <p className="text-sm font-bold leading-tight text-right text-gray-800">
                    Restaurants
                  </p>
                </div>
                <div className="flex items-start justify-start py-1.5">
                  <p className="text-sm font-bold leading-tight text-right text-gray-800">
                    Deals
                  </p>
                </div>
              </div>
              <div className="flex items-start justify-start py-1.5">
                <p className="text-sm font-bold leading-tight text-right text-gray-800">
                  My orders
                </p>
              </div>
            </div>
          </div>
          <div className="relative" style={{ width: 48, height: 48 }}>
            <div className="inline-flex items-center justify-center w-12 h-12 p-3.5 bg-purple-50 rounded-2xl">
              <img
                className="flex-1 h-full rounded-lg"
                src="https://via.placeholder.com/20x20"
              />
            </div>
            <div className="w-5 h-5 absolute right-0 top-0">
              <div className="flex items-center justify-center flex-1 h-full px-0.5 pt-1 pb-0.5 bg-indigo-500 rounded-lg">
                <p className="flex-1 text-xs font-bold leading-none text-center text-white">
                  4
                </p>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center justify-center w-12 h-12">
            <div className="flex items-center justify-center w-14 h-14 p-0.5 border-2 rounded-2xl border-gray-100">
              <div
                className="relative rounded-2xl"
                style={{ width: 48, height: 48 }}
              >
                <div className="w-12 h-12 bg-purple-50" />
                <img
                  className="w-12 h-12 absolute left-0 top-0"
                  src="/logo.svg"
                />
              </div>
            </div>
          </div>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
