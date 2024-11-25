/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useCurrent = () => {
    const query = useQuery({
        queryKey: ["current"],
        queryFn: async () => {
            const respone = await client.api.auth.current.$get();

            if (!respone.ok) {
                return null;
            }

            const { data } = await respone.json();

            return data;
        },
    });

    return query;
}