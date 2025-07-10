import sql from 'better-sqlite3';

const db = sql('meals.db');

export function getAllMeals() {
  return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}