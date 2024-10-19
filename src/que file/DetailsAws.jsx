


const DetailsAws = ({query}) => {

    const { que, ans } = query


    return (
        <div>
            <a href="#" class=" h-[300px] w-[400px] hover:border-[1px] border-black block max-w-sm p-6 bg-white   rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Que: {que} </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Answer: {ans} </p>
        </a>
        </div>
    );
};

export default DetailsAws;