import { Filter } from "./Filter"
import { Item } from "./Item"


// const productFiltered = ({products, filterState, handleFilterChange}) => (
//     <>
//         <div className="">
//             <label>Buscar</label>
//             <input className="form-control" type="text" value={filterState} onChange={handleFilterChange} />
//         </div>
//         <br />

//         {
//             filterState === '' ? 
                
//                     products.map(product => <div className="card w-25" key={product.id}>
//                                                 <img src={product.imageUrl} className="card-img-top"/>
//                                                 <div className="card-body">
//                                                     <p>Nombre: {product.name}</p>
//                                                     <p>Category: {product.category}</p>
//                                                     <p>Precio: {product.price}</p>
//                                                 </div>
//                                                 <div className="card-footer">
//                                                     <button className="btn btn-outline-dark w-100">detalle</button>
//                                                 </div>
//                                             </div>
//                     )
                
//                 :
                
//                     products
//                         .filter(prod => prod.category.toLowerCase().includes(filterState.toLowerCase()))
//                         .map(product => <div className="card w-25">
//                                             <img src={product.imageUrl} className="card-img-top"/>
//                                             <div className="card-body">
//                                                 <p>Nombre: {product.name}</p>
//                                                 <p>Category: {product.category}</p>
//                                                 <p>Precio: {product.price}</p>
//                                             </div>
//                                             <div className="card-footer">
//                                                 <button className="btn btn-outline-dark w-100">detalle</button>
//                                             </div>
//                                         </div>
//                     )
                

//         }
//     </>
// )

export const ItemList = ({ products }) => {
    return (
        <div className="container mt-3" style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            {products.map(product => <Item key={product.id} product={product} />)}
        </div>

    )
}