import React, { Component } from 'react'
import classnames from 'classnames'
import { hot } from 'react-hot-loader'
import './index.less'

class Home extends Component {
	open () {
		this.isOpen = true
		this.setState({})
	}
	
	render () {
		return (
			<div onClick={this.open.bind(this)} className={classnames('page-home flex-center', { 'test': true })}>
				<div>Home</div>
				<If condition={this.isOpen}>
					<div>-demo</div>
				</If>
			</div>
		)
	}
}

/*eslint-disable*/
export default hot(module)(Home)
/*eslint-disable*/
