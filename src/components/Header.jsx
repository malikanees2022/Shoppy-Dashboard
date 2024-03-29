import React from 'react'

const Header = ({category, title}) => (
  <div className="flex flex-col bg-white w-fit mx-auto rounded-lg items-center">
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>
  </div>
)

export default Header
