import MealItem from "./MealsItems";
import useHttp from "../hooks/useHttp";
import Error from "./Error";

const requestconfig = {};

export default function Meals() {
    // const [loadedMeals, setLoadedMeals] = useState([]);

    // useEffect(() => {
    //     async function fetchMeals() {
    //         const response = await fetch('http://localhost:3000/meals');

    //         if (!response.ok) {
    //             //......
    //         }

    //         const meals = await response.json();
    //         setLoadedMeals(meals);
    //     }

    //     fetchMeals();
    // }, [])

    const {
        data: loadedMeals,
        isLoading,
        error,
    } = useHttp('http://localhost:3000/meals', requestconfig, []);

    if(isLoading) {
        return <h1 className="center">Fetching Meals... </h1>
    }

    if (error) {
        return <Error title="Failed to Fetch Meals" message={error} />
    }

    return <ul id="meals">
        {loadedMeals.map((meal) => (
            <MealItem key={meal.id} meal={meal}/>
        ))}
    </ul>
}