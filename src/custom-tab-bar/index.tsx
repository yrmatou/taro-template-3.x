import { CoverImage, CoverView } from '@tarojs/components'
import Taro from '@tarojs/taro'
import clx from 'classnames'
import config from '@/app.config'
import { useEffect, useState } from 'react'
import './index.scss'

const isEqualPath = (a: string, b: string) =>
    (a || '').replace(/^\//, '') === (b || '').replace(/^\//, '')

const switchTo = (path) => () => {
    Taro.switchTab({
        url: '/' + path,
    })
}

const CustomTabbar = () => {
    let route = Taro.getCurrentInstance()
    const [path, setPath] = useState(route.router ? route.router.path : '')
    useEffect(() => {
        wx && wx.onAppRoute(function (res: any) {
            setPath(res.path)
        })
    }, [])

    return (
        <CoverView className="tabbar">
            <CoverView className="tabbar-order" />
            {config.tabBar.list.map((item: any, index: number) => {
                const isSelected = isEqualPath(path, item.pagePath)

                return (
                    <CoverView
                        className={clx('tabbar-item', {
                            'tabbar-item--selected': isSelected,
                        })}
                        key={index}
                        onClick={switchTo(item.pagePath)}
                    >
                        <CoverImage
                            className="tabbar-item__image"
                            src={`../${isSelected ? item.selectedIconPath : item.iconPath}`}
                        />
                        <CoverView className="tabbar-item__text">{item.text}</CoverView>
                    </CoverView>
                )
            })}
        </CoverView>
    )
}

export default CustomTabbar