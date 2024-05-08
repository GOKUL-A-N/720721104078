import React,{useEffect , useState} from 'react'

const SpecificProduct = () => {

    const [Product,setProduct] = useState([])

    useEffect(() => {
        const {data} = fetch(`http://20.244.56.144/test/companies/:companyname/categories/:categoryname/products?top=n&minPrice=p&maxPrice=q`)
    })

  return (
    <div>
        <h1>Specified Product</h1>
        <form>
            <input type="text" placeholder='company name'  />
        </form>
    </div>
  )
}

export default SpecificProduct