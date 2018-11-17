import React from 'react'
import { render } from 'react-dom'
import Home from 'views/home'
import 'style/app.less'

const moduleData = window.Capricorn.modules['{{ moduleName }}'][0]
const moduleName = moduleData.name
window.Capricorn.modules['{{ moduleName }}'].shift()
const id = moduleName
const wrapContainer = document.createElement('div')
wrapContainer.id = id
wrapContainer.className = wrapContainer['data-role'] = moduleName
document.body.append(wrapContainer)

render(<Home />, document.getElementById(id))
