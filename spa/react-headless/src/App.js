import React, { useEffect, useState } from "react"
import "./App.css"
import { events } from "./helpers/AppHelpers"
import PageLoader from "./helpers/PageLoader"

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    function handlePopstate() {
      setPathname(window.location.pathname)
    }

    events.on("popstate", handlePopstate)
    window.addEventListener("popstate", handlePopstate)

    return () => {
      events.removeListener("popstate", handlePopstate)
      window.removeEventListener("popstate", handlePopstate)
    }
  }, [])

  return (
    <>
      <div className="container">
        <PageLoader pathname={pathname} />
      </div>

      <footer>
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        <br />
        Copyright © 2022
      </footer>
    </>
  )
}

export default App
