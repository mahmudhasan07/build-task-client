import { useQuery } from "@tanstack/react-query";
import useAxios from "../Axios/useAxios";


const useServer2 = (value1, value2, value3) => {
    const axiosLink = useAxios()
    const { isPending, isError, data, error, refetch } = useQuery({
        queryKey: [value1, value2, value3],
        queryFn: async () => {
            const res = await axiosLink.get(`${value1}/${value2}?data=${value3}`)
            return res.data
        }
    })

    if (isPending) {
        return 'loading'
    }

    if (isError) {
        return 'error'
    }
    return [data, refetch]
};

export default useServer2;