import React, { Component } from 'react'
import classnames from 'classnames'
import { hot } from 'react-hot-loader'
import store from 'store'
import './index.less'

class Home extends Component {
	constructor () {
		super()
		const { isOpen, description } = store.getData()
		this.isOpen = isOpen.value
		this.description = description.value
	}
	
	open () {
		this.isOpen = !this.isOpen
		this.setState({})
	}
	
	render () {
		return (
			<div onClick={this.open.bind(this)} className={classnames('page-home flex-center', { 'test': true })}>
				<div>{this.description}</div>
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
