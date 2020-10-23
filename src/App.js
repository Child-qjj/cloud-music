import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import routes from './router'
import store from './store'

import QJAppFooter from '@/components/app-footer'
import QJAppheader from '@/components/app-header'
import QJAppPlayerBar from './pages/player/app-player-bar'
import { HashRouter } from 'react-router-dom'
import { Suspense } from 'react'






export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <QJAppheader/>
                    <Suspense fallback={ <div>Page Loding!</div>}>
                        {renderRoutes(routes)}
                    </Suspense>                   
                <QJAppFooter/>
                <QJAppPlayerBar />
            </HashRouter>
        </Provider>
    )
})
