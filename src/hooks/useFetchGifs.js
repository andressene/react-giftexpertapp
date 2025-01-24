import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'



export const useFetchGifs = ( category ) => {
  
    const [state, setState] = useState({
        data:[],
        loading: true        
        
    });
    
    useEffect( () => { 
        
        getGifs( category )
            .then( imgs => {

                    setState({ 
                        data: imgs,
                        loading: false 
                    });
                    
            })


    }, [ category ]) //2do arreglo [] es una lista de dependencias. sin dependencias el useEffect solo dispara una vez



    return state;


}
