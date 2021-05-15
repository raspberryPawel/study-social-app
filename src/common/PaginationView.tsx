import React, {PropsWithChildren, useEffect, useState} from "react";
import Pagination from "@material-ui/lab/Pagination";

interface IProps<T> {
    list: T[],
    renderListElement: (element: T) => JSX.Element,
    countPerPage?: number,
}

export const PaginationView = <T, >(props: PropsWithChildren<IProps<T>>) => {
    const {list, countPerPage, renderListElement} = props;
    const defaultCountPerPage = 10;

    const [pageNumber, changePageNumber] = useState<number>(1);
    const [pagesCount, changePagesCount] = useState<number>(1);

    const getCountPerPage = () => countPerPage || defaultCountPerPage;

    useEffect(() => {
        const nextPagesCount = Math.ceil(list.length / getCountPerPage());

        if (pagesCount !== nextPagesCount) {
            changePagesCount(nextPagesCount);
        }

        changePageNumber(1);
    }, [list]);

    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        changePageNumber(page);
    };

    const getIndex = () => {
        return pageNumber === 1 ? 0 : (pageNumber - 1) * getCountPerPage();
    };

    return (
        <div>
            <>
                {list
                    .slice(getIndex(), getIndex() + getCountPerPage())
                    .map((element: T) => renderListElement(element)
                    )}
            </>
            <Pagination page={pageNumber} count={pagesCount} onChange={handleChange}/>
        </div>
    );
};
