
const glbFunc = () => {
   
       const backOne = () => {
        uni.navigateBack()
    }
  const goTo = (url) => {
        uni.navigateTo({
             url:url
        })
    }
 const goTab = (url) => {
        uni.switchTab({
             url:url
        })
    }

    return {
        goTo,
        backOne,
        goTab,
      
    
    }

}

export default glbFunc
