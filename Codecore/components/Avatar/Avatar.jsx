import React from 'react'

const Avatars = ({children,backgroundColor,padding,color,borderRadius,fontSize,textAlign,py,px,cursor,textDecoration}) => {
  const style ={
    backgroundColor,
    padding:`${py} ${px}`,
    color: color || 'black',
    borderRadius,
    fontSize,
    textAlign:"center",
    cursor:cursor || null,
    textDecoration:"none"
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Avatars