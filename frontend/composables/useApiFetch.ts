import type { UseFetchOptions } from '#app'

export async function useApiFetch<T>(path: string | (() => string), options: UseFetchOptions<T> = {}) {
    let headers: Record<string, string> = {}

    return useFetch(useRuntimeConfig().public.apiBaseUrl + path, {
        credentials: 'include',
        watch: false,
        ...options,
        headers: {
            ...headers, 
            ...options?.headers
        }
    });
}