import React from 'react'
import AddChannel from '../../assets/addchannel.png'

function TeamChannelList({ children, error = false, loading, type }) {
  if (error) {
    return type === 'team' ? (
      <div className="team-channeil-list">
        <p className='team-channel-list__message'>
          Connection error, please wait a moment and try again.
        </p>
      </div>
    ) : null
  }

  if (loading) {
    return type === 'team' ? (
      <div className="team-channeil-list">
        <p className='team-channel-list__message loading'>
          {type === 'team' ? 'Channels' : 'Messages'}
          Loading...
        </p>
      </div>
    ) : null
  }

  return (
    <div className='team-channel-list'>
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === 'team' ? 'Channels' : 'Direct  Messages'}
        </p>
        {/* TODO: Button to add the channel */}
      </div>
      {children}
    </div>
  )
}

export default TeamChannelList