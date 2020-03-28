const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connections');
describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll( async ()=> {
    await connection.destroy();
  });
  it('should be able to create a new ONG' ,  async() => {
    const response = await request(app).post('/ongs').send({
      name:"2.0",
      email:"contato@gmail.com",
      whatsapp:"11957142590",
      city:"Rio do sul",
      uf:"SC"
    });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});