import { useRouter } from 'next/router'

const productItem = ()=>{
  
  const { query: {id}} = useRouter();
  return(
    <div>Product: {id}</div>
  )

}

export default productItem
