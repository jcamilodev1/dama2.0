import * as React from "react"
import * as ReactDom from "react-dom"
import App  from "../components/App"
// import "./App.css"

  
export const page = async () => {
	ReactDom.render(<App /> , document.getElementById('app'))
}