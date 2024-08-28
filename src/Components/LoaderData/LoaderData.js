const LoaderData = async ({params}) => {
    try {
        const fetchData = await fetch('../Dashboard/uefachamp.json');
        const res = await fetchData.json();
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

export default LoaderData;