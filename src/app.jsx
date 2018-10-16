import Home from 'views/home'

import 'style/app.less'

const moduleName = '{{ moduleName }}'
const id = moduleName + '-' + Date.now()
const wrapContainer = document.createElement('div')
wrapContainer.id = id
wrapContainer.className = wrapContainer.role = moduleName
document.body.append(wrapContainer)

ReactDOM.render(<Home />, document.getElementById(id))
