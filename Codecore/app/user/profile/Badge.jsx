import React from 'react'

import bronzeBadge from '../../../public/bronze-medal.png'
import silverBadge from '../../../public/silver-medal.png'
import goldBadge from '../../../public/gold-medal.png'
import Image from 'next/image'

const Badge = ({badgeType}) => {
    let badgeImage;

    switch (badgeType?.toLowerCase()) {
      case 'bronze':
        badgeImage = bronzeBadge;
        break;
      case 'silver':
        badgeImage = silverBadge;
        break;
      case 'gold':
        badgeImage = goldBadge;
        break;
      default:
        badgeImage = null; 
    }
  return (
   
    <div className={`badge ${badgeType?.toLowerCase()}`}>
    {badgeImage && <Image src={badgeImage} alt={`${badgeType} Badge`} />}
    <p>{badgeType} Badge</p>
  </div>
  )
}

export default Badge