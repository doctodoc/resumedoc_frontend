// import { useNavigate } from "react-router-dom";

type MenuCard = {
    title: string;
    description: string;
    Icon: ({color}:{color:string})=>JSX.Element;
    link?: string;
    handleClose: ()=>void
}

const MenuCard = ({title, description, Icon, link, handleClose}:MenuCard)=>{
    // const navigate = useNavigate()

    // const handleNavigateMenu = ()=>{
    //     navigate(link)
    //     handleClose()
    // }
  return(
    <button className="flex gap-2 items-center justify-center" 
    // onClick={handleNavigateMenu}
    >
      <div className={`flex items-center justify-center w-7 p-1 bg-purple-100 rounded-md aspect-auto ${title}mt-1`}>
        <Icon color={'#1DA1F2'}/>
      </div>
      <div className="flex flex-col flex-1  text-main_bg font-medium items-start text-start">
        <p className="text-start">{title}</p>
        <p className="font-light text-xs text-light_font">{description}</p>
      </div>
    </button>
  )
}

export default MenuCard