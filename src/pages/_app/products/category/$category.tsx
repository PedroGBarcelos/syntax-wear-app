import { createFileRoute, Link } from '@tanstack/react-router'
import { ProductList } from '../../../../components/ProductList'
import { products } from '../../../../mocks/products';

export const Route = createFileRoute('/_app/products/category/$category')({
    component: RouteComponent,
})

function RouteComponent() {

    const { category } = Route.useParams();

    const filteredProducts = products.filter(product => (product.category?.name ?? "").toLowerCase() === category.toLowerCase());

    return (
        <section className='container pt-44 md:pt-54 pb-10 md:px-10 mb-10 text-black'>
            <h1 className='text-center text-3xl mb-3'> Lista de produtos</h1>

            <h2 className='text-center mb-10 p-4'>Conforto expecional para suas aventuras do dia-a-dia</h2>

            {
                products.length === 0 ? (
                    <>
                        <p className='text-center'>Nenhum produto encontrado para esta categoria</p>
                        <Link to="/products" className="text-accent hover:text-accent-hover underline"></Link>
                    </>
                ) : (
                    <ProductList products={filteredProducts} />
                )
            }
        </section>
    )
}
