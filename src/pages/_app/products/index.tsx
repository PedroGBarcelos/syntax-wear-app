import { createFileRoute } from '@tanstack/react-router'
import { ProductList } from '../../../components/ProductList'
import { products } from '../../../mocks/products'

export const Route = createFileRoute('/_app/products/')({
    component: RouteComponent,
    head: () => ({
    meta: [
      { title: 'Produtos - SyntaxWear ' }
    ]
  })
})

function RouteComponent() {
    return (
        <section className='container pt-44 md:pt-54 pb-10 md:px-10 mb-10 text-black min-h-[80vh] flex flex-col items-center justify-center'>
            <h1 className='text-center text-3xl mb-3'> Lista de produtos</h1>

            <h2 className='text-center mb-10 p-4'>Conforto expecional para suas aventuras do dia-a-dia</h2>

            <ProductList products={products} />
        </section>
    )
}
