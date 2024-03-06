import React, {useEffect} from 'react'
import { getDigimon } from '../../Dataservices/DataServices'

const HomePageComponent = () => {

  useEffect(() => {

    const getData = async () => {
      const digiData = await getDigimon();
      console.log(digiData);
    }
      
  }, [])

  return (
    <div>
      <h1>This is our home page! </h1>
    </div>
  )
}

export default HomePageComponent
