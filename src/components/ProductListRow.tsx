import React from 'react'

type Props = {
  productInstructions: string[]
  productVideo: {
    __html: any
  }
}

const ProductListRow: React.FC<Props> = ({
  productInstructions,
  productVideo,
}) => {
  return (
    <>
      <div className="lg:col-start-3 lg:row-end-1 cursor-pointer">
        <div className="rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
          <div className="flex flex-wrap pb-6">
            <div className="flex-auto pl-6 pt-6">
              <span className="mt-1 text-base font-semibold leading-6 text-gray-900">
                Product 1
              </span>
            </div>
            <div className="mt-6 flex w-full flex-wrap border-t border-gray-900/5 px-6 py-6">
              <div className="w-full flex md:flex-nowrap flex-wrap md:gap-0 gap-6">
                <div className="md:w-1/4 w-full">
                  <span className="text-gray-900 font-semibold tracking-[1px] block">
                    Instructions
                  </span>
                  <ul className="list-disc marker:text-primary md:space-y-3 pl-4 mt-3 md:block flex break-words flex-wrap md:gap-0 gap-x-6 gap-y-3">
                    {productInstructions.map(
                      (instruction: string, index: number) => (
                        <React.Fragment key={`${instruction}${index}`}>
                          <li className="text-gray-600">{instruction}</li>
                        </React.Fragment>
                      ),
                    )}
                  </ul>
                </div>
                <div className="flex-1 md:order-last order-first">
                  <div className="mb-4">
                    <span className="text-gray-900 font-semibold tracking-[1px] block">
                      Product Video
                    </span>
                  </div>
                  <div
                    className="w-full"
                    dangerouslySetInnerHTML={productVideo}
                  ></div>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center sm:justify-end justify-center border-t border-gray-900/5 px-6 pt-6 mt-3">
              <button
                type="button"
                className="w-[200px] h-12 flex items-center justify-center text-lg font-semibold text-white rounded-2xl shadow-lg bg-primary"
              >
                Request Training
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductListRow
