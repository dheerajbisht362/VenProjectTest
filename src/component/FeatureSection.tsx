function FeatureSection({isAdmin}:{isAdmin:boolean}) {
    return (
      <>
        <div className="p-4 rounded-sm bg-white">
            <div>
                <div contentEditable={isAdmin}  className="heading text-3xl font-bold mt-2 mb-2">
                    1 Bed in Blakely Tower, Dubai Marina
                </div> 
                <div contentEditable={isAdmin}  className="heading mb-4">
                    2 bed | 3 bath | 1350 sq.ft | Dubai Marina
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
            </div>
   
        </div>
      </>
    )
  }
  
  export default FeatureSection