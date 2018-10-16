import Home from 'views/home'

import 'style/app.less'

const id = 'wrapabc'
const wrapContainer = document.createElement('div')
wrapContainer.id = id
document.body.append(wrapContainer)

ReactDOM.render(<Home />, document.getElementById(id))
