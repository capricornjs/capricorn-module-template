import React from 'react'
import { render } from 'react-dom'
import Home from 'views/home'
import 'style/app.less'

const moduleName = 'capricorn-{{ moduleName }}'
const id = moduleName
const wrapContainer = document.createElement('div')
wrapContainer.id = id
wrapContainer.className = wrapContainer['data-role'] = moduleName
document.body.append(wrapContainer)

render(<Home />, document.getElementById(id))
