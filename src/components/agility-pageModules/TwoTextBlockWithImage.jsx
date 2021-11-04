import React from "react"
import { Link } from "gatsby"
import { AgilityImage } from "@agility/gatsby-image-agilitycms"

const TwoTextBlockWithImage = ({ module }) => {
  // get module fields
  const { customFields } = module

  // function to check whether or not the url is absolute
  const isUrlAbsolute = url => url.indexOf("://") > 0 || url.indexOf("//") === 0

  // function to generate proper link
  const generateLink = (url, target, text) => {
    // if relative link, use Gatsby Link
    if (isUrlAbsolute(url) === false) {
      return (
        <Link
          to={url}
          title={text}
          target={target}
          className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
        >
          {text}
        </Link>
      )
    } else {
      // else use anchor tag
      return (
        <a
          href={url}
          title={text}
          target={target}
          className="inline-block mt-8 md:mt-8 px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:border-primary-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
        >
          {text}
        </a>
      )
    }
  }

  return (
    <div className="relative px-8">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-md mx-auto md:py-24 items-center">
      <div
          className={`md:w-6/12 mt-16 md:mt-0 xs:pr-0 md:pr-4`}
        >
            {customFields.primaryButton ? (
            <Link to={customFields.primaryButton.href}>
              <AgilityImage
                image={customFields.image}
                layout="constrained"
                width="768"
                height="512"
                className="rounded-lg object-cover object-center cursor-pointer"
              />
            </Link>
          ) : (
            <AgilityImage
              image={customFields.image}
              layout="constrained"
              width="768"
              height="512"
              className="rounded-lg object-cover object-center cursor-pointer"
            />
          )}
          
          <div className="g:py-8 text-center md:text-left">
            <h2 className="font-display text-2xl font-black text-secondary-500 tracking-wide text-center mt-4 lg:leading-tight md:text-left">
              {customFields.title}
            </h2>
            <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200">
              {customFields.content}
            </p>
            {customFields.primaryButton &&
              generateLink(
                customFields.primaryButton.href,
                customFields.primaryButton.target,
                customFields.primaryButton.text
              )}
          </div>
        </div>
        <div
          className={`md:w-6/12 mt-16 md:mt-0 xs:pl-0 md:pl-4 self-start`}
        >
            {customFields.primaryButtonBlock2 ? (
            <Link to={customFields.primaryButtonBlock2.href}>
              <AgilityImage
                image={customFields.imageBlock2}
                layout="constrained"
                width="768"
                height="512"
                className="rounded-lg object-cover object-center cursor-pointer"
              />
            </Link>
          ) : (
            <AgilityImage
              image={customFields.imageBlock2}
              layout="constrained"
              width="768"
              height="512"
              className="rounded-lg object-cover object-center cursor-pointer"
            />
          )}

          <div className="g:py-8 text-center md:text-left">
            <h2 className="font-display text-2xl font-black text-secondary-500 tracking-wide text-center mt-4 lg:leading-tight md:text-left">
              {customFields.titleBlock2}
            </h2>
            <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-200">
              {customFields.contentBlock2}
            </p>
            {customFields.primaryButtonBlock2 &&
              generateLink(
                customFields.primaryButtonBlock2.href,
                customFields.primaryButtonBlock2.target,
                customFields.primaryButtonBlock2.text
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwoTextBlockWithImage