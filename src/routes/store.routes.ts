import express from 'express';

import { getRepository, getConnection } from 'typeorm';

import Store from '../database/entity/Store';

import * as responseFormat from '../utils/responseFormat';

const routes = express.Router();

routes.get('/', async (_, res) => {
  const storeRepository = getConnection().getRepository(Store);
  const stores = await storeRepository.find({ relations: ['products'] });

  return res.json(
    responseFormat.success({
      message: 'Lojas carregadas com sucesso!',
      data: stores,
    })
  );
});

routes.get('/:id', async (req, res) => {
  const storeRepository = getConnection().getRepository(Store);
  const store = await storeRepository.findOne({
    where: { id: req.params.id },
    relations: ['products'],
  });

  return res.json(
    responseFormat.success({
      message: 'Loja carregada com sucesso!',
      data: store,
    })
  );
});

routes.delete('/:id', async (req, res) => {
  //await Store.delete({ id: req.params.id });
  const storeRepository = getConnection().getRepository(Store);
  const store = await storeRepository.findOne({ where: { id: req.params.id } });

  await storeRepository.remove(store);

  return res.json(
    responseFormat.success({
      message: 'Loja eliminada com sucesso!',
      data: undefined,
    })
  );
});

routes.post('/', async (req, res) => {
  const storeRepository = getConnection().getRepository(Store);
  let store = storeRepository.create(req.body);

  await storeRepository.save(store);

  return res.json(
    responseFormat.success({
      message: 'Loja inserida com sucesso!',
      data: store,
    })
  );
});

routes.put('/:id', async (req, res) => {
  const storeRepository = getConnection().getRepository(Store);
  let store = await storeRepository.findOne({ where: { id: req.params.id } });

  store = { ...store, ...req.body };

  await storeRepository.save(store);

  return res.json(
    responseFormat.success({
      message: 'Loja editada com sucesso!',
      data: store,
    })
  );
});

export default routes;
