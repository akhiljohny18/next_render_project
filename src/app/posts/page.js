import TestComponent from "../../../components/testComponent";
import styles from "../../../styles/posts.css";
import  {getProducts} from "../api"

export default async function Products() {
    const data = await getProducts(); 
    // Call the imported function to fetch data
  
    console.log(data); 
    // Log the fetched data for debugging (optional)
  
    return (
      <>
        <h1 className="text-center heading">Latest Posts</h1>
        <TestComponent values={data} /> {/* Pass the fetched data as props */}
      </>
    );
  }
