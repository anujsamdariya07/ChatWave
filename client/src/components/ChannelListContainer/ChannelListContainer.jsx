import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import WaveIcon from '../../assets/wave.png'
import LogoutIcon from '../../assets/logout.png'
import ChannelSearch from '../ChannelSearch/ChannelSearch'
import TeamChannelList from '../TeamChannelList/TeamChannelList'
import TeamChannelPreview from '../TeamChannelPreview/TeamChannelPreview'

const SideBar = () => (
  <div className='channel-list__sidebar'>
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={WaveIcon} alt="ChatWave" width={30} />
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner">
        <img src={LogoutIcon} alt="Logout" width={30} />
      </div>
    </div>
  </div>
)

const CompanyHeader = () => (
  <div className='channel-list__header'>
    <p className="channel-list__header__text">ChatWave</p>
  </div>
)

function ChannelListContainer() {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div className='channel-list__list__wrapper'>
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => { }}
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type='team'
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview 
              {...previewProps}
              type='team'
            />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => { }}
          List={(listProps) => (
            <TeamChannelList
              {...listProps}
              type='messaging'
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview 
              {...previewProps}
              type='messaging'
            />
          )}
        />
      </div>
    </div>
  )
}

export default ChannelListContainer