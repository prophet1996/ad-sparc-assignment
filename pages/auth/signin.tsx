import { getProviders } from "next-auth/react";
import LoginForm from "../../components/LoginForm";
import { AuthProviderMap } from "../../lib/types";

export default function Login({ providers }: { providers: AuthProviderMap }) {
  return (
    <section className="flex h-screen w-screen overflow-hidden">
      <LoginForm wrapperClassName="grow-[7] flex flex-col justify-start items-center xs:p-4 max-xs:pt-5" authProviders={providers} />
      <div className="grow-[5] hidden lg:flex items-center bg-indigo-500 h-screen flex-col justify-between px-4 gap-20">
        <div className="flex gap-6 mt-10">
          <div className="relative shadow bg-white rounded-lg " style={{ width: 313, height: 437 }}>
            <p
              className="w-72 h-4 absolute text-xs font-bold leading-none text-gray-800"
              style={{ left: 14.31, top: 14.31 }}
            >
              Overall rating
            </p>
            <div
              className="inline-flex space-x-2.5 items-center justify-start absolute"
              style={{ left: 14.31, top: 32.19 }}
            >
              <p className="w-6 h-full text-lg font-semibold leading-relaxed text-indigo-500">
                4.2
              </p>
              <div className="flex space-x-2 items-start justify-start">
                <div className="flex space-x-0.5 items-start justify-start">
                  <img className="w-3 h-full rounded-full" src="roll-set.png" />
                  <img className="w-3 h-full rounded-full" src="roll-set.png" />
                  <img className="w-3 h-full rounded-full" src="roll-set.png" />
                  <img className="w-3 h-full rounded-full" src="roll-set.png" />
                  <img className="w-3 h-full rounded-full" src="roll-set.png" />
                </div>
                <p className="text-xs font-bold leading-none text-gray-500">
                  3 votes
                </p>
              </div>
            </div>
            <div
              className="inline-flex items-center justify-start px-4 py-3 absolute border rounded-lg border-indigo-500"
              style={{ left: 191.38, top: 16.1 }}
            >
              <p className="text-sm font-bold leading-tight text-center text-indigo-500">
                Leave review
              </p>
            </div>
            <div
              className="inline-flex flex-col space-y-3.5 items-start justify-start w-72 absolute"
              style={{ left: 14.31, top: 135.93 }}
            >
              <div className="inline-flex space-x-3 items-start justify-start w-full">
                <div className="w-8 h-1/4">
                  <img
                    className="flex-1 h-full rounded-full"
                    src="roll-set.png"
                  />
                </div>
                <div className="inline-flex flex-col space-y-1 items-start justify-start flex-1">
                  <div className="flex flex-col space-y-2.5 items-start justify-start w-full">
                    <div className="flex flex-col space-y-0.5 items-start justify-start w-full">
                      <p className="w-full text-sm font-bold leading-tight text-gray-800">
                        Savannah Miles
                      </p>
                      <div className="inline-flex space-x-2 items-start justify-start">
                        <div className="flex space-x-0.5 items-start justify-start">
                          <img
                            className="w-3 h-full rounded-full"
                            src="roll-set.png"
                          />
                          <img
                            className="w-3 h-full rounded-full"
                            src="roll-set.png"
                          />
                          <img
                            className="w-3 h-full rounded-full"
                            src="roll-set.png"
                          />
                          <img
                            className="w-3 h-full rounded-full"
                            src="roll-set.png"
                          />
                          <img
                            className="w-3 h-full rounded-full"
                            src="roll-set.png"
                          />
                        </div>
                        <p className="text-xs font-bold leading-none text-gray-500">
                          10 days ago
                        </p>
                      </div>
                    </div>
                    <p className="w-full text-sm leading-tight text-gray-800">
                      Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad,
                      ei doming aperiam delicata est.
                    </p>
                  </div>
                  <div className="inline-flex space-x-4 items-center justify-start py-1.5">
                    <div className="flex space-x-2 items-center justify-start">
                      <div className="relative w-3.5 h-3.5" />
                      <p className="text-xs font-semibold leading-none text-gray-600">
                        14
                      </p>
                    </div>
                    <div className="flex space-x-2 items-center justify-start">
                      <img
                        className="w-1/2 h-3.5 rounded-full"
                        src="roll-set.png"
                      />
                      <p className="text-xs font-semibold leading-none text-gray-500">
                        4
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex space-x-3 items-start justify-start w-full">
                <div className="w-8 h-1/4">
                  <img
                    className="flex-1 h-full rounded-full"
                    src="roll-set.png"
                  />
                </div>
                <div className="inline-flex flex-col space-y-1 items-start justify-start flex-1">
                  <div className="flex flex-col space-y-2.5 items-start justify-start w-full">
                    <div className="flex flex-col space-y-0.5 items-start justify-start w-full">
                      <p className="w-full text-sm font-bold leading-tight text-gray-800">
                        Jacob Jones
                      </p>
                      <div className="inline-flex space-x-2 items-start justify-start">
                        <div className="flex space-x-0.5 items-start justify-start">
                          <img
                            className="w-3 h-full rounded-full"
                            src="roll-set.png"
                          />
                          <img
                            className="w-3 h-full rounded-full"
                            src="roll-set.png"
                          />
                          <img
                            className="w-3 h-full rounded-full"
                            src="roll-set.png"
                          />
                          <img
                            className="w-3 h-full rounded-full"
                            src="roll-set.png"
                          />
                          <img
                            className="w-3 h-full rounded-full"
                            src="roll-set.png"
                          />
                        </div>
                        <p className="text-xs font-bold leading-none text-gray-500">
                          1 days ago
                        </p>
                      </div>
                    </div>
                    <p className="w-full text-sm leading-tight text-gray-800">
                      Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad,
                      ei doming aperiam delicata est.
                    </p>
                  </div>
                  <div className="inline-flex space-x-4 items-center justify-start py-1.5">
                    <div className="flex space-x-2 items-center justify-start">
                      <img
                        className="w-1/2 h-3.5 rounded-full"
                        src="roll-set.png"
                      />
                      <p className="text-xs font-semibold leading-none text-gray-500">
                        8
                      </p>
                    </div>
                    <div className="flex space-x-2 items-center justify-start">
                      <img
                        className="w-1/2 h-3.5 rounded-full"
                        src="roll-set.png"
                      />
                      <p className="text-xs font-semibold leading-none text-gray-500">
                        3
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="inline-flex space-x-2 items-center justify-start py-2 pl-3 pr-2 absolute bg-white border rounded-lg border-gray-300"
              style={{ left: 82.33, top: 82.27 }}
            >
              <p className="text-xs font-semibold leading-none">
                Sort by: Newest first
              </p>
              <img className="w-3.5 h-3.5 rounded-full" src="roll-set.png" />
            </div>
          </div>
          <div
            className="relative shadow mt-5"
            style={{ width: 294, height: 278.88 }}
          >
            <div className="w-72 h-72 absolute left-0 top-0">
              <div className="flex-1 h-full bg-white border rounded-xl border-gray-100" />
            </div>
            <p
              className="w-64 absolute text-lg font-bold leading-normal text-gray-800"
              style={{ left: 13.44, top: 174.72 }}
            >
              Roll set
            </p>
            <p
              className="w-64 absolute text-xs leading-none text-gray-500"
              style={{ left: 13.44, top: 198.24 }}
            >
              Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et
              cum ignota euismod corpora, et saepe.
            </p>
            <p
              className="w-56 absolute text-2xl font-extrabold leading-loose text-gray-800"
              style={{ left: 13.44, top: 238.68 }}
            >
              $ 22.56
            </p>
            <div
              className="w-7 h-7 absolute"
              style={{ left: 253.68, top: 238.68 }}
            >
              <div className="flex items-center justify-center flex-1 h-full p-1 bg-purple-50 rounded-xl">
                <img className="flex-1 h-full rounded-lg" src="/roll-set.png" />
              </div>
            </div>
            <div
              className="w-64 h-36 absolute"
              style={{ left: 13.44, top: 13.44 }}
            >
              <div className="flex-1 h-full bg-gray-300 rounded-lg">
                <img className="flex-1 h-full" src="/roll-set.png" />
              </div>
            </div>
          </div>
        </div>

        <div className="inline-flex space-x-2 items-center justify-end w-14 h-2 mb-20">
          <div className="opacity-30 w-2 h-full bg-white rounded-full" />
          <div className="w-2 h-full bg-white rounded-full" />
          <div className="opacity-30 w-2 h-full bg-white rounded-full" />
          <div className="opacity-30 w-2 h-full bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
