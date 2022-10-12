import { Button } from "./Button";

interface PaginationProps {
    currentPage: number;
    onPageChange: (page: number) => void;
    pages: string[];
}

export const Pagination = ({ currentPage, onPageChange, pages }: PaginationProps) => {
    return (
        <div className="flex flex-row justify-center mt-8 pb-8">
            {
                pages.map((page, index) => {
                    if (page === '...') {
                        return (
                            <div key={index} className="flex flex-row justify-center items-center">
                                <span className="text-gray-400 text-sm font-medium mx-2">...</span>
                            </div>
                        )
                    }

                    return (
                        <Button
                            key={index}
                            label={page.toString()}
                            style={`${currentPage === Number(page) ? "bg-green-500 text-white" : "bg-transparent text-green-500"} mr-2 hover:text-white hover:shadow-2xl focus:border-transparent transition-all translate-x-0 animate-none border-none`}
                            onClick={() => onPageChange(Number(page))}
                        />
                    )
                })
            }
        </div>
    )
}