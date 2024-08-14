import React from "react";
import ReactDOM from "react-dom/client";
import Mfe from "./Mfe";
import './App.css'


export default function renderContent(element: HTMLElement, title: string) {
  ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <h2>{ title }</h2>
      <Mfe />
    </React.StrictMode>
  )
}