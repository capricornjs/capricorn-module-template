import React from 'react'
import { render } from 'react-dom'
import Home from 'views/home'
import 'style/app.less'
import store from 'store'
import configData from '../module.config.json'

const moduleData = window.Capricorn.modules['{{ moduleName }}'][0]
const moduleName = moduleData.name
store.setData(moduleData.config || configData)
window.Capricorn.modules['{{ moduleName }}'].shift()
const id = moduleName
const wrapContainer = document.createElement('div')
wrapContainer.id = id
wrapContainer.className = wrapContainer['role'] = moduleName
document.body.append(wrapContainer)

render(<Home />, document.getElementById(id))
