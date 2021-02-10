import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';

const products = [
    {id: 1, name: 'Running Shoes', description: 'nike air max pro', price: '$5', image: 'https://static01.nyt.com/images/2020/02/25/well/PHYSED-SHOES1/merlin_168154896_a69879b8-d43a-40d0-8297-dd7086d7d784-jumbo.jpg?quality=90&auto=webp' },
    {id: 2, name: 'MacBook Pro', description: 'Apple MacBook Pro', price: '$10', image: 'https://i.pcmag.com/imagery/reviews/038Dr5TVEpwIv8rCljx6UcF-13..1588802180.jpg' },
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;