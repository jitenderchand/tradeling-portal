"use client";

import { FunctionComponent } from "react";
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import classnames from "classnames";

const getPageNumbers = (
  currentPage: number,
  totalPages: number,
): (number | string)[] => {
  const maxVisible = 5;
  const pages: (number | string)[] = [];

  if (totalPages <= maxVisible) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, "...", totalPages);
    } else if (currentPage > totalPages - 3) {
      pages.push(
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      );
    } else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      );
    }
  }

  return pages;
};

export interface IProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

export const Pagination: FunctionComponent<IProps> = (props: IProps) => {
  const { currentPage, onPageChange, totalCount, pageSize, onPageSizeChange } =
    props;
  const totalPages = Math.ceil(totalCount / Number(pageSize));
  const pageNumbers = getPageNumbers(currentPage, totalPages);
  return (
    <div className="flex justify-between">
      <div className="flex text-sm font-bold">
        <span>Total Records: </span> {totalCount}
      </div>
      <div>
        <PaginationComponent>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => onPageChange(Number(currentPage - 1))}
                className={classnames("cursor-pointer", {
                  "pointer-events-none opacity-50": currentPage <= 1,
                })}
              />
            </PaginationItem>
            {pageNumbers.map((page, idx) => {
              return (
                <PaginationItem key={idx}>
                  {page === "..." ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      onClick={() => onPageChange(Number(page))}
                      isActive={page === currentPage}
                      className={classnames("cursor-pointer", {
                        "bg-primary text-white": page === currentPage,
                      })}
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              );
            })}
            <PaginationItem>
              <PaginationNext
                className={classnames("cursor-pointer", {
                  "pointer-events-none opacity-50":
                    currentPage >= pageNumbers.length,
                })}
                onClick={() => onPageChange(Number(currentPage + 1))}
              />
            </PaginationItem>
          </PaginationContent>
        </PaginationComponent>
      </div>
      <div>
        <Select
          value={pageSize.toString()}
          onValueChange={(value) => {
            onPageSizeChange(Number(value));
          }}
        >
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={"10"} />
          </SelectTrigger>
          <SelectContent side="top">
            {[10, 30, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
