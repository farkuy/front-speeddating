
interface IPagePath {
    name: string,
    path: string
}

export const pagesPath: IPagePath [] = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "Auth",
        path: "/auth"
    }
]