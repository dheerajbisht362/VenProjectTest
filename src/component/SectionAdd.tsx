function SectionAdd({isAdmin, imgSrc, headingText, subText}:{isAdmin:boolean; imgSrc:string; headingText:string; subText:string}) {

  return (
    <div className="flex my-4">
        <div className="w-10 mx-4 ">
            <img src={imgSrc} />
        </div>
        <div>
            <div contentEditable={isAdmin} className="font-bold text-xl" >{headingText}</div>
            <div contentEditable={isAdmin} className="text-gray-700">{subText}</div>
        </div>
    </div>
  )
}

export default SectionAdd