import React from "react"

const TwitterEmbed = () => {
  const embedUrl = "https://platform.twitter.com/widgets.js"

  React.useEffect(() => {
    const script = document.createElement("script")
    script.setAttribute("src", embedUrl)
    script.setAttribute("charSet", `utf-8`)
    script.setAttribute("async", "")
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <a
        href="https://twitter.com/intent/tweet?screen_name=Jacob_Schurr&ref_src=twsrc%5Etfw"
        className="twitter-mention-button"
        data-show-count="false"
      >
        Tweet to @Jacob_Schurr
      </a>
      <a
        className="twitter-timeline"
        href="https://twitter.com/Jacob_Schurr?ref_src=twsrc%5Etfw"
      >
        Tweets by Jacob_Schurr
      </a>
    </>
  )
}

export default TwitterEmbed
