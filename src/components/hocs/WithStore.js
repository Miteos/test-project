import { Provider } from 'mobx-react'
import React, { PureComponent } from 'react'

/**
 * @param { { string: Store } } stores
 * @param {Object}              options
 * @param {function}            options.onInit
 * @param {function}            options.onMount
 * @param {function}            options.onWillUnMount
 */
const withStore = (stores, options = {}) => {
    const { onInit, onMount, onWillUnMount } = options
    if (onInit) {
        onInit(stores)
    }
    return Component => {
        class withStore extends PureComponent {
            componentDidMount() {
                if (onMount) {
                    onMount(stores, this.props)
                }
            }

            componentWillUnmount() {
                if (onWillUnMount) {
                    onWillUnMount(stores, this.props)
                }
            }

            render() {
                return (
                    <Provider {...stores}>
                        <Component {...this.props} />
                    </Provider>
                )
            }
        }
        return withStore
    }
}

export default withStore

