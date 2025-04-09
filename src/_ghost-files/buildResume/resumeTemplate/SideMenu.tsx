import { Close } from '@mui/icons-material'
import React, { ReactNode } from 'react'

type SideMenuType = {
    children: Array<ReactNode> | ReactNode | string;
    title: string;
    closeSideMenu: ()=> void;
}

const SideMenu = ({children, title, closeSideMenu}:SideMenuType) => {
  return (
    <div className="flex flex-col gap-6 pb-8 w-[90%] max-w-[400px] min-w-[250px] h-fit overflow-y-auto absolute top-6 right-[calc(100%+4px)] z-5 shadow-lg bg-light_gray_widget dark:bg-secondary_dark px-3 py-3 dark:border-[0.8px] dark:border-r-0 dark:border-light_gray_widget/15 rounded-l-lg">
      <header className="flex justify-between">
        <button className="text-grey_icon dark:text-dark_primary_text flex items-center gap-3 ">
          {/* <ArrowBackIos className="text-base" /> */}
          <p className="font-medium text-base">{title}</p>
        </button>

        <button className="text-grey_icon dark:text-dark_primary_text flex items-center gap-3 " onClick={closeSideMenu}>
          <Close className="text-[1.12rem] " />
        </button>
      </header>

      <main className="flex flex-col gap-4">
        {children}
      </main>
    </div>
  )
}

export default SideMenu