import React, { useState } from "react";
import { AuthProviderMap } from "../lib/types";
import Image from "next/image";
import { signIn } from "next-auth/react";

const GITHUB_PROVIDER_ID = "github";
function LoginForm({
  authProviders,
  wrapperClassName,
}: {
  authProviders:AuthProviderMap,
  wrapperClassName:string,
}) {
  const [disableInteractions, setdisableInteractions] = useState(false);
  const githubProvider = Object.values(authProviders).find(
    ({ id }) => id === GITHUB_PROVIDER_ID
  );
  return (
    <div className={wrapperClassName}>
      <div className="w-80 max-xs:w-full mb-1">
        <Image height="40" width="80" src="/logo.svg" />
      </div>
      <p className="w-80 max-xs:w-full text-6xl font-bold text-gray-800 font-nunito mb-4">
        Login
      </p>
      <p className="w-80 max-xs:w-full text-sm leading-tight text-gray-600 mb-8">
        Sign in with your data that you entered during your registration.
      </p>
      <div className="inline-flex flex-col space-y-1 items-center justify-center w-80 max-xs:w-full h-20 pb-5 mb-2">
        <p className="w-full text-xs font-semibold leading-none text-gray-600">
          Email
        </p>
        <div className="inline-flex items-center justify-center w-full h-20 p-3 border rounded-lg border-gray-300">
          <p className="flex-1 text-sm leading-tight text-gray-500">
            name@example.com
          </p>
        </div>
      </div>
      <div className="inline-flex flex-col space-y-1 items-center justify-center w-80 max-xs:w-full h-20 pb-5 mb-2">
        <p className="w-full text-xs font-semibold leading-none text-gray-600">
          Password
        </p>
        <div className="inline-flex space-x-2 items-center justify-end w-full h-11 p-3 border rounded-lg border-gray-300">
          <p className="w-72 text-sm leading-tight text-gray-500">
            min. 8 characters
          </p>
          <img
            className="w-5 h-full rounded-lg"
          />
        </div>
      </div>
      <div className="inline-flex space-x-3 w-80 h-5 mb-10 max-xs:w-full">
        <div className="flex items-center">
          <input
            checked
            readOnly
            id="checked-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-4"
          />
          <label htmlFor="checked-checkbox">
            {" "}
            <p className="w-80 h-full text-sm leading-tight text-gray-800">
              Keep me logged in
            </p>
          </label>
        </div>
      </div>
      <button
        disabled={disableInteractions}
        className="inline-flex items-center justify-start w-80 max-xs:w-full px-4 py-3 bg-indigo-500 rounded-lg mb-4 shadow-xl disabled:opacity-50"
      >
        <p className="flex-1 text-sm font-bold leading-tight text-center text-white ">
          Login
        </p>
      </button>
      <div className="text-lg font-bold leading-tight text-center mb-2">OR</div>
      <button
        disabled={disableInteractions}
        className="bg-white active:bg-gray-100 outline-none focus:outline-none hover:shadow-md font-bold text-sm items-center justify-start w-80 max-xs:w-full px-4 py-3 rounded-lg mb-4 shadow-xl text-center border border-indigo-500 text-indigo-500 disabled:opacity-50"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => {
          setdisableInteractions(true);
          signIn(githubProvider.id);
        }}
      >
        Sign in with {githubProvider.name}
      </button>
      <div className="inline-flex items-center justify-start w-80 px-4 py-3 mb-24">
        <p className="flex-1 text-sm font-bold leading-tight text-center text-indigo-500">
          Forgot password
        </p>
      </div>
      <p className="w-80 text-sm leading-tight text-center">
        Don’t have an account?{" "}
        <span className="text-indigo-500 font-bold">Sign up</span>
      </p>
    </div>
  );
}

export default LoginForm;
