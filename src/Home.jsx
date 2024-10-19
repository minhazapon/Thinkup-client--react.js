import AddForm from "./crud file/AddForm";
import Banner from "./home file/Banner";
import Explore from "./home file/Explore";
import MernStack from "./home file/MernStack";
import Official from "./official documents/Official";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MernStack></MernStack>
            <Explore></Explore>
            <Official></Official>
            <AddForm></AddForm>
            
        </div>
    );
};

export default Home;