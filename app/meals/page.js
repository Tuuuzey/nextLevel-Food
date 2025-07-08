import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getAllMeals } from '@/lib/meals'
import { Suspense } from 'react';

async function Meals() {
  const meals = await getAllMeals();
  return <MealsGrid meals={meals}/>;
}

export default function MealsPage() {

  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals created <span className={classes.highlight}>by you!</span></h1>
        <p>Choose your favorite recipe and cook it yourself.</p>
        <p>
          <Link href={'/meals/share'} className={classes.cta}>Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  )
}