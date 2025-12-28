import { getConnections, PgTestClient } from "pgsql-test";

let db: PgTestClient;
let pg: PgTestClient;
let teardown: () => Promise<void>;

beforeAll(async () => {
  ({ pg, db, teardown } = await getConnections());
});

afterAll(async () => {
  await teardown();
});

beforeEach(async () => {
  await db.beforeEach();
});

afterEach(async () => {
  await db.afterEach();
});

it("should pass", async () => {
  const result = await pg.query(
    "SELECT faker.word() as word, faker.name() as name"
  );
  console.log(result.rows);
});

it("should create a pet", async () => {
  const result = await pg.query(
    "INSERT INTO my_pets.pets (name, age) VALUES ($1, $2) RETURNING *`",
    ["Fido", 3]
  );
  console.log(result.rows);
});
