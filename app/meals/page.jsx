import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { getMeals } from "@/lib/meals";

export default async function MealsPage() {
  const meals = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals , created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          {" "}
          Choose your fevourite recpies and cook it yourself. It is easy and
          free
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite Recipe </Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}