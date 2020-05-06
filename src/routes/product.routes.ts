import express from 'express';

import { getRepository, getConnection } from 'typeorm';

import Product from '../database/entity/Product';

import * as responseFormat from '../utils/responseFormat';

const routes = express.Router();

routes.get('/', async (_, res) => {
  const productRepository = getConnection().getRepository(Product);
  const products = await productRepository.find();

  return res.json(
    responseFormat.success({
      message: 'Produtos carregadas com sucesso!',
      data: products,
    })
  );
});

routes.get('/:id', async (req, res) => {
  const productRepository = getConnection().getRepository(Product);
  const product = await productRepository.findOne({
    where: { id: req.params.id },
  });

  return res.json(
    responseFormat.success({
      message: 'Produto carregada com sucesso!',
      data: product,
    })
  );
});

routes.delete('/:id', async (req, res) => {
  //await Product.delete({ id: req.params.id });
  const productRepository = getConnection().getRepository(Product);
  const product = await productRepository.findOne({
    where: { id: req.params.id },
  });

  await productRepository.remove(product);

  return res.json(
    responseFormat.success({
      message: 'Produto eliminada com sucesso!',
      data: undefined,
    })
  );
});

routes.post('/', async (req, res) => {
  const productRepository = getConnection().getRepository(Product);
  let product = productRepository.create(req.body);

  await productRepository.save(product);

  return res.json(
    responseFormat.success({
      message: 'Produto inserida com sucesso!',
      data: product,
    })
  );
});

routes.put('/:id', async (req, res) => {
  const productRepository = getConnection().getRepository(Product);
  let product = await productRepository.findOne({
    where: { id: req.params.id },
  });

  product = { ...product, ...req.body };

  await productRepository.save(product);

  return res.json(
    responseFormat.success({
      message: 'Produto editada com sucesso!',
      data: product,
    })
  );
});

export default routes;
